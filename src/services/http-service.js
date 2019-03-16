const axios = require('axios');

class HttpService {
	servidor = '/';
	constructor() {
		this.data = "Hello data from HttpService";
	}

	
	getProduct(id){
		console.log(this.servidor + 'items/' + id);
		return axios.get(this.servidor + 'item/' + id)
	}
	getProducts(q){
		console.log(this.servidor + 'items?q=' +q);
		return axios.get(this.servidor + 'items?q=' +q)
	}
}
export default HttpService;
