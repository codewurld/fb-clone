import Girl from '../assets/naija_girl.jpg'
import JapaneseGuy from '../assets/japan_guy.jpg'
import cat from '../assets/cat.jpg'
import BlackMale from '../assets/black_male.jpg';
import Concert from '../assets/concert.jpg';
import Hiking from '../assets/hiking.jpg';
import IndianGirl from '../assets/indian_girl.jpg';
import Meditation from '../assets/meditation.jpg';
import Pool from '../assets/pool.jpg';
import WhiteMale from '../assets/white_male.jpg';

export const storyData = [
    {
        id: 1,
        image: Meditation,
        profilePic: BlackMale,
        name: "Kamal Washington",
        message: "Namaste",
        timestamp: new Date('05 October 2011 14:48 UTC').toString()
    },
    {
        id: 2,
        image: cat,
        profilePic: IndianGirl,
        name: "Rasheedat Singh",
        message: "Feline love to infinity and beyond...",
        timestamp: new Date().toString()
    },
    {
        id: 3,
        image: Pool,
        profilePic: Girl,
        name: "Yinka Awolabi",
        message: "My boyfriend is pretty cool. Don't tell him I told you so though. #keepHisEgoInCheck haha",
        timestamp: new Date().toString()
    },
    {
        id: 4,
        image: Hiking,
        profilePic: WhiteMale,
        name: "James Bell",
        message: "Can't wait until the world opens up so I can travel again. #tbt #outdoors",
        timestamp: new Date().toString()
    },
    {
        id: 5,
        image: Concert,
        profilePic: JapaneseGuy,
        name: "Ikenna Nakamura",
        message: "At the GiftedChild concert last night at EarTH, Hackney. I just love discovering new bands. ",
        timestamp: new Date().toString()


    },
]