import chai from 'chai';
import mocha from 'mocha';
import supertest from 'supertest';
import app from '../server';

const request = supertest(app);

export { request, chai, mocha };
