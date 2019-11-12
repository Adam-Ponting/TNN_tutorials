window.onload = function(){


    // jquery way with promises
    // $.get('data/tweets.json').then(function(tweets){
    //     console.log(tweets);
    //     return  $.get('data/friends.json')
    // }).then(function(friends){
    //     console.log(friends);
    //     return  $.get('data/videos.json')
    // }).then(function(videos){
    //     console.log(videos)
    // })

    // js way
    function get(url){
        return new Promise(function(resolve, reject){
            var xhttp = new XMLHttpRequest();
            xhttp.open('GET', url, true); // set up get request, url is passed in as param, is asynchronous
            xhttp.onload = function(){
                if (xhttp.status === 200) {
                    resolve(JSON.parse(xhttp.response));
                } else {
                    reject(xhttp.statusText)
                }
            };
            xhttp.onerror = function(){
                reject(xhttp.statusText)
            };
            xhttp.send()
        })

    }
    
    var promise = get('data/tweets.json') // set up caller variable
    promise.then(function(tweets){ // on response do .then
        console.log(tweets)
        return get('./data/friends.json') // call and return next method
    }).then(function(friends){
        console.log(friends)
        return get('./data/videos.json')
    }).then(function(videos){
        console.log(videos)
    }).catch(function(error){
        console.log(error)
    })
}