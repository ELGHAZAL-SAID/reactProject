import React from 'react';
import ProfileCard from './ProfileCard';

const UserData = [
    {
        name: 'John Doe',
        username: 'john_doe123',
        email: 'john.doe@example.com',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        photo: 'https://th.bing.com/th/id/R.05428153738491119045626b512e0fdd?rik=c2qDJdtJ1ICvgw&pid=ImgRaw&r=0',
        age: 25,
        address: '123 Main St, Cityville, Country',
        mobility: 'Yes',
        disponibility: 'Full-time',
        hobbies: ['Reading', 'Traveling', 'Coding'],
    },
    {
        name: 'Jane Smith',
        username: 'jane_smith456',
        email: 'jane.smith@example.com',
        about: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        photo: 'https://th.bing.com/th/id/R.05428153738491119045626b512e0fdd?rik=c2qDJdtJ1ICvgw&pid=ImgRaw&r=0',
        age: 30,
        address: '456 Oak St, Townsville, Country',
        mobility: 'No',
        disponibility: 'Part-time',
        hobbies: ['Painting', 'Hiking', 'Cooking'],
    },

];

const App = () => {
    return (
        <div>
            {UserData.map((userData, index) => (
                <ProfileCard key={index} {...userData} />
            ))}
        </div>
    );
};

export default App;
