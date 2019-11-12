// run code once document is ready to me manipulated (images may still be downloading)
// https://learn.jquery.com/about-jquery/how-jquery-works/
$(document).ready( () => {
    console.log('jquery loaded')
})

$('#lead-banner') // select #lead-banner
$('#lead-banner p') // select all p tags in #lead-banner
$('h3').css({border: '3px solid darkblue'}) // add css example to all h3 tags
$('.wrapper').css({border: '3px solid red'}) // add css example to all .classes
$('#clients').css({border: '3px solid green'}) // add css example to #id