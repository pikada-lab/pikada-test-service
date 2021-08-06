
const { expect } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
const { server } = require("./index");
chai.use(chaiHttp);

let agent = chai.request.agent(server);
describe('Health', () => { 

    after(function (done) { 
        agent.close();
        done();
    });
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
    describe('[GET] /v1/name', () => {
        it('it should GET name', (done) => {
            agent
                .get('/v1/name')
                .end((err, res) => {
                    expect(err, "We have error").to.be.null;
                    expect(res, "We have not status 200").to.have.status(200);
                    expect(res, "The response mast be not a php session").to.not.have.cookie('PHPSESSID'); 
                    expect(res, "We have error").to.be.string;
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
                    expect(res, "We have error").to.be.string;  
                    expect(res).to.be.match(/(\w+)\s(\w+)/i, "We have two words");
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
                    expect(res, "We have error").to.be.string;  
                    expect(res).to.be.match(/(\w+)/i, "We have two words");
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
                    expect(res, "We have error").to.be.string;  
                    expect(res).to.be.match(/(\w+)/i, "We have two words");
                    done();
                });
        });
    });

});