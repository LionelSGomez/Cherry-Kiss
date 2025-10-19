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
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map(file => ({
      name: path.parse(file).name,
      image: file
    }));
}

/* // Función para generar brandsimg dinámicamente
function getBrandsImg() {
  const folder = path.join(basePath, 'brandsimg');
  const brands = fs.readdirSync(folder);

  return brands.map(brandName => {
    const brandPath = path.join(folder, brandName);
    const files = fs.readdirSync(brandPath);

    return {
      name: brandName,
      image: files.map((file, i) => ({
        src: file,
        alt: `Articulo ${i + 1}`
      }))
    };
  });
} */

module.exports = {
  banners: getBanners(),
  brands: getBrands(),
  // brandsimg: getBrandsImg()
};
