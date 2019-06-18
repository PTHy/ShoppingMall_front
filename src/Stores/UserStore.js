import {observable, action} from "mobx";
import axios from 'axios'

class UserStore {
    static  __instance = null;
    static getInstance() {
        if(UserStore.__instance == null)
            UserStore.__instance = new UserStore();
        return UserStore.__instance;
    }
    constructor() {
        UserStore.__instance = this;
    }

    @observable user = null;

    @action checkOverlap = async (account) => {
        try {
            console.log(account);
            let response = await axios({
                url: `http://localhost:8080/api/users/account/${account}`,
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });

            console.log(response);
            if (response.status === 200){
                return !response.data;
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    @action login = async (user) => {
        try {
            if (this.user)
            return false;

            let response = await axios({
                url: 'http://localhost:8080/api/users/login',
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                data: JSON.stringify(user),
                timeout: 3000
            });

            console.log(response);
            if (response.status === 200){
                console.log(`response.data: ${response.data}`);
                if (!response.data)
                    return false;
                this.user = response.data;
                return true;
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    @action register = async (user) => {
        try {
            delete user['config'];
            delete user['repassword'];

            let response = await axios({
                url: 'http://localhost:8080/api/users/register',
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                data: JSON.stringify(user),
                timeout: 3000
            });

            console.log(response);
            if (response.status === 200) {
                if (!response.data)
                    return false;
                this.user = response.data;
                return true;
            }
        } catch (error) {
            console.log(error.message);
        }
    };
}

export default UserStore.getInstance();
