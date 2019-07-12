type Element = {
  tagName: string;
  className?: string;
  attributes?: { [key: string]: string };
};

class View {
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById("root") as HTMLElement;
  }
  createElement({
    tagName,
    className = "",
    attributes = {}
  }: Element): HTMLElement {
    const element: HTMLElement = document.createElement(tagName);
    const clazz = className.split(" ");
    clazz.forEach(item => {
      element.classList.add(item);
    });
    Object.keys(attributes).forEach(key =>
      element.setAttribute(key, attributes[key])
    );

    return element;
  }
}

export default View;
