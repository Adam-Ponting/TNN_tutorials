// create two instances of vue to control different area of the webpage
// the variable names (one/two) can allow each instance to reference the other
var one = new Vue ({
    el: '#vue-app-one',
    data: {
        title: 'Vue app one'
    },
    computed: {
        greeting() {
            return 'Hello from app one'
        }
    }
})

var two = new Vue ({
    el: '#vue-app-two',
    data: {
        title: 'Vue app two'
    },
    methods: {
        changeTitle() {
            one.title = 'Title is changed'
        }
    },
    computed:{
        greeting() {
            return 'Yo dudes, app two here'
        }
    }
})

// interact with vue instance from outside
two.title = 'Changed from outside'