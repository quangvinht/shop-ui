import httpRequest from '@/utils/httpRequest';
import { get } from '@/utils/httpRequest';

export const getCategoriesProducts = async ({ categoies }) => {
    try {
        const res = await get(`/products/category/${categoies}`);

        return res;
    } catch (error) {
        console.log(error);
    }
};
