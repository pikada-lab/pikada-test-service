
const { expect } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
const { server } = require("./index");
chai.use(chaiHttp);

let agent = chai.request.agent(server);
describe('Health', () => { 

    afterEach(function (done) { 
        agent.close();
        done();
    });
    describe('/GET health point', () => {
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