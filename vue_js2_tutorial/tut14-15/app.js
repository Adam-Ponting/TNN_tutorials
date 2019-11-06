// creating a component:

Vue.component('greeting', { // 'component name', object
    template: '<p>Hello there, I\'m {{ name }}. <button @click="changeName">change name</button></p>',
    data() { // data is a function in components so each time it's references it's unicue to that instance
        return {
            name: 'Yoshi'
        }  
    },
    methods: { // method will only change data in the component where its clicked
        changeName(){
            this.name = 'Mario'
        }
    }
})

// create two instances of vue to control different area of the webpage
// the variable names (one/two) can allow each instance to reference the other
var one = new Vue ({
    el: '#vue-app-one',
    data: {
        title: 'Vue app one'
    },
    computed: {
        greet() {
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
        greet() {
            return 'Yo dudes, app two here'
        }
    }
})

// interact with vue instance from outside
two.title = 'Changed from outside'