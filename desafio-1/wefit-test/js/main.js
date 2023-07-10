// * #### Menu ####

const divMenuElement = document.querySelector('.btn-group-vertical');
divMenuElement.classList.remove('btn-group-vertical');
divMenuElement.setAttribute('aria-label', 'Horizontal button group');

// * ##### Header #####

const divHeaderElement = document.querySelector('.jumbotron');
divHeaderElement.classList.add('text-right');
divHeaderElement.classList.add('bg-secondary');
divHeaderElement.classList.add('text-white');

const aHeaderElement = document.querySelector('.btn-lg');
aHeaderElement.classList.remove('btn-primary');
aHeaderElement.classList.add('btn-success');

// * ##### Cards #####

const rows = document.querySelectorAll('.row');

rows.forEach(row => {
  const cards = row.querySelectorAll('.col-lg-3');
  
  if (cards.length > 0)  {
        const novaOrdem = [3, 0, 2, 1];
        
        const cardsTemp = Array.from(cards);
        
        cardsTemp.forEach(card => {
            card.parentElement.removeChild(card);
        });

        novaOrdem.forEach(index => {
            if (index === 0) {
                const aCardElement = cardsTemp[index].querySelector('.btn');
                aCardElement.classList.remove('btn-primary');
                aCardElement.classList.add('btn-success');
            }
            row.appendChild(cardsTemp[index]);
        });
    }
});

// * ##### List #####

const ulElement = document.querySelector('.list-group');

const firstChild = ulElement.firstElementChild;
firstChild.classList.remove('active');

const newFourthLiElement = document.createElement('li');
newFourthLiElement.classList.add('list-group-item');
newFourthLiElement.textContent = 'Quarto item';
ulElement.appendChild(newFourthLiElement);
newFourthLiElement.classList.add('active');

const newFifthLiElement = document.createElement('li');
newFifthLiElement.classList.add('list-group-item');
newFifthLiElement.textContent = 'Quinto item';
ulElement.appendChild(newFifthLiElement);
