new Vue({
    el: '#vue-app', // element to control
    data: { // data holds key: value pairs
        age: 38,
        x: 0,
        y:0
    },
    methods: {
        add(increment){
            this.age += increment
        },
        subtract(decrement){
            this.age -= decrement
        },
        greet(time) { // return object to be shown in the DOM
            // receives params
            return `Good ${time}, ${this.name} `
        },
        updateXY(e){ // event gets passed by default from eventlistener
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
})