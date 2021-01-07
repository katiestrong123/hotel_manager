use checkins;
db.dropDatabase();

db.guests.insertMany([
  {
    name: "Mr Frog",
    email: "frog@gmail.com",
    status: false
  },
  {
    name: "Mrs Frog",
    email: "froggie@gmail.com",
    status: false
  }
]);
