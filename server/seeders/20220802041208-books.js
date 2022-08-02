'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('books', [
      {
        title: 'Dune',
        author: 'Frank Herbert',
        desc: 'The story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people.',
        publishDate: '1965-08-01',
        edition: '1st',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Basic Concepts in Nuclear and Particle Physics',
        author: 'Y.P. Singh',
        desc: 'The book, "Basic Concepts in Nuclear and Particle Physics", is written in very simple language, so as to make it understandable to a physics student ...',
        publishDate: '2021-03-06',
        edition: '2nd',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'FullStack React: The Complete Guide to ReactJS and Friends',
        author: 'Anthony Accomazzo, Nate Murray, Ari Lerner',
        desc: 'Stop wasting your time learning React with incomplete and confusing tutorials ...',
        publishDate: '2017-03-01',
        edition: '3rd',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Botanicum',
        author: 'Kathy Willis',
        desc: "The 2016 offering from Big Picture Press' Welcome to the Museum series, Botanicum is a stunningly curated guide to plant life.",
        publishDate: '2017-12-28',
        edition: '1st',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Animalium',
        author: 'Jenny Broom',
        desc: 'Welcome to the museum! There are more than 160 animal specimens to be discovered in Animalium, the first in a series of virtual museums ...',
        publishDate: '2017-12-28',
        edition: '2nd',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Fire, Ice, and Physics',
        author: 'Rebecca C. Thompson',
        desc: "Exploring the science in George R. R. Martin's fantastical world, from the physics on an ice wall to the genetics of the Targaryens and Lannisters.",
        publishDate: '2019-10-29',
        edition: '3rd',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Science of Marvel',
        author: 'Sebastian Alvarado',
        desc: 'Science meets fantasy in this behind-the-scenes look at the Marvel Cinematic Universe— now you can experience the magic of the movies, and learn how to replicate it in real-life.',
        publishDate: '2019-04-09',
        edition: '1st',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title:
          'Concepts, Strategies and Models to Enhance Physics Teaching and Learning',
        author: 'Eilish McLoughlin, Paul van Kampen',
        desc: 'This book discusses novel research on and practices in the field of physics teaching and learning.',
        publishDate: '2019-07-24',
        edition: '2nd',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Imagination',
        author: 'Jim Davies',
        desc: "We don't think of imagination the way that we should. The word is often only associated with children, artists and daydreamers, but in reality, imagination is an integral part of almost every action and decision that we make ...",
        publishDate: '2019-11-05',
        edition: '3rd',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Philosophy of Nature',
        author: 'Georg Wilhelm Friedrich Hegel',
        desc: 'n/a',
        publishDate: '1970-01-01',
        edition: '1st',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Shape of Water',
        author: 'Guillermo del Toro, Daniel Kraus',
        desc: "It is 1962, and Elisa Esposito- mute her whole life, orphaned as a child- is struggling with her humdrum existence as a janitor working the graveyard shift at Baltimore's Occam Aerospace Research Center ...",
        publishDate: '2018-03-06',
        edition: 'n/a',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Effective Scientist',
        author: 'Corey J. A. Bradshaw',
        desc: 'What is an effective scientist? One who is successful by quantifiable standards, with many publications, citations, and students supervised? Yes, but there is much more.',
        publishDate: '2018-03-22',
        edition: '2nd',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Children's Literature and Imaginative Geography",
        author: 'Aïda Hudson',
        desc: 'Where do children travel when they read a story? In this collection, scholars and authors explore the imaginative geography of a wide range of places ...',
        publishDate: '2019-01-10',
        edition: '3rd',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Red Planet',
        author: 'Simon Morden',
        desc: 'Uncover the mysteries, wonders, and history of Mars— as close to an eye-witness perspective of the incredible Red Planet as any reader can get.',
        publishDate: '2022-07-05',
        edition: '1st',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Quantum Steampunk',
        author: 'Nicole Yunger Halpern',
        desc: "The Physics of Yesterday's Tomorrow",
        publishDate: '2022-04-12',
        edition: '1st',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Swamp Peddlers',
        author: 'Jason Vuic',
        desc: 'How Lot Sellers, Land Scammers, and Retirees Built Modern Florida and Transformed the American Dream',
        publishDate: '2021-05-11',
        edition: 'n/a',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Way of Kings',
        author: 'Brandon Sanderson',
        desc: 'A young scholar who, in a desperate attempt to save her family, devised a dangerous theft ...',
        publishDate: '2010-08-31',
        edition: '3rd',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Garden Behind the Moon',
        author: 'Howard Pyle',
        desc: 'Howard Pyle\'s "The Garden Behind the Moon: A Real Story of the Moon-Angel" (1895) is an allegorical fairy tale about death, life, love, and imagination ...',
        publishDate: '1895-01-01',
        edition: '3rd',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Final Empire',
        author: 'Brandon Sanderson',
        desc: 'For a thousand years the ash fell and no flowers bloomed. For a thousand years the Skaa slaved in misery and lived in fear while the Lord Ruler reigned with absolute power and ultimate terror, a divinely invincible leader ...',
        publishDate: '2006-07-17',
        edition: '2nd',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        desc: 'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others ...',
        publishDate: '2012-08-14',
        edition: 'Anniversary',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('books', null, {})
  }
}
