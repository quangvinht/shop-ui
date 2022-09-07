import httpRequest from '@/utils/httpRequest';
import { get } from '@/utils/httpRequest';

// export const category = {
//     movie: 'movie',
//     tv: 'tv',
// };

// export const movieType = {
//     upcoming: 'upcoming',
//     popular: 'popular',
//     top_rated: 'top_rated',
// };

// export const tvType = {
//     popular: 'popular',
//     top_rated: 'top_rated',
//     on_the_air: 'on_the_air',
// };

const storeApi = {
    getAllProducts: () => {
        const url = '/products';
        return get(url);
    },
};
export default storeApi;
