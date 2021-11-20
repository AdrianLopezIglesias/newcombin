let server   = require('../index')
let chai     = require('chai')
let chaiHttp = require('chai-http');
let expect = chai.expect;

chai.use(chaiHttp);

describe("2 SMALL COFFEE", () => {
	it("Checkout pending orders to get a clean cart", (done) => {
		chai.request(server)
			.get('/cart/checkout')
			.end((err, res) => {
				expect(res).to.have.status(200);
				done();
			});
	});
	
		it("Should add a new Small Coffee to the cart", (done) => {
			chai.request(server)
				.post('/cart/add')
				.send({
					product_id: 1
				})
				.end((err, res) => {
					expect(res).to.have.status(200);
					expect(res.body).to.have.property('product_id').to.be.equal(1);
					done();
				});
		});
	
		it("1 coffee should be raw:3, tax:0,6, discount:0, final: 3.6", (done) => {
			chai.request(server)
				.get('/cart/calculate_total')

				.end((err, res) => {
					console.log("==================")
					console.log(res.body)
					console.log("==================")
					expect(res).to.have.status(200);
					expect(res.body).to.have.property('raw').to.be.equal(4);
					expect(res.body).to.have.property('tax').to.be.equal(0.8);
					expect(res.body).to.have.property('discount').to.be.equal(0);
					expect(res.body).to.have.property('final').to.be.equal(4.8);
					done();
				});
		});
	
		it("Should add a new Small Coffee to the cart", (done) => {
			chai.request(server)
				.post('/cart/add')
				.send({
					product_id: 1
				})

				.end((err, res) => {
					expect(res).to.have.status(200);
					expect(res.body).to.have.property('product_id').to.be.equal(1);
					done();
				});
		});
	
		it("1 coffee should be raw:6, tax:1.2, discount:1.5, final: 5.6", (done) => {
			chai.request(server)
				.get('/cart/calculate_total')

				.end((err, res) => {
					expect(res).to.have.status(200);
					expect(res.body).to.have.property('raw').to.be.equal(8);
					expect(res.body).to.have.property('tax').to.be.equal(1.6);
					expect(res.body).to.have.property('discount').to.be.equal(2.4);
					expect(res.body).to.have.property('final').to.be.equal(7.2);
					done();
				});
		});
		

});