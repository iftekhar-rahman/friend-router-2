import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>
            Home
        </div>
    );
};

export default Home;