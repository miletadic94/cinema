const movies = [{
  "id": 0,
  "name": "Chance Pe Dance",
  "picture": "https://m.media-amazon.com/images/M/MV5BMjQyMDMwMzI3Ml5BMl5BanBnXkFtZTgwOTU2NzQxNTM@._V1_SY1000_CR0,0,631,1000_AL_.jpg",
  "actor": "Anatola Breckell",
  "genre": "Comedy|Drama|Romance",
  "distribution year": 1989,
  "synopsis": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}, {
  "id": 1,
  "name": "A Clockwork Orange",
  "picture": 'https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
  "actor": "Estel Galbreath, Anatola Breckell",
  "genre": "Adventure|Drama",
  "distribution year": 1995,
  "synopsis": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}, {
  "id": 2,
  "name": "Forrest Gump",
  "picture": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  "actor": "Matthey McConaghey, Mila Kunis, JustinTimberlake, Matthey McConaghey, Mila Kunis, JustinTimberlake",
  "genre": "Drama|Horor",
  "distribution year": 1973,
  "synopsis": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}, {
  "id": 3,
  "name": "G Men",
  "picture": "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_SX750_AL_.jpg",
  "genre": "Crime|Drama",
  "distribution year": 2005,
  "synopsis": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}, {
  "id": 4,
  "name": "Bread, My Sweet, The (a.k.a. Wedding for Bella, A)",
  "picture": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  "actor": "Tristam Cruces",
  "genre": "Drama|Romance",
  "distribution year": 1998,
  "synopsis": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}, {
  "id": 5,
  "name": "Nuts",
  "picture": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  "actor": "Garik Raphael",
  "genre": "Drama",
  "distribution year": 2003,
  "synopsis": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}, {
  "id": 6,
  "name": "Stoic",
  "picture": "https://m.media-amazon.com/images/M/MV5BNDM1OTc4NDEwN15BMl5BanBnXkFtZTgwNTA0OTA5MTE@._V1_.jpg",
  "actor": "Sonya Devenny",
  "genre": "Drama",
  "distribution year": 1988,
  "synopsis": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}, {
  "id": 7,
  "name": "Vanquished, The (I vinti)",
  "picture": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  "actor": "Sammy Oliphand",
  "genre": "Drama",
  "distribution year": 2001,
  "synopsis": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}, {
  "id": 8,
  "name": "Wonderland",
  "picture": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  "actor": "Mordecai Edler",
  "genre": "Crime|Drama|Mystery|Thriller",
  "distribution year": 2001,
  "synopsis": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}, {
  "id": 9,
  "name": "Million Dollar Mermaid",
  "picture": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  "actor": "Rollie Bashford",
  "genre": "Drama|Musical",
  "distribution year": 1993,
  "synopsis": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}]

export default movies;

export const genres = [
  {
    id: 1,
    name: 'Action'
  },
  {
    id: 2,
    name: 'Comedy'
  },
  {
    id: 3,
    name: 'Horor'
  },
  {
    id: 4,
    name: 'Thriler'
  },{
    id: 5,
    name: 'Sci-Fi'
  },
  {
    id: 6,
    name: 'Drama'
  },
  {
    id: 7,
    name: 'Romance'
  },  {
    id: 8,
    name: 'Biography'
  },
]