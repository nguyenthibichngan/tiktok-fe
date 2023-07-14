import * as httpRequest from '~/utils/httpRequest';

export const getSuggested = async (page = 1, perPage = 5) => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
