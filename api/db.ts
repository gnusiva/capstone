import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../database.sqlite'
});

const User = sequelize.define('User', {
    // Model attributes are defined here
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    address: {
        type: DataTypes.STRING
    },
    
  }, {
    // Other model options go here
  });