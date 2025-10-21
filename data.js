const fs = require('fs');
const path = require('path');

// Carpeta base de imágenes
const basePath = path.join(__dirname, 'public', 'img');

// Función para generar banners dinámicamente
function getBanners() {
  const bannerFolder = path.join(basePath, '/home/banners');
  return fs.readdirSync(bannerFolder)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map((file, i) => ({
      image: file,
      alt: `Banner ${i + 1}`
    }));
    
}

// Función para generar brands dinámicamente
function getBrands() {
  const brandFolder = path.join(basePath, '/home/logos');
  return fs.readdirSync(brandFolder)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file)) // Regex "\." busca el punto (".") de forma literal. "(jpg|jpeg...)" las posibles extensiones. "$" indica el final del string. "i" para que no distinga entre mayúsculas y minúsculas. 
    .map(file => ({
      name: path.parse(file).name,
      image: file
    }));
}


function extractAllName(filename) {
  const regex = /(?<prefijo>\w+)?\-?art(?<art>\d+)(?<sufijo>[a-zA-Z]+)?\-?(?<adic>\d)?\.(?<ext>jpg|jpeg|png|webp)$/i;
  const match = filename.match(regex);
  return match ? match.groups : null;
}


// Función para generar brandsimg dinámicamente
function getBrandsImg() {
  const folder = path.join(basePath, 'marcas');
  const brands = fs.readdirSync(folder);

  return brands.map(brandName => {
    const brandPath = path.join(folder, brandName);
    const files = fs.readdirSync(brandPath);

    return {
      name: brandName,
      class: brandName.toLowerCase().replace(/\s+/g, '-'),
      image: files.map(file => {
        const data = extractAllName(file);
        return {
          path: `/img/marcas/${brandName}/${file}`,
          art: data?.art || '',          // número de artículo
          name: file,                    // nombre de archivo
          type: data?.prefijo || 'conjunto',      // color (si existe)
          desc: data?.sufijo || '',      // descripción (si existe)
          adic: data?.adic || '',        // si existe alguna foto adicional al mismo articulo
          alt: `Artículo ${data?.art || ''} de la marca ${brandName}`
        };
      })
    };
  });
}


module.exports = {
  banners: getBanners(),
  brands: getBrands(),
  brandsimg: getBrandsImg()
};
