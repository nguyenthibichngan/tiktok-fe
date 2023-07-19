import { useState, useEffect } from 'react';
import Content from '~/layouts/components/Content';
import * as userService from '~/services/userService';

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Home() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: 5 })
            .then((data) => {
                setSuggestedUsers(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <Content data={suggestedUsers} />
            <Content data={suggestedUsers} />
        </div>
    );
}

export default Home;
