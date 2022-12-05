import { mocha, chai, request } from '../_testing';

mocha.describe.only('TESTS', () => {
    mocha.it('/', async () => {
        const res = await request.get('/');

        chai.expect(res.status).to.eql(200);
        chai.expect(res.text).to.have.string('Hello World');
    });
    mocha.it('/users', async () => {
        const res = await request.get('/users');

        chai.expect(res.status).to.eql(200);
        chai.expect(res.body).to.be.an('array');
    });
});
