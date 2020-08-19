// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ltv-data-api.herokuapp.com/api/v1/records.json?email=doesmith@example.com', true)

request.onload = function () {
  // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
    data.forEach((user) => {
        console.log(user.email)
    })
    } else {
    console.log('error')
    }
}

// Send request
request.send()