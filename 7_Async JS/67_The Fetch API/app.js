document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get from text file
function getText() {
  fetch('text.txt')
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      document.getElementById('output').innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Get from JSON
function getJson() {
  fetch('post.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let output = '';
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Get from External API
function getExternal() {
  fetch('http://api.github.com/users')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let output = '';
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}
