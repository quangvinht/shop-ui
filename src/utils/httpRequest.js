import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://fakestoreapi.com/',
});

export const get = async (path) => {
    const response = await httpRequest.get(path);
    return response.data;
};

export default httpRequest;
