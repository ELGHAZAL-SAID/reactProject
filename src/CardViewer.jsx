import ProfileCard from './ProfileCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

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
