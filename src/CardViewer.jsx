import ProfileCard from './ProfileCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import img from './assets/2.jpeg'

const UserData = [
    {
        name: 'aimad hasnaoui',
        username: 'aimad_has123',
        email: 'aimad.has@example.com',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        photo: 'https://avatars.githubusercontent.com/u/96472794?v=4',
        age: 25,
        address: '123 Main St, Cityville, Country',
        mobility: 'Yes',
        disponibility: 'Full-time',
        hobbies: ['Reading', 'Traveling', 'Coding'],
    },
    {
        name: 'Bougamza Yasser',
        username: 'Bougamza_yasser',
        email: 'bgmz.yasser@gmail.com',
        about: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        photo: img,
        age: 25,
        address: '456 Oak St, Townsville, Country',
        mobility: 'Yes',
        disponibility: 'Full-time',
        hobbies: ['Football', 'Traveling', 'Swimming'],
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
        <div className='my-auto container w-full  flex-wrap'>
            <Splide options={{perPage:3,pagination:false,rewind: true,gap: '1rem',}}>
            {UserData.map((userData, index) => (
              <SplideSlide key={index}>
                <ProfileCard key={index} {...userData} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      );
};

export default App;
