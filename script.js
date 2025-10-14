const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.slide');
let index = 0;

document.getElementById('next').onclick = () => {
  index = (index + 1) % slides.length;
  track.style.transform = `translateX(-${index * 100}vw)`;
};
document.getElementById('prev').onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  track.style.transform = `translateX(-${index * 100}vw)`;
};