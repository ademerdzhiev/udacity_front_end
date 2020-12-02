const { default: fetch } = require("node-fetch");

function handleSubmit(event) {
    event.preventDefault()
    let formURL = document.getElementById('name').value

    console.log(formURL);

    postData(formURL);

    // check what text was put into the form field
    // let formText = document.getElementById('name').value
    // checkForName(formText)
    //
    // console.log("::: Form Submitted :::")
    // fetch('http://localhost:8080/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
}

const postData = async(url = '') => {
  const response = await fetch('http://localhost:8081/article', {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
       'Content-Type': 'text/plain',
    },
    body: url,
  });

  try {
    const newData = await response.json();
    console.log(newData)
    return newData
  } catch (error) {
    console.log('error', error);
  }
}

export { handleSubmit }
