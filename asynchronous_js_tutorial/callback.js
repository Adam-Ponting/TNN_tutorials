window.onload = function() {

    // fire 3 function in order, will not fire second until previous is complete (success)

    // create error handler to be called in each function
    function handleError(jqXHR, textStatus, error){ // error take in 3 values
        console.log(error)
    }

    // call #1, calls next method on success/error
    $.ajax({
        type: "GET",
        url: "./data/tweets.json",
        success: cbTweets,
        error: handleError
    })

    function cbTweets(data){
        console.log('success', data) // output data from caller function
        // call next function
        $.ajax({
            type: "GET",
            url: "./data/friends.json",
            success: cbFriends,
            error: handleError
        })
    }

    function cbFriends(data){ 
        console.log('success', data)
        
        $.ajax({
            type: "GET",
            url: "./data/videos.json",
            success: function(data){ // no need to create new function here as not nested very deeply
                console.log('success', data)
            }, 
            error: handleError // call handleError function if an error
        })
    }

    // callback example #1
    // var fruits = ['banana', 'apple', 'pear']

    // fruits.forEach(function(value){
    //     console.log(value)
    // })  
    
    // callback example #2 - same result as #1
    // var fruits = ['banana', 'apple', 'pear']

    // fruits.forEach(call)
    
    // function call(val){
    //     console.log(val)
    // }


    // async example with jquery
    // example #1
    // function cb(data){
    //     console.log(data)
    // }
    // $.get('./data/tweets.json', cb)

    // example #2 - same result as #1
    // $.get('./data/tweets.json', function(data){
    //     console.log(data)
    // }) 
}