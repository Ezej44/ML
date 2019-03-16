const axios = require('axios');

class HttpService {
	servidor = '/';
	constructor() {
		this.data = "Hello data from HttpService";
	}

	
	getProduct(id){
		return axios.get(this.servidor + 'item/' + id)
	}
	getProducts(q){
		return axios.get(this.servidor + 'items?q=' +q)
	}
}
export default HttpService;
