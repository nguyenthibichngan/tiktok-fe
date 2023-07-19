import { useState, useEffect } from 'react';
import Content from '~/layouts/components/Content';
import * as userService from '~/services/userService';

function Home() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: 5 })
            .then((data) => {
                setSuggestedUsers((prevUsers) => [...prevUsers, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);

    return <Content data={suggestedUsers} />;
}

export default Home;
