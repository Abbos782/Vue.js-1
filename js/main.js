const app = Vue.createApp({
    data(){
        return{
            courseGoal:[1,2,3],
            vueLink:'https://vuejs.org/v2/guide/installation.html'
        };
    }
});
app.mount('#user-goal');
