let server   = require('../index')
let chai     = require('chai')
let chaiHttp = require('chai-http');
let expect = chai.expect;

chai.use(chaiHttp);

describe("CHECKOUT", () => {

		it("Should add a new item to the cart", (done) => {
			chai.request(server)
				.post('/cart/add')
				.send({
					product_id: 3
				})
				.end((err, res) => {
					expect(res).to.have.status(200);
					expect(res.body).to.have.property('product_id').to.be.equal(3);
					done();
				});
		});
		
	it("Last item added to the cart shouldn't be closed", (done) => {
		chai.request(server)
			.get('/cart/all')
			.end((err, res) => {
				expect(res).to.have.status(200);
				const item = res.body[res.body.length - 1]
				console.log(item);
				expect(item).to.have.property('closed').to.be.equal(0);
				done();
			});
		});
		
	it("Checkout should work fine", (done) => {
		chai.request(server)
			.get('/cart/checkout')
			.end((err, res) => {
				expect(res).to.have.status(200);

				done();
			});
	});
	
	it("Checkout should have closed all items in cart", (done) => {
		chai.request(server)
			.get('/cart/all')
			.end((err, res) => {
				expect(res).to.have.status(200);
				for (let i = 0; i < res.body.length; i++){
					let item = res.body[i]
					expect(item).to.have.property('closed').to.be.equal(1);
				}
				done();
			});
		});

});