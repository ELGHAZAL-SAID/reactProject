import ProfileCard from "./ProfileCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import img from "./assets/2.jpeg";

export const UserData = [
  {
    name: "aimad hasnaoui",
    username: "aimad_has123",
    email: "aimad.has@example.com",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photo: "https://avatars.githubusercontent.com/u/96472794?v=4",
    age: 25,
    address: "123 Main St, Cityville, Country",
    mobility: "Yes",
    disponibility: "Full-time",
    hobbies: ["Reading", "Traveling", "Coding"],
  },
  {
    name: "Bougamza_yasser",
    username: "yasser_bougamza",
    email: "bgmz.yasser@gmail.com",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    photo: "https://avatars.githubusercontent.com/u/52634619?v=4",
    age: 30,
    address: "456 Oak St, Townsville, Country",
    mobility: "Yes",
    disponibility: "Full-time",
    hobbies: ["Football", " Travling", "Swimming"],
  },
  {
    name: "khadija HAMDIOUI",
    username: "KHADIJA",
    email: "adijahamdioui20@gmail.com",
    about: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo:
      "https://lh3.googleusercontent.com/a/ACg8ocLn9ZDk0x4RW4SEKAwAPvDQl58YtI-9Kl8fGndFpTZcpQ=s432-c-no",
    age: 25,
    address: "105 Oak St,rabat, merocco",
    mobility: "yes",
    disponibility: "Part-time",
    hobbies: ["coding", "Guitar", "Cooking", "filming"],
  },
  {
    name: "Youssef Kherdioui",
    username: "youssef_kherdioui",
    email: "youssef@example.com",
    about: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo: "https://avatars.githubusercontent.com/u/135620743?v=4",
    age: 22,
    address: "456 Oak St, Townsville, Country",
    mobility: "Yes",
    disponibility: "Part-time",
    hobbies: ["Soccer", "Hiking", "Travel"],
  },
  {
    name: "Benaissa Amari",
    username: "Essaamar_05",
    email: "amariissa71@gmail.com",
    about:
      "a .Net and React developper whos passionated with photography and filmaking ",
    photo: "https://avatars.githubusercontent.com/u/115923007?v=4",
    age: 20,
    address: "Rabat agdal",
    mobility: "Yes",
    disponibility: "Full-time",
    hobbies: [
      "Photography",
      "filmaking",
      "graphic Design",
      "Travelling",
      "reading",
    ],
  },
  {
    name: "EL GHAZAL Said",
    username: "elghazal_said",
    email: "elghazalsaid06@gamil.com",
    about: ".Net/React Developer",
    photo:
      "https://avatars.githubusercontent.com/u/72949134?s=400&u=5c379b1c880142a1de720874d96aa06066749403&v=4",
    age: 23,
    address: "sale-Maroc",
    mobility: "Yes",
    disponibility: "Full-time",
    hobbies: ["BollyBoll", "Coding", "Cooking"],
  },
];

const App = () => {
    return (
        <div className="my-auto container w-full  flex-wrap">
            <Splide
                options={{ perPage: 3, pagination: false, rewind: true, gap: "1rem" }}
            >
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
