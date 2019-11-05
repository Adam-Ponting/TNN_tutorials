new Vue({
    el: '#vue-app', // element to control
    data: { // data holds key: value pairs
     isAvailable: false,
     isNearby: false,
     error: false,
     success: false
    },
    methods: {
     
    },
    computed: {
     computedClasses() {
        //  returns an object
        return {
            available: this.isAvailable,
            nearby: this.isNearby
        }
     }
    }
})