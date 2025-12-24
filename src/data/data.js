import jurassic from '../img/jurassic.png'
import forest from '../img/forest.png'
import gladiator from '../img/gladiator.png'
import heat from '../img/heat.png'
import matrix from '../img/matrix.png'
import pulpfiction from '../img/pulpfiction.png'
import schindler from '../img/schindler.png'
import seven from '../img/seven.png'
import titanic from '../img/titanic.png'
import lion from '../img/lion.png'
import platoon from '../img/platoon.png'

export const SERIES_DATA = [
    {
        name: 'Fawlty Towers',
        period: 'Seventies',
        figuranten: ['Basil', 'Mrs. Fawlty', 'Manuel', 'Polly', 'The kitchen chef', 'The Major']
    },
    {
        name: 'Twin Peaks',
        period: 'Nineties',
        figuranten: ['FBI agent Dale Cooper', 'Laura Palmer', 'Mädchen Amick', 'Sheryl Lee', 'Sherilyn Fenn', 'Lara Flynn Boyle']
    },
    {
        name: 'Keeping Up Appearances',
        period: 'Nineties',
        figuranten: ['Hyacinth Bouquet', 'Richard', 'The Vicar', 'Onslow', 'Rose', 'Elizabeth', 'Violet', 'Emmet', 'The Dominee', 'Sheridan', 'The Postman', 'Counsellor Mrs. Nugent', 'The Milkman']
    },
    {name: 'Planet of the Apes', period: 'Seventies', figuranten: ['General Urko', 'Zaius', 'Kira', 'Jason', 'Tolar']},
    {
        name: 'The X-Files',
        period: 'Nineties',
        figuranten: ['Fox Mulder', 'Dana scully', 'Walter Skiner', 'Special FBI Agent Miller']
    },
]

export const REGISSEURS_DATA = [
    {
        name: 'Alfred Hitchcock',
        country: 'England',
        movies: ['The Birds', 'Frenzy', 'Marnie', 'Spellbound', 'Rope', 'Sabotage', 'Notorious']
    },
    {
        name: 'James Cameron',
        country: 'Canada',
        movies: ['Titanic', 'Avatar', 'Terminator 2 - Judgment Day', 'The Abyss']
    },
    {
        name: 'Jan De Bont',
        country: 'Nederland',
        movies: ['Twister', 'Speed', 'Basic Instinct', 'Die Hard', 'Turks fruit', 'Keetje Tippel']
    },
    {
        name: 'Quentin Tarantino',
        country: 'USA',
        movies: ['From Dusk till Down', 'Reservoir Dogs', 'Kill Bill: Vol. 1', 'Kill Bill: Vol. 2', 'Hostel']
    },
    {name: 'David Lynch', country: 'USA', movies: ['Dune', 'Twin Peaks', 'Blue velvet', 'Lost Highway']},
    {
        name: 'Wes Craven',
        country: 'USA',
        movies: ['Scream', 'Shocker', 'The Hills have eyes', 'Wishmaster', 'Swamp Thing']
    },
    {
        name: 'John Carpenter',
        country: 'USA',
        movies: ['Halloween', 'The Thing', 'The Fog', 'Dark Star', 'Prince of Darkness', 'Christine']
    }
]

export const FILMS_DATA = [
    {
        title: 'Titanic',
        year: '1997',
        genre: 'Romantiek /Drama',
        image: titanic,
        actors: ['Kate Winslet', 'Leonardo Di Caprio']
    },
    {
        title: 'Gladiator',
        year: '2000',
        genre: 'Historisch / Drama',
        image: gladiator,
        actors: ['Russel Crowe', 'Joaquin Phoenix']
    },
    {
        title: 'Forrest Gump',
        year: '1994',
        genre: 'Drama',
        image: forest,
        actors: ['Tom Hanks', 'Gary Sinise']
    },
    {
        title: 'The Matrix',
        year: '1999',
        genre: 'Sciencefiction / Actie',
        image: matrix,
        actors: ['Keanu Reeves', 'Carrie-Anne Moss']
    },
    {
        title: 'Pulp Fiction',
        year: '1994',
        genre: 'Misdaad',
        image: pulpfiction,
        actors: ['John Travolta', 'Uma Thurman']
    },
    {
        title: 'Se7en',
        year: '1995',
        genre: 'Misdaad / Thriller',
        image: seven,
        actors: ['Morgan Freeman', 'Brad Pitt']
    },
    {
        title: "Schindler' List",
        year: '1993',
        genre: 'Oorlog / Drama',
        image: schindler,
        actors: ['Liam Neeson', 'Ben Kingsley']
    },
    {
        title: "Jurassic park",
        year: '1993',
        genre: 'Sciencefiction / Aventuur',
        image: jurassic,
        actors: ['Sam Neil', 'Jeff Goldblum']
    },
    {
        title: "Heat", year: '1995',
        genre: 'Thriller', image: heat, actors: ['Al Pacino', 'Robert De Niro']
    },
    {
        title: "The Lion king",
        year: '1994',
        genre: 'Animatie / familie',
        image: lion,
        actors: ['Matthew Broderick', 'Rowan Atkinson']
    },
    {
        title: "Platoon",
        year: '1991',
        genre: 'Oorlog / Drama',
        image: platoon,
        actors: ['Charlie Sheen', 'Willem Dafoe']
    }
]