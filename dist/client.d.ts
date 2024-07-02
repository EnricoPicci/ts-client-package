export declare class Client {
    constructor(options: ClientOptions);
    chat(query: string): Promise<string>;
}
export type ClientOptions = {
    url: 'http://localhost:3000';
    verbose: true;
    other_stuff: any;
};
