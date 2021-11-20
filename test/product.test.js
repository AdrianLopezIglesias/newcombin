let server = require('../index')
let chai = require('chai')
let chaiHttp = require('chai-http');
	

let expect    = chai.expect;

chai.use(chaiHttp);

describe("PRODUCTS", () => {
	it("Should get product index", (done) => {
		chai.request(server)
			.get('/products')
			.end((err, res) => {
				expect(res).to.have.status(200);
				done();
			});
	});
	it("Should have small coffee", (done) => {
		chai.request(server)
			.get('/products')
			.end((err, res) => {
				expect(res).to.have.status(200);
				const item_1 = res.body[0]
				expect(item_1).to.have.property('name').to.be.equal('Small Coffee');
				done();
			});
	});
});