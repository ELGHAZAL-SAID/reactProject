import './App.css'
import { useState } from 'react';
const ProfileCard = ({ name, username, email, about, photo, age, address, hobbies, mobility, disponibility }) => {
const [hidden,setshow] = useState(false)

    return (
    <div className={`${hidden ? "h-auto" : "h-[400px]"} bg-white rounded-lg p-5 m-4`}>
        <div>
            <div className='w-full flex justify-center'> 
            <img src={photo} alt="" className="img" />
            </div>
            <h2 className='text-[25px] font-bold text-center my-3'>{name}</h2>
            <p className='text-[15px] font-bold  text-center'>Username: <span className='font-semibold'>{username}</span></p>
            <p className='text-[15px]  text-center'>{email}</p>
            <p className='text-[15px]  text-center text-gray-400'>{about}</p>
        </div>
            <div className='flex justify-center items-center'>
        <button onClick={()=>{hidden == false ? setshow(true) : setshow(false)}} className='bg-violet-600  px-6 py-2 my-3 mx-auto text-white ' >Show More</button>
            </div>
        {
            hidden &&
        <div className="hiddenInfo">
            <p>age: {age}</p>
            <p>Address: {address}</p>
            <p>mobility: {mobility}</p>
            <p>diponibility: {disponibility}</p>
            <ul>
                {hobbies.map((el, i) => (<li key={i}>{el}</li>))}
            </ul>
        </div>
        }
    </div>
    );
};

export default ProfileCard;

