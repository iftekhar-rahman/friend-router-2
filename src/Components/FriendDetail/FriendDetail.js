import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {

    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])

    const {friendId} = useParams();

    return (
        <div className="friend-container p-5 m-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="single-friend">
                            <p>ID: {friendId}</p>
                            <h4>Name: {friend.name}</h4>
                            <h6>Name: {friend.username}</h6>
                            <p>Name: {friend.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetail;