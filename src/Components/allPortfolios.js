import bikeHouse from '../images/portImages/bike-house.png';
import dreamyTravel from '../images/portImages/dreamy-travel.jpg';
import bodyFit from '../images/portImages/body-fit.png';
import burjAlArab from '../images/portImages/burj-al-arab.jpg';
import mealDb from '../images/portImages/meal-db.jpg';
import covidUpdate from '../images/portImages/covid-update.jpg';


const portfolios = [
    {
        id: 1,
        category: 'React Js',
        image: bikeHouse,
        title: 'Bike House Website',
        details: 'React, Node, Mongodb, Express, Heroku, Bootstrap, Firebase, Font Awesome',
        link: 'https://bike-house-client.web.app/',
        link2: 'https://github.com/arunabhnewar/bike-house-client',
        link3: 'https://github.com/arunabhnewar/bike-house-server.git',
    },
    {
        id: 2,
        category: 'React Js',
        image: dreamyTravel,
        title: 'Dreamy Travel Website',
        details: 'React, Node, Mongodb, Express, Heroku, Bootstrap, Firebase, Font Awesome',
        link: 'https://dreamy-travel-client.web.app/',
        link2: 'https://github.com/arunabhnewar/dreamy-travel-client',
        link3: 'https://github.com/arunabhnewar/dreamy-travel-server',
    },
    {
        id: 3,
        category: 'React Js',
        image: bodyFit,
        title: 'Body Fit Website',
        details: 'React, Bootstrap, Firebase, Font Awesome',
        link: 'https://body-fit-fitness.web.app/',
        link2: 'https://github.com/arunabhnewar/body-fit-fitness'
    },
    {
        id: 4,
        category: 'React Js',
        image: burjAlArab,
        title: 'Burj Al Arab Website',
        details: 'React, Bootstrap, Firebase, Font Awesome',
        link: 'https://burj-al-arab-e8198.web.app/',
        link2: 'https://github.com/arunabhnewar/burj-al-arab.git'
    },
    {
        id: 5,
        category: 'Rest API',
        image: mealDb,
        title: 'React Restaurant',
        details: 'Rest API, React, Bootstrap, Font Awesome, Netlify',
        link: 'https://react-router-mealdb.netlify.app/',
        link2: 'https://github.com/arunabhnewar/react-router-mealdb.git'
    },
    {
        id: 6,
        category: 'Rest API',
        image: covidUpdate,
        title: 'Covid Update API',
        details: 'Rest API, Vanilla JavaScript, Html5, Vanilla CSS, Bootstrap',
        link: 'https://arunabhnewar.github.io/covid-update-api/',
        link2: 'https://github.com/arunabhnewar/covid-update-api.git'
    }
]

export default portfolios;