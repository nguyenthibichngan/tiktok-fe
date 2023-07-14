import * as httpRequest from '~/utils/httpRequest';

export const getSuggested = async (page) => {
    try {
        const res = await httpRequest.get('users/followings', {
            params: {
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
