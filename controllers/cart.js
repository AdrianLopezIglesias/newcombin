const Sequelize           = require('sequelize');
const product             = require('../models').Product;
const cart                = require('../models').Cart;
const combo_product_model = require('../models').ComboProduct;
const collect             = require('collect.js');

module.exports = {





	add(req, res) {
		console.log(req.query)
		if (req.query.product_id) {
			return cart
				.create({
					product_id: req.query.product_id
				})
				.then(cart => res.status(200).send(cart))
				.catch(error => res.status(400).send(error))
		}
		return cart
			.create({
				product_id: req.body.product_id
			})
			.then(cart => res.status(200).send(cart))
			.catch(error => res.status(400).send(error))
	},






	async close(req, res) {
		let cart_product        = await cart.findByPk(req.body.cart_id)
		    cart_product.closed = 1
		cart_product.save()
		res.status(200).send(cart_product)

	},






	index(_, res) {
		return cart.findAll({ include: product })
			.then(cart => res.status(200).send(cart))
			.catch(error => res.status(400).send(error))
	},






	remaining(_, res) {
		return cart.findAll({ where: { closed: 0 }, include: product })
			.then(cart => res.status(200).send(cart))
			.catch(error => res.status(400).send(error))
	},

	async checkout(_, res) {
		let current_cart = await cart.findAll({
			where  : { closed: 0 },
			include: { all: true, nested: true }
		})

		current_cart.forEach(cart_product => {
			cart_product.closed = 1; 
			cart_product.save(); 
		})
		res.status(200).send(current_cart)

	},





	async calculate_total(_, res) {

		let total_price = 0

		let current_cart = await cart.findAll({
			where  : { closed: 0 },
			include: { all: true, nested: true }
		})


		
		for (let i = 0; i < current_cart.length; i++) {
			// console.log(current_cart)

			if (current_cart[i].discount_used == 0) {
				
				// console.log(current_cart[i])
				current_cart[i].Product.Combos.forEach(async combo => {
					let combo_products = [];
					console.log(i)
					console.log("current_cart" + i + ".discount_used: " + current_cart[i].discount_used)
					if (current_cart[i].discount_used == 0) {
						let matching_product;
						
						combo.ComboProducts.forEach(async combo_product => {
							
							matching_product = collect(current_cart)
							.where('id', '>=', current_cart[i].Product.id)
							.where('discount_used', '=', '0')
							.where('product_id', '=', combo_product.product_id)
							.first();
							
							if (matching_product) {
								combo_products.push({
									cart_product_id       : matching_product.id,
									current_product       : current_cart[i].id,
									product_id            : combo_product.product_id,
									combo_product_id      : combo_product.id,
									combo_product_discount: combo_product.discount,
									combo_id              : combo.id,
								});

								current_cart[i].discount_used = "RESERVED"
							}

						})


						console.log("combo_products.length " + combo_products.length)
						console.log("combo.ComboProducts.length " + combo.ComboProducts.length)

						if (combo_products.length == combo.ComboProducts.length) {
							console.log("completed combo")
							// console.log("setting discount for products")
							combo_products.forEach(cp => {
								console.log("current_cart.id" + cp.cart_product_id + ".discount_used = " + cp.combo_product_discount)
								
								var index = current_cart.map(function(e) { return e.id; }).indexOf(cp.cart_product_id);
								console.log(index);
								current_cart[index].discount_used = cp.combo_product_discount;
							})
						} else {
							// console.log("uncompleted combo")
							// console.log("reseting discount_used")
							// console.log(combo_products);
							combo_products.forEach(cp => {
								console.log("combo_products that didnt fit")
								var index = current_cart.map(function (e) { return e.id; }).indexOf(cp.cart_product_id);
								console.log(index);
								current_cart[index].discount_used = 0;
								console.log(current_cart[index])
								// console.log("============================================")
								// console.log(combo_products[c].cart_product_id - 1);
								// current_cart[combo_products[c].cart_product_id - 1].discount_used = 0
								// console.log(current_cart[combo_products[c].cart_product_id - 1].discount_used)
								// console.log(current_cart)
								// console.log("combo_products[c].cart_product_id: " + combo_products[c].cart_product_id)
								// console.log("cart_product discount reseted:"+ current_cart[combo_products[c].cart_product_id - 1].discount_used)
								
							});
						}
						
					}

				})

			}

		};
		
		let price = {
			raw: 0,
			tax: 0,
			discount: 0,
			final: 0
		}
		// console.log("!!!!!============================================")
		// console.log(current_cart)

		current_cart.forEach(async cart_product => {
			
			// console.log("cart_product.id: "+cart_product.id);
			// console.log("cart_product.Product.value: " + cart_product.Product.value);
			// console.log("cart_product.discount_used: " + cart_product.discount_used);
			
			if (cart_product.discount_used != 0) {
				// console.log("calculating discount")
				price.discount += cart_product.Product.value * cart_product.discount_used/100
			}
			price.tax += cart_product.Product.value * cart_product.Product.tax / 100
			price.raw += cart_product.Product.value
			// console.log(price);
		});

		price.tax = (Math.round(price.tax*100))/100
		price.discount = (Math.round(price.discount * 100)) / 100
		console.log("price.discount" + price.discount)
		
		price.final = (Math.round((price.raw + price.tax - price.discount) * 100)) / 100
		console.log(price);
		res.status(200).send(price)
		// res.status(200).send(current_cart)

	}

};