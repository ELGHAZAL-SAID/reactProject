import React from 'react';

const ProfileCard = ({ name, username, email, about, photo, age, address, hobbies, mobility, disponibility }) => {
    return (<>
        <div className="profile-card">
            <img src={photo} alt="" />
            <h2>{name}</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>About: {about}</p>
        </div>
        <span>Show More</span>
        <div class="hiddenInfo">
            <p>age: {age}</p>
            <p>Address: {address}</p>
            <p>mobility: {mobility}</p>
            <p>diponibility: {disponibility}</p>
            <ul>
                {hobbies.map((el, i) => (<li key={i}>{el}</li>))}
            </ul>
        </div>
    </>
    );
};

export default ProfileCard;

