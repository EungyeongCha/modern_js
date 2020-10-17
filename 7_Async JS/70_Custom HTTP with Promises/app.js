const http = new EasyHTTP();

// Get Users
// http
//   .get('http://jsonplaceholder.typicode.com/users')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com',
};

// // Create Post
// http
//   .post('http://jsonplaceholder.typicode.com/users', data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Update Post
// http
//   .put('http://jsonplaceholder.typicode.com/users/2', data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Delete User
http
  .delete('http://jsonplaceholder.typicode.com/users/2')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
