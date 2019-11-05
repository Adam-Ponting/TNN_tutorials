new Vue({
    el: '#vue-app', // element to control
    data: { // data holds key: value pairs
        age: 20,
        a: 0,
        b: 0
    },
    methods: {
        // addToA(){
        //     console.log('addToA')
        //     return this.a + this.age
        // },
        // addToB(){
        //     console.log('addToB')
        //     return this.b
        //     // return this.b + this.age
        // }
    },
    computed: {
        addToA(){
            console.log('addToA')
            return this.a + this.age
        },
        addToB(){
            console.log('addToB')
            return this.b + this.age
        }
    }
})