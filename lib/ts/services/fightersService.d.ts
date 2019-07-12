declare class FighterService {
    getFighters(): Promise<any>;
    getFighterDetails(_id: string): Promise<any>;
}
export declare const fighterService: FighterService;
export {};
