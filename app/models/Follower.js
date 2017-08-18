import sequelize from '../db/db';
import Sequelize from 'sequelize';

const Follower = sequelize.define('followers', {
    follower_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    
    followee_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    created_at: {
        defautValue: Sequelize.NOW
    }
});

//foreign key references