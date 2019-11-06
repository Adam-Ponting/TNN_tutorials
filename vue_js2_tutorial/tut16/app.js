
// create two instances of vue to control different area of the webpage
// the variable names (one/two) can allow each instance to reference the other
var one = new Vue ({
    el: '#vue-app',
    data: {
        output: 'your fave is'
   },
    methods: {
        readRefs() {
            // access ref with .$refs.name
            console.log(this.$refs.test.textContent)
            console.log(this.$refs.inputRef.value)
            this.output = this.$refs.inputRef.value
        }
    }
})
