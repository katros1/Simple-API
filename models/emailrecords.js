// 'use strict';
// const {
//   Model
// } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Records = sequelize.define('EmailRecords', {
    name: DataTypes.STRING,
    Message: DataTypes.STRING
  }, {});
  Records.associate = function(models) {
    // associations can be defined here
    Records.belongsTo(models.User, {
      foreignKey: 'name',
      as: 'senderName',
      onDelete: 'CASCADE',
    });

    // User.hasMany(models.Comment, {
    //   foreignKey: 'userId',
    //   as: 'comments',
    //   onDelete: 'CASCADE',
    // });
  };
  return Records;
};