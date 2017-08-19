import sequelize from '../db/db';
import Sequelize from 'sequelize';

const Token = sequelize.define('tokens', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  token: {
    type: Sequelize.STRING,
    unique: true
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  category: {
    type:  Sequelize.STRING,
    allowNull: false
  },
  expiry: {
    type: Sequelize.INTEGER,
    defaulValue: 10
  },
  created_at: {
    defaulValue: Sequelize.NOW
  }

});