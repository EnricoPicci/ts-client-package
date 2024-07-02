import { expect } from 'chai';
import { Client } from './client';

describe(`Client`, () => {
    it(`it should chat`, async () => {
        const client = new Client({
            url: 'http://localhost:3000',
            verbose: true,
            other_stuff: 'stuff'
        });
        const response = await client.chat('Hello!');
        expect(response).to.equal('You said: Hello! - I say: Hello!');
    });
});
