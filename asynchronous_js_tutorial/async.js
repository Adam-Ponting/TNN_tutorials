// https://www.w3schools.com/js/js_ajax_http.asp
// https://www.restapitutorial.com/httpstatuscodes.html
window.onload = function() {

    var http = new XMLHttpRequest() // make a new xml request object

    // onreadystatechange - Defines a function to be called when the readyState property changes
    // readyState - Holds the status of the XMLHttpRequest.
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready
    http.onreadystatechange = function() {
        if(http.readyState === 4 && http.status === 200) { // waits for response to be ready and checks it was successful
            // console.log(JSON.parse(http.response)) // returns a string, JSON.parse() converts it to an object
        }
    }

    // prepare 
    http.open('GET', './data/tweets.json', true) // request type, url, true if async, false if sync

    // get data
    http.send()

    /*****************************************/

    // jquery method
    $.get('data/tweets.json', function(data){  // data to get, callback function to fire after data is retrieved
        console.log(data)
    })
}

console.log('js loaded')