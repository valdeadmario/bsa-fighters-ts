type Element = {
  tagName: string;
  className?: string;
  attributes: { [key: string]: string };
};

class View {
  createElement({
    tagName,
    className = "",
    attributes = {}
  }: Element): HTMLElement {
    const element: HTMLElement = document.createElement(tagName);
    element.classList.add(className);
    Object.keys(attributes).forEach(key =>
      element.setAttribute(key, attributes[key])
    );

    return element;
  }
}

export default View;
