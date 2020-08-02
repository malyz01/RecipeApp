const mongoose = require('mongoose');
const UserModel = require('../../../server/db/models/Users');

const userData = { email: 'sample@gmail.com', password: '1234' };

// TODO fix test
describe('User Model Test', () => {
  beforeAll(async () => {
    await mongoose.connect(
      global.__MONGO_URI__,
      { useNewUrlParser: true, useCreateIndex: true },
      (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      }
    );
  });
  it('should read a doc from collection', async () => {
    const savedUser = await UserModel.create(userData);
    expect(savedUser._id).toBeDefined();
    expect(savedUser.email).toBe(userData.email);
  });
});
q;
