// 'use strict';
// const {
//   Model
// } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.EmailRecords, {
      foreignKey: 'Message',
      as: 'message',
      onDelete: 'CASCADE',
    });

    // User.hasMany(models.Comment, {
    //   foreignKey: 'userId',
    //   as: 'comments',
    //   onDelete: 'CASCADE',
    // });
  };
  return User;
};