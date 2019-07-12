import View from './view';

class FighterView extends View {
  constructor(fighter, handleClick, handleSelect) {
    super();

    this.createFighter(fighter, handleClick, handleSelect);
  }

  createFighter(fighter, handleClick, handleSelect) {
    const { name, source, _id } = fighter;
    const nameElement = this.createName(name);
    const imageElement = this.createImage(source);

    const checkBox = this.createElement({ 
      tagName: 'input', 
      className: 'choise-fighter', 
      attributes: { type: 'checkbox', id:`fighter-${_id}`, name:"check[]" } });
    
    this.element = this.createElement({ tagName: 'label', className: 'fighter', attributes:{ for:`fighter-${_id}`} });
    this.element.append(checkBox, imageElement, nameElement);

    this.element.addEventListener('change', event => {

      if (document.querySelector(`#fighter-${_id}`).checked) {
        handleClick(event, fighter);
        this.element.style = ' background-color: #ba7cdf;box-shadow: 4px 11px 0px 0px rgba(0,0,0,0.75);border: #fefefe 5px solid;'
      } else {
        handleSelect(event, fighter);
        this.element.style = '';
      }
    }, false);
  }

  createName(name) {
    const nameElement = this.createElement({ tagName: 'span', className: 'name' });
    nameElement.innerText = name;

    return nameElement;
  }

  createImage(source) {
    const attributes = { src: source };
    const imgElement = this.createElement({
      tagName: 'img',
      className: 'fighter-image',
      attributes
    });

    return imgElement;
  }
}

export default FighterView;