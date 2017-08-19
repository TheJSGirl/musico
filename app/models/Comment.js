import sequelize from '../db/db';
import Sequelize from 'sequelize';

/**
 * This is the data moel for
 * storing the comments on posts by the users
 */

const Comment = sequelize.define('comments', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  // the id of the user who created the comment
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  // the post on which the comment was made 
  post_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  // the body of the comment
  comment_body: {
    type: Sequelize.STRING(150),
    allowNull: false
  },
  // timestamp for comment creation
  created_at: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.NOW,
    foreignkey: {
      
    }
  }  
});

export default Comment;