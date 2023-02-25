import Poster from '../images/poster-one.png'
import WedPhoto from '../images/wedding-photography.png'
import Bike from '../images/mountain-bike.png'
import Magic from "../images/Magic.png"

export default [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: [Poster],
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: [WedPhoto],
        stats: {
            rating: 4.9,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 23,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: [Bike],
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
    },
    {
        id: 4,
        title: "Secrets Of Magic",
        description: "Prepare to be inspired, energised and spellbound as we go on an epic journey through my magical world!",
        price: 85,
        coverImg: [Magic],
        stats: {
            rating: 4.0,
            reviewCount: 34
        },
        location: "Italy",
        openSpots: 0,
    }
]