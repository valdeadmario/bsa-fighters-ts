declare type Element = {
    tagName: string;
    className?: string;
    attributes?: {
        [key: string]: string;
    };
};
declare class View {
    element: HTMLElement;
    constructor();
    createElement({ tagName, className, attributes }: Element): HTMLElement;
}
export default View;
