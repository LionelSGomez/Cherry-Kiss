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

function extractArt(filename) {
  const match = filename.match(/art(\d+)/i); //Los parentesis capturan por separado el bloque de dígitos después de "art" ["art1111", "1111"]
  return match ? match[1] : null;  // Por eso acá se pide el índice 1
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
      image: files.map((file, i) => ({
        path: `/img/marcas/${brandName}/${file}`,
        art: extractArt(file),
        name: file,
        alt: `Articulo ${i + 1}`
      }))
    };
  });
}








        


module.exports = {
  banners: getBanners(),
  brands: getBrands(),
  brandsimg: getBrandsImg()
};
