import Axios from 'axios';

const API = async (method, url, data, responseType) => {
    const response = await Axios({
        method, url, data, responseType,
    });
    if(response.status === 200) return response.data;
    throw response.status;
};

export default API;