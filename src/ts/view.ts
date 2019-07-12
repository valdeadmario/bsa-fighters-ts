type Element = {
    tagName: string;
    className?: string;
    attributes?: Object;
}

class View {
    createElement({ tagName, className = '', attributes = {} }: Element): HTMLElement {
      const element: HTMLElement = document.createElement(tagName);
      element.classList = className;
      Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
  
      return element;
    }
  }
  
  export default View;
  