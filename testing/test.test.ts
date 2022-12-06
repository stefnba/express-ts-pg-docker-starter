import chai from 'chai';
import mocha from 'mocha';
import supertest from 'supertest';
import app from '../src/server';

const request = supertest(app);

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
                    console.log(res.body);
                    console.log(res);
                    expect(res.status).to.eql(200);
                    expect(res.body).to.be.an('array');
                })
                .catch((error) => {
                    throw error;
                });
        });
    });
});
