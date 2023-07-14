import * as httpRequest from '~/utils/httpRequest';

export const getFollowings = async (page) => {
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
