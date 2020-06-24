const user = {
  _id: "1",
  name: "Garc",
  email: "garc@yahoo.com",
  picture: "https://cloudinary.com/asdf",
};

module.exports = {
  Query: {
    me: () => user,
  },
};
