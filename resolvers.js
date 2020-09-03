const user = {
    _id:        "1",
    first_name: "Marcin",
    last_Name:  "Stanczyk",
    email:      "marcin@marcin.pl",
    picture:    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8419b4xWfKMxXaHRrhqjC5t54LAG-MdmrvA&usqp=CAU"
}

const movies = [
    {
        _id:        "1",
        title: "The Green Mile",
        year: "1999",
        genre: ["Drama"],
        director: ["Frank Darabont"],
        actors: [
            "Tom Hanks",
            "David Morse",
            "Bonnie Hunt",
            "Michael Clarke Duncan"
        ],
        plot: "To jest jakas akcja filmu",
    },
    {
        _id:        "2",
        title: "The Shawshank Redemption",
        year: "1994",
        genre: ["Drama"],
        director: ["Frank Darabont"],
        actors: [
            "Tim Robbins",
            "Morgan Freeman",
            "Bob Gunton",
            "William Sadler"
        ],
        plot: "To jest jakas akcja filmu",
    },
    {
        _id:        "3",
        title: "Forrest Gump",
        year: "1994",
        genre: ["Drama"],
        director: ["Robert Zemeckis"],
        actors: [
            "Tom Hanks",
            "Robin Wright",
            "Gary Sinise",
            "Mykelti Williamson"
        ],
        plot: "To jest jakas akcja filmu",
    },
    {
        _id:        "4",
        title: "Léon",
        year: "1994",
        genre: ["Drama", "Crime"],
        director: ["Luc Besson"],
        actors: [
            "Jean Reno",
            "Gary Oldman",
            "Natalie Portman",
            "Danny Aiello"
        ],
        plot: "To jest jakas akcja filmu",
    },
    {
        _id:        "5",
        title: "The Matrix",
        year: "1999",
        genre: ["Action"],
        director: ["Lilly Wachowski", "Lana Wachowski"],
        actors: [
            "Keanu Reeves",
            "Laurence Fishburne",
            "Carrie-Anne Moss",
            "Hugo Weaving"
        ],
        plot: "To jest jakas akcja filmu",
    },
]

module.exports = {
    Query: {
        me: () => user,
        movies: () => movies
    }
}
