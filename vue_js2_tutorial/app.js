new Vue({
    el: '#vue-app', // element to control
    data: { // data holds key: value pairs
        name: 'Adam',
        eh: 'dads',
        job: 'unemployed'
    },
    methods: {
        greet(time) { // return object to be shown in the DOM
            // receives params
            return `Good ${time}, ${this.name} `
        }
    }
})