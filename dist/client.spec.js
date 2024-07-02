"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const client_1 = require("./client");
describe(`Client`, () => {
    it(`it should chat`, () => __awaiter(void 0, void 0, void 0, function* () {
        const client = new client_1.Client({
            url: 'http://localhost:3000',
            verbose: true,
            other_stuff: 'stuff'
        });
        const response = yield client.chat('Hello!');
        (0, chai_1.expect)(response).to.equal('You said: Hello! - I say: Hello!');
    }));
});
//# sourceMappingURL=client.spec.js.map