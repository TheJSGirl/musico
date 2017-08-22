import sequelize from '../db/db';
import Sequelize from 'sequelize';

const User = sequelize.define('users', {
 id:{
   type: Sequelize.INTEGER,
   autoIncrement: true,
   primaryKey: true
  },

 username: {
   type: Sequelize.STRING,
   unique: true,
   allowNull: false
  },

 email: {
   type: Sequelize.STRING,
   unique: true,
   allowNull: false
 },

 password: {
   type: Sequelize.STRING,
   allowNull: false

 },

 pic: {
   type: Sequelize.STRING,
   defaultValue: profile.jpg
  },

 active: {
   type: Sequelize.STRING,
   defaultValue: true

 },

 verified: {
   type: Sequelize.STRING,
   defaultValue: false
 },

 created_at: {
   defaultValue: Sequelize.NOW
 }

});

export default User;