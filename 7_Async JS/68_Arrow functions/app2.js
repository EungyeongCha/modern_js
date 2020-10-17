document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get from text file
function getText() {
  fetch('text.txt')
    .then((res) => res.text())
    .then((data) => {
      document.getElementById('output').innerHTML = data;
    })
    .catch((err) => {
      console.log(err);
    });
}

// Get from JSON
function getJson() {
  fetch('post.json')
    .then((res) => res.json())
    .then((data) => {
      let output = '';
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
}

// Get from External API
function getExternal() {
  fetch('http://api.github.com/users')
    .then((res) => res.json())
    .then((data) => {
      let output = '';
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
}
