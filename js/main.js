const app = Vue.createApp({
    data(){
        return{
            courseGoal:0,
            vueLink:'https://vuejs.org/v2/guide/installation.html'
        };
    },
    methods:{
        setName(){
            this.courseGoal = event.target.value
        }
    }
});
app.mount('#user-goal');

