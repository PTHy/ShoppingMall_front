import {observable, action} from "mobx";
import axios from 'axios'

class ProductStore {
    static __instance = null;
    static getInstance() {
        if (ProductStore.__instance == null)
            ProductStore.__instance = new ProductStore();
        return ProductStore.__instance;
    }

    constructor() {
        ProductStore.__instance = this;
    }

    @observable products = null;

    @action fetchProducts = async () => {
        try {
            let response = await axios({
                url: `http://localhost:8080/api/products`,
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });

            console.log(response);

            this.products = response.status === 200 ? response.data : null;
            return true;
        } catch (error) {
            console.log(error.message);

            return false;
        }
    };
}

export default ProductStore.getInstance();