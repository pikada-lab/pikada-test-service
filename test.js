
const { expect } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
const { server } = require("./index");
const { NAME, LAST_NAME, SECOND_NAME } = require('./Naming');
chai.use(chaiHttp);

let agent = chai.request.agent(server);
describe("pikada-test-service", () => {

    after(function (done) {
        agent.close();
        done();
    });

    describe('Health', () => {
        describe('[GET] /v1/health', () => {
            it('it should GET 0', (done) => {
                agent
                    .get('/v1/health')
                    .end((err, res) => {
                        expect(err, "We have error").to.be.null;
                        expect(res, "We have not status 200").to.have.status(200);
                        expect(res, "The response mast be not a php session").to.not.have.cookie('PHPSESSID');
                        expect(res.text, "The response mast be equal 0").to.be.equal("0");
                        done();
                    });
            });
        });
    });

    describe('Name', () => {


        describe('[GET] /v1/name', () => {
            it('it should GET name', (done) => {
                agent
                    .get('/v1/name')
                    .end((err, res) => {
                        expect(err, "We have error").to.be.null;
                        expect(res, "We have not status 200").to.have.status(200);
                        expect(res, "The response mast be not a php session").to.not.have.cookie('PHPSESSID');
                        expect(~NAME.findIndex(r => r === res.text), "It is not name").to.be.not.equal(0);
                        done();
                    });
            });
        });
        describe('[GET] /v1/name?fullName', () => {
            it('it should GET name and first name', (done) => {
                agent
                    .get('/v1/name?fullName')
                    .end((err, res) => {
                        expect(err, "We have error").to.be.null;
                        expect(res, "We have not status 200").to.have.status(200);
                        expect(res, "The response mast be not a php session").to.not.have.cookie('PHPSESSID');
                        expect(res.text).to.be.match(/(\D+)\s(\D+)/i, "We have two words");
                        done();
                    });
            });
        });

        describe('[GET] /v1/name?lastName', () => {
            it('it should GET name and last name', (done) => {
                agent
                    .get('/v1/name?lastName')
                    .end((err, res) => {
                        expect(err, "We have error").to.be.null;
                        expect(res, "We have not status 200").to.have.status(200);
                        expect(res, "The response mast be not a php session").to.not.have.cookie('PHPSESSID');
                        expect(res.text).to.be.match(/(\D+)/i, "We have two words");
                        expect(~LAST_NAME.findIndex(r => r === res.text), "It is not last name").to.be.not.equal(0);
                        done();
                    });
            });
        });

        describe('[GET] /v1/name?secondName', () => {
            it('it should GET name and second name', (done) => {
                agent
                    .get('/v1/name?secondName')
                    .end((err, res) => {
                        expect(err, "We have error").to.be.null;
                        expect(res, "We have not status 200").to.have.status(200);
                        expect(res, "The response mast be not a php session").to.not.have.cookie('PHPSESSID');
                        expect(res.text).to.be.match(/(\D+)/i, "We have two words");
                        expect(~SECOND_NAME.findIndex(r => r === res.text), "It is not second name").to.be.not.equal(0);
                        done();
                    });
            });
        });

    });

    describe('Names', () => {
        describe('[GET] /v1/names', () => {
            it('it should GET ten names', (done) => {
                agent.get('/v1/names')
                    .end((err, res) => {
                        expect(err, "We have error").to.be.null;
                        expect(res, "We have not status 200").to.have.status(200);
                        expect(res, "The response mast be not a php session").to.not.have.cookie('PHPSESSID');
                        expect(res.text).to.be.match(/(\[(\D+)(\s*,\D+)?\])/i, 'We have JSON array');
                        expect(JSON.parse(res.text).length).to.be.equal(10, 'We have 10 items');
                        done();
                    });
            });
        });
    });
});