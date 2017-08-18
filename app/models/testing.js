import sequelize from '../db/db';
import Sequelize from 'sequelize';

const Test = sequelize.define('test', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
Test.sync({force: true}).then(() => {
  // Table created
  return Test.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});
