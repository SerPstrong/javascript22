const app = new Vue({
    el: '#app',
    data: {
        name: 'Geek'
    },
    computed: {
        upperCaseName() {
            return this.name.toUpperCase();
        }
    }
});