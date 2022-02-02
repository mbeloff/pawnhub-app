import fetch from 'node-fetch'
const headers = {
  'Access-Control-Allow-Origin': process.env.VITE_HOST,
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST'
};

exports.handler = async function (event) {
  var secret = process.env.RECAP_SECRET
  let response = event.body
  
  var requestOptions = {
    method: 'POST',
    redirect: 'follow',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${response}`,
  };


  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", requestOptions)
  .then(response => response.text())
  .catch(error => console.log('error', error));

  console.log(res)

  return {
    statusCode: 200,
    headers,
    body: res
  }
}

