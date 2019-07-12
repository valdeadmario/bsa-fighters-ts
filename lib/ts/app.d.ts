declare class App {
    constructor();
    static rootElement: HTMLDivElement;
    static loadingElement: HTMLDivElement;
    startApp(): Promise<void>;
}
export default App;
