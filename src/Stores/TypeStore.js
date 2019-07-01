import {observable, action} from "mobx";
import axios from 'axios'

class TypeStore {
    static __instance = null;
    static getInstance() {
        if (TypeStore.__instance == null)
            TypeStore.__instance = new TypeStore();
        return TypeStore.__instance;
    }

    constructor() {
        TypeStore.__instance = this;
    }

    @observable types = null;

    @observable selectedType = null;

    @observable selectedSubType = null;

    @action selectSubType = async (subId) => {;
        try {
            let response = await axios({
                url: `http://localhost:8080/api/products/sub-types/${ subId || this.subTypes[0].id }`,
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });

            console.log(response);

            this.selectedSubType = response.status === 200 ? response.data : null;
            return true;
        } catch (error) {
            console.log(error.message);

            return false;
        }
    };

    @action selectType = async (id) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/api/products/types/${id || 1}`,
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });


            console.log('select Type');
            console.log(response);

            this.selectedType = response.status === 200 ? response.data : null;
            return true;
        } catch (error) {
            console.log(error.message);

            return false;
        }
    };

    @action fetchTypes = async () => {
        try {
            let response = await axios({
                url: `http://localhost:8080/api/products/types`,
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });

            console.log(response);

            this.types = response.status === 200 ? response.data : null;
            return true;
        } catch (error) {
            console.log(error.message);

            return false;
        }
    };

    @observable subTypes = null;

    @action fetchSubTypeByType = async (id) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/api/products/types/${id}/sub-types`,
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });

            console.log(response);

            this.subTypes = response.status === 200 ? response.data : null;
            return true;
        } catch (error) {
            console.log(error.message);

            return false;
        }
    }
}

export default TypeStore.getInstance();