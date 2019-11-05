new Vue({
    el: '#vue-app', // element to control
    data: { // data holds key: value pairs
        name: 'Adam',
        job: 'Living legend',
        website: 'http://www.thenetninja.co.uk',
        websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja</a>',
    },
    methods: {
        greet(time) { // return object to be shown in the DOM
            // receives params
            return `Good ${time}, ${this.name} `
        }
    }
})