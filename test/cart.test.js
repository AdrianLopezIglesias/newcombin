let server   = require('../index')
let chai     = require('chai')
let chaiHttp = require('chai-http');


let expect = chai.expect;

chai.use(chaiHttp);

describe("CARTS", () => {
	it("Should get product index", (done) => {
		chai.request(server)
			.get('/cart/all')
			.end((err, res) => {
				expect(res).to.have.status(200);
				done();
			});
	});
	it("Should have small coffee", (done) => {
		chai.request(server)
			.get('/cart/all')
			.end((err, res) => {
				expect(res).to.have.status(200);
				const item_1 = res.body[0]
				expect(item_1).to.have.property('product_id').to.be.equal(1);
				done();
			});
	});
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

	it("Should close the last item added to the cart", (done) => {
		chai.request(server)
			.get('/cart/all')
			.end((err, res) => {
				expect(res).to.have.status(200);
				const item = res.body[res.body.length - 1]

				chai.request(server)
					.post('/cart/close')
					.send({
						cart_id: item.id
					})
					.end((err, res) => {
						expect(res).to.have.status(200);
						expect(res.body).to.have.property('closed').to.be.equal(1);
						done();
					});
			});
	});

	
	it("Should retrieve not closed products", (done) => {
		chai.request(server)
			.get('/cart/remaining')
			.end((err, res) => {
				expect(res).to.have.status(200);
				for (let i = 0; i < res.body.length; i++){
					let item = res.body[i]
					expect(item).to.have.property('closed').to.be.equal(0);
				}
				done();
			});
		});
		

});