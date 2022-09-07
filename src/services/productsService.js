import httpRequest from '@/utils/httpRequest';
import { get } from '@/utils/httpRequest';

export const getAllProducts = async () => {
    try {
        const res = await get(`/products`);

        return res;
    } catch (error) {
        console.log(error);
    }
};
