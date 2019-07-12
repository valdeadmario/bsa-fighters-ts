import View from './view';
import FightersView from './fightersView';
import { fighterService } from './services/fightersService';
import Fight from './fight';

class App {
  constructor() {
    this.startApp();
  }

  static rootElement = document.getElementById('root');
  static loadingElement = document.getElementById('loading-overlay');

  async startApp() {
    try {
      App.loadingElement.style.visibility = 'visible';
      
      const fighters = await fighterService.getFighters();
      const fightersView = new FightersView(fighters);
      const fightersElement = fightersView.element;

      const view = new View();

      const button = view.createElement({
        tagName: 'button',
        className: 'start-game'
      });
      button.innerText = 'Start Game'

      App.rootElement.appendChild(fightersElement);
      App.rootElement.appendChild(button);

      button.addEventListener('click', (e) => {
        e.preventDefault();
        if (fightersView.fighterToFight.length === 2) {
          App.rootElement.innerHTML = '';
          new Fight(...fightersView.fighterToFight);
        } else {
          alert('Can choice only 2 fighters!')
        }
      })
    } catch (error) {
      console.warn(error);
      App.rootElement.innerText = 'Failed to load data';
    } finally {
      App.loadingElement.style.visibility = 'hidden';
    }
  }
}

export default App;