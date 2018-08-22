import axios from 'axios';
import qs from 'qs'; // 解决axios的post参数格式默认一直为json的问题
import { Message } from 'iview';

class Axios {
    constructor(){}

    get(url, params = {}){
        return axios.get(url, { params })
                    .then(res => res.data)
                    .catch((error) => {
                        Message.error(error);
                        throw error;
                    });
    }

    post(url, params = {}, config = {}) {
        if (config.dataType !== 'json') { // 默认采用x-www-form-urlencodeed format, 除非config中传了dataType=json
            params = qs.stringify(params);
        }

        return axios.post(url, params, config)
                    .then(res => res.data)
                    .catch((error) => {
                        Message.error(error);
                        throw error;
                    });
    }

    all(...promises) {
        return axios.all([...promises]).then(axios.spread(res => {
            return res;
        }));
    }
}

export default new Axios()
