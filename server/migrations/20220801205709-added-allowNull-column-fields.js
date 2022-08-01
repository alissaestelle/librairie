'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('books', 'author', {
      type: Sequelize.STRING,
      allowNull: true
    })

    await queryInterface.changeColumn('books', 'desc', {
      type: Sequelize.STRING,
      allowNull: true
    })

    await queryInterface.changeColumn('books', 'publishDate', {
      type: Sequelize.DATEONLY,
      allowNull: true
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('books', 'author', {
      author: Sequelize.STRING
    })

    await queryInterface.changeColumn('books', 'desc', {
      desc: Sequelize.STRING
    })

    await queryInterface.changeColumn('books', 'publishDate', {
      publishDate: Sequelize.DATEONLY
    })
  }
}
