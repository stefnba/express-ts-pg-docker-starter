import { mocha, chai, request } from '../_testing';

const { it, describe } = mocha;
const { expect } = chai;

describe('TESTS', () => {
    describe('HOME', () => {
        it('SHOULD PRINT Hello World', async () => {
            request.get('/').end((_, res) => {
                expect(res.status).to.eql(200);
                expect(res.text).to.have.string('Hello World');
            });
        });
    });

    describe('USERS', () => {
        it('SHOULD LIST users', async () => {
            request
                .get('/users')
                .then((res) => {
                    expect(res.status).to.eql(200);
                    expect(res.body).to.be.an('array');
                })
                .catch((error) => {
                    throw error;
                });
        });
    });
});
