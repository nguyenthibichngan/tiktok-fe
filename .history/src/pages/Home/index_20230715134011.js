import { useState, useEffect } from 'react';
import Content from '~/layouts/components/Content';
import * as userService from '~/services/userService';

function Home() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect((data) => {
        data.map(())
    }, []);

    return <Content data={suggestedUsers} />;
}

export default Home;
