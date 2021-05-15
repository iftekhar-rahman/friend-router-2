import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

const FriendsDetail = (props) => {
    // console.log(props.friend);
    const {name, username, email, id} = props.friend;

    const history = useHistory();

    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }    
    
    // const handleClick = (id) => {
    //     const {friendId} = useParams()
    // }
    
    return (
        <div className="col-lg-4">
            <div className="single-friend">
                <h3>Name: {name}</h3>
                <h4>User Name: {username}</h4>
                <p>Email Address: {email}</p>
                {/* <Link className="btn btn-danger" to={`/friend/${id}`}>Show Detail {id}</Link> */}
                <button  className="btn btn-danger" onClick={()=> handleClick(id)}>Show detail</button>
            </div>
        </div>
    );
};

export default FriendsDetail;