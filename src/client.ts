export class Client {
  constructor(options: ClientOptions) {
    console.log('Client constructor');
    console.log(options);
  }

    public async chat(query: string) {
        console.log('Client doStuff');
        return `You said: ${query} - I say: Hello!`;
    }
}


export type ClientOptions = {
    url: 'http://localhost:3000',
    verbose: true,
    other_stuff: any
};
