let body = document.querySelector('body');
let shoeImg = document.querySelector('.shoe');
let shoeName = document.querySelector('.shoe-title');
let shoeColor = document.querySelector('.shoe-color');
let sectionTitle = document.querySelector('.section-title');

function renderPage(shoe) {
  if (shoe === 'busenitz') {
    body.style.backgroundColor = 'var(--busenitz-pro-bg)';
    shoeImg.src = './src/public/busenit-pro.png';

    shoeName.textContent = 'Adidas Busenitz Pro';
    shoeName.style.color = 'var(--busenitz-pro-primary)';

    shoeColor.style.color = '#e4e4e4';
    shoeColor.textContent = 'Core Black';
    sectionTitle.style.color = 'var(--busenitz-pro-primary)';
  } else if (shoe === 'court') {
    body.style.backgroundColor = 'var(--court-funk-bg)';
    shoeImg.src = './src/public/court-funk.png';

    shoeName.textContent = 'Adidas Court Funk';
    shoeName.style.color = 'var(--court-funk-primary)';

    shoeColor.style.color = '#e4e4e4';
    shoeColor.textContent = 'Cloud White';
    sectionTitle.style.color = 'var(--court-funk-primary)';
  } else {
    body.style.backgroundColor = '#e4e4e4';
    shoeImg.src = './src/public/forum-bonega.png';

    shoeName.textContent = 'Adidas Forum Bonega';
    shoeName.style.color = 'var(--forum-bonega-primary)';

    shoeColor.style.color = '#000';
    shoeColor.textContent = 'Wonder Bege';
    sectionTitle.style.color = 'var(--forum-bonega-primary)';
  }
}