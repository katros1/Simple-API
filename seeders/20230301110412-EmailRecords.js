module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "EmailRecords",
      [
        {
          name: "Peter Jon",
          Message: "hispotan de nu",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { 
          name: "John Jon",
          Message: "hispotan de nu",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],

      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("EmailRecords", null, {})
};