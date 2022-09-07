import httpRequest from '@/utils/httpRequest';
import { get } from '@/utils/httpRequest';

export const getAnProduct = async ({ id }) => {
    try {
        const res = await get(`/products/${id}`);

        return res;
    } catch (error) {
        console.log(error);
    }
};
