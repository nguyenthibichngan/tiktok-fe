import * as httpRequest from '~/utils/httpRequest';

export const getSuggested = async (page, perPage) => {
    try {
        const res = await httpRequest.get('users/following', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
