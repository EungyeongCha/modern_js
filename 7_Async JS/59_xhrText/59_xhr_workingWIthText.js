document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open('GET', 'plaintxt.txt', true);
  console.log('Readystate', xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function () {
    console.log('Readystate', xhr.readyState);
  };

  xhr.onload = function () {
    console.log('Readystate', xhr.readyState);
    if (this.status === 200) {
      document.getElementById(
        'output'
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  //   xhr.onreadystatechange = function () {
  //     console.log('Readystate', xhr.readyState);
  //     if (this.status === 200 && this.readyState === 4) {
  //       console.log(this.responseText);
  //     }
  //   };

  xhr.onerror = function () {
    console.log('Request error...');
  };
  xhr.send();

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: requst recieved
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP Status
  // 200: "OK"
  // 400: "Forbidden"
  // 404: "Not Found"
}
