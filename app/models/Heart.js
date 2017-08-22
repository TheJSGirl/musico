import sequelize from '../db/db';
import Sequelize from 'sequelize';

const Heart = sequelize.define('hearts', {
  post_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  created_at: {
    defaultValue: Sequelize.NOW
  }
});

//foreign primary references