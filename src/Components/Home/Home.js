import React, { useEffect, useState } from 'react';
import FriendsContent from '../FriendsContent/FriendsContent';
import './Home.css';

const Home = () => {

    const [friends, setFriends] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])

    return (
        <div className="home-area">
            <div className="container">
                <div className="row">
                    {
                        friends.map(friend => <FriendsContent friend={friend}></FriendsContent>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;