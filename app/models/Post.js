import sequelize from '../db/db';
import Sequelize from 'sequelize';

const Post = sequelize.define('posts', {
 id:{
     type: Sequelize.INTEGER,
     autoIncrement: true,
     primaryKey: true
    },

 created_by: {
    type: Sequelize.INTEGER,
    allowNull: false
 },

 created_at: {
     type: 'TIMESTAMP',
     defaultValue: Sequelize.NOW
 }, 

 post_title: {
     type: Sequelize.STRING(55),
     unique: true,
     allowNull: false
 },

 post_body: {
     type: Sequelize.STRING(255),
     allowNull: false

 },

 slug: {
     type: Sequelize.STRING(100),
     unique: true,
     defaultValue: true
    },

 status: {
     type: Sequelize.BOOLEAN,
     defaultValue: true

 }


});

export default Post;

//foreign key