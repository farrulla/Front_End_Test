var request = new XMLHttpRequest()
var emailAddressSearched = sessionStorage.getItem('email-Address');
var url = 'http://proxy-server.herokuapp.com/https://ltv-data-api.herokuapp.com/api/v1/records.json?email='+ encodeURIComponent(emailAddressSearched);

request.open('GET', url, true)
request.onload = function () {

  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    console.log(data)
    document.getElementById("root").innerHTML = data.last_name;
  } else {
    console.log('error')
  }
}

request.send()