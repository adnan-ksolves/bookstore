const x=[
    {
      author: "Chinua Achebe",
      country: "Nigeria",
      language: "English",
      link: "https://upload.wikimedia.org/wikipedia/en/6/65/ThingsFallApart.jpg",
      pages: 209,
      title: "Things Fall Apart",
      genre: "Historical",
      year: 1958
    },
    {
      author: "Hans Christian Andersen",
      country: "Denmark",
      language: "Danish",
      link: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Hans_Christian_Andersen_%281834_painting%29.jpg",
      pages: 784,
      title: "Fairy tales",
      genre: "Fiction",
      year: 1836
    },
    {
      author: "Dante Alighieri",
      country: "Italy",
      language: "Italian",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Dante_Domenico_di_Michelino_Duomo_Florence.jpg/450px-Dante_Domenico_di_Michelino_Duomo_Florence.jpg",
      pages: 928,
      title: "The Divine Comedy",
      genre: "Comedy",
      year: 1315
    },
    {
      author: "Unknown",
      country: "Sumer and Akkadian Empire",
      language: "Akkadian",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/British_Museum_Flood_Tablet.jpg/330px-British_Museum_Flood_Tablet.jpg",
      pages: 160,
      title: "The Epic Of Gilgamesh",
      genre: "Historical",
      year: -1700
    },
    {
      author: "Unknown",
      country: "India/Iran/Iraq/Egypt/Tajikistan",
      language: "Arabic",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Cassim.jpg/330px-Cassim.jpg",
      pages: 288,
      title: "One Thousand and One Nights",
      genre: "Adventure",
      year: 1200
    },
    {
      author: "Unknown",
      country: "Iceland",
      language: "Old Norse",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Njal_saga_-_Skarphedinn.jpg/330px-Njal_saga_-_Skarphedinn.jpg",
      pages: 384,
      title: "Njál's Saga",
      genre: "Historical",
      year: 1350
    },
    {
      author: "Jane Austen",
      country: "United Kingdom",
      language: "English",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/330px-PrideAndPrejudiceTitlePage.jpg",
      pages: 226,
      title: "Pride and Prejudice",
      genre: "Romance",
      year: 1813
    },
    {
      author: "Honoré de Balzac",
      country: "France",
      language: "French",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Le_P%C3%A8re_Goriot%2C_1er_Volume%2C_1835.png/330px-Le_P%C3%A8re_Goriot%2C_1er_Volume%2C_1835.png",
      pages: 443,
      title: "Le Père Goriot",
      genre: "Poetry",
      year: 1835
    },
    {
      author: "Samuel Beckett",
      country: "Republic of Ireland",
      language: "French, English",
      link: "https://upload.wikimedia.org/wikipedia/en/9/90/Beckett_Molloy.jpg",
      pages: 256,
      title: "Molloy, Malone Dies, The Unnamable, the trilogy",
      genre: "Fiction",
      year: 1952
    },
    {
      author: "Giovanni Boccaccio",
      country: "Italy",
      language: "Italian",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Boccaccio_-_Decameron%2C_MCCCCLXXXXII_ad_di_XX_de_giugno_-_3852856_Scan00015.tif/lossy-page1-330px-Boccaccio_-_Decameron%2C_MCCCCLXXXXII_ad_di_XX_de_giugno_-_3852856_Scan00015.tif.jpg",
      pages: 1024,
      title: "The Decameron",
      genre: "Romance",
      year: 1351
    },
    {
      author: "Jorge Luis Borges",
      country: "Argentina",
      language: "Spanish",
      link: "https://upload.wikimedia.org/wikipedia/en/d/d6/Ficciones.jpg",
      pages: 224,
      title: "Ficciones",
      genre: "Fiction",
      year: 1965
    },
    {
      author: "Emily Brontë",
      country: "United Kingdom",
      language: "English",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Houghton_Lowell_1238.5_%28A%29_-_Wuthering_Heights%2C_1847.jpg/300px-Houghton_Lowell_1238.5_%28A%29_-_Wuthering_Heights%2C_1847.jpg",
      pages: 342,
      title: "Wuthering Heights",
      genre: "Romance",
      year: 1847
    },
    {
      author: "Albert Camus",
      country: "Algeria, French Empire",
      language: "French",
      link: "https://images-na.ssl-images-amazon.com/images/I/81GjCVSEDAL.jpg",
      pages: 185,
      title: "The Stranger",
      genre: "Adventure",
      year: 1942
    },
    {
      author: "Paul Celan",
      country: "Romania, France",
      language: "German",
      link: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1510933483l/1258536.jpg",
      pages: 320,
      title: "Poems",
      genre: "Poetry",
      year: 1952
    },
    {
      author: "Louis-Ferdinand Céline",
      country: "France",
      language: "French",
      link: "https://upload.wikimedia.org/wikipedia/en/f/ff/Journey_to_the_End_of_the_Night_cover.jpg",
      pages: 505,
      title: "Journey to the End of the Night",
      genre: "Adventure",
      year: 1932
    },
    {
      author: "Miguel de Cervantes",
      country: "Spain",
      language: "Spanish",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Title_page_first_edition_Don_Quijote.jpg/375px-Title_page_first_edition_Don_Quijote.jpg",
      pages: 1056,
      title: "Don Quijote De La Mancha",
      genre: "Fiction",
      year: 1610
    },
    {
      author: "Geoffrey Chaucer",
      country: "England",
      language: "English",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Canterbury_Tales.png/330px-Canterbury_Tales.png",
      pages: 544,
      title: "Poetry",
      year: 1450
    }
  ];
    export default x;