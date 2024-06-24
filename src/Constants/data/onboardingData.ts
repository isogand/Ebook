import {Level1, Level2, Level3, Level4, Level5} from "../../Authentication/SignInButtons/LoginForm/QuestionDisplay";

export const slides = [
    {
        title: "Relaxed",
        subtitle: "Welcome to Ebook",
        description: "Confused about your outfit? Don't worry! Find the best outfit here!",
        color: "#BFEAF5",
        image: require('../../../assets/welcomeImage/W1.png')
    },
    {
        title: "Playful",
        subtitle: "Hear it First, Wear it First",
        description: "Hating the clothes in your wardrobe? Explore hundreds of outfits ideas",
        color: "#BEECC4",
        image: require('../../../assets/welcomeImage/W2.png')
    },
    {
        title: "Eccentric",
        subtitle: "Your Style, Your Way",
        description: "Create your individual & unique style and look amazing everyday",
        color: "#FFE4D9",
        image: require('../../../assets/welcomeImage/W3.png')
    },
];

export const levelData = [
    { title: "What is your gender? ⚧️", description: "Select gender for better content.",Component: Level1 },
    { title: "Choose Your Age 🎯", description: "Select age range for better content.", Component: Level2},
    { title: "Choose the Book Gender You Like ♥️", description: "Select your preferred book genre for better recommendations, or your can skip it.", Component: Level3 },
    { title: "Complete Your Profile 📋", description: "Don't worry, only you can see your personal data. No one else will be able to see it" , Component: Level4},
    { title: "Create an Account 🔐", description: "Enter your username, email& password.if you forget it, then you have to do forgot password" , Component: Level5 },
];

export const DataLevel1 = [
    { id:0 ,title: "I am male" },
    { id:1 ,title: "I am female" },
    { id:2 ,title: "Rather not to say" },
];

export const DataLevel2 = [
    { id:0 ,title: "14 - 17" },
    { id:1 ,title: "25 - 29" },
    { id:2 ,title: "35 - 39" },
    { id:3 ,title: "45 - 49" },
    { id:4 ,title: "18 - 24" },
    { id:5 ,title: "30 - 34" },
    { id:6 ,title: "40 - 44" },
    { id:7 ,title: ">= 50" },
];

type DataItem = {
    id: number;
    title: string;
};
export const DataLevel3: DataItem[] = [
    { id: 1, title: 'Romance' },
    { id: 2, title: 'Fantasy' },
    { id: 3, title: 'Sci-Fi' },
    { id: 4, title: 'Horror' },
    { id: 5, title: 'Mystery' },
    { id: 6, title: 'Thriller' },
    { id: 7, title: 'Psychology' },
    { id: 8, title: 'Inspiration' },
    { id: 9, title: 'Comedy' },
    { id: 10, title: 'Action' },
    { id: 11, title: 'Adventure' },
    { id: 12, title: 'Comics' },
    { id: 13, title: 'Children’s' },
    { id: 14, title: 'Art & Photography' },
    { id: 15, title: 'Food & Drink' },
    { id: 16, title: 'Biography' },
    { id: 17, title: 'Science & Technology' },
    { id: 18, title: 'Guide / How-to' },
    { id: 19, title: 'Travel' },
];

export const DataLevel4: DataItem[] = [
    { id: 1, title: 'Romance' },
    { id: 2, title: 'Fantasy' },
    { id: 3, title: 'Sci-Fi' },
    { id: 4, title: 'Horror' },
    { id: 5, title: 'Mystery' },
];
