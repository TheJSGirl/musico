import sequelize from '../db/db';
import Sequelize from 'sequelize';

const Bookmark = sequelize.define('bookmarks', {
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

 Bookmark.hasOne( Post, { foreignKey: 'post_id' });
 
 Bookmark.hasOne( User, { foreignKey: 'user_id' });

 Bookmark.belongsTo()
 //primary key and references......