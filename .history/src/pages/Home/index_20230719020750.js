import { useState, useEffect } from 'react';
import Content from '~/layouts/components/Content';
import * as userService from '~/services/userService';

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Home() {
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUsers((prevUsers) => [...prevUsers, ...data]);
            })
            .catch((error) => console.log(error));
    }, [page]);

    return (
        <div>
            <Content data={suggestedUsers} />
            <Content data={suggestedUsers} />
        </div>
    );
}

export default Home;
