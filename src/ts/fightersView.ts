import View from './view';
import FighterView from './fighterView';
import { fighterService } from './services/fightersService';

const modal = document.querySelector('.modal');
const health = document.querySelector('.form-health');
const power =  document.querySelector('.form-power');
const avatar = document.querySelector('.avatar');
const close = document.querySelector('.close');
const modalForm = document.querySelector('.modal-form');


class FightersView extends View {
  constructor(fighters) {
    super();
    
    this.handleClick = this.handleFighterClick.bind(this);
    this.handleSelect = this.handleFighterSelect.bind(this);
    this.fighterToFight = [];
    this.createFighters(fighters);

    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const idx = e.target.dataset.id
      const oldFighter = this.fightersDetailsMap.get(idx);

      const updatedFighter = {
        ...oldFighter,
        attack: +power.value,
        health: +health.value
      };

      this.fightersDetailsMap.set(idx, updatedFighter)
      const index = this.fighterToFight.findIndex((item) => idx === item._id)
      this.fighterToFight.splice( index, 1, updatedFighter);

      this.handleModalClose();
    })
  }

  fightersDetailsMap = new Map();
  
  createFighters(fighters) {
    const fighterElements = fighters.map(fighter => {
      const fighterView = new FighterView(fighter, this.handleClick, this.handleSelect);
      return fighterView.element;
    });

    this.element = this.createElement({ tagName: 'div', className: 'fighters' });
    this.element.append(...fighterElements);
  }

  handleModalClose() {
    modal.style.display='none';
  }

  openModal(fighterDetails) {
    modal.style.display='block';
    modalForm.setAttribute('data-id', fighterDetails._id);
    avatar.src = fighterDetails.source;
    health.value = fighterDetails.health;
    power.value = fighterDetails.attack;
  }

  async handleFighterClick(event, fighter) {
    let fighterDetails = this.fightersDetailsMap.get(fighter._id);

    if (!fighterDetails) {
      fighterDetails = await fighterService.getFighterDetails(fighter._id);
      this.fightersDetailsMap.set(fighter._id, fighterDetails);
    }
    this.openModal(fighterDetails);
    
    close.addEventListener('click', () => {
      this.handleModalClose();
    })
    this.handleFighterSelect(event, fighterDetails)
  }

  handleFighterSelect(event, fighter) {
    const index = this.fighterToFight.findIndex((item) => item._id === fighter._id)

    if (index === -1) {
      this.fighterToFight.push(fighter)
    } else {
      this.fighterToFight.splice(index,1)
    }
  }
}

export default FightersView;
