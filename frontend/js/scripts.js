// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da mondare in pagina
createApp({
    data() {
        return {
            games: [],
        };
    },
    methods: {

    },
    mounted(){
        axios.get('http://localhost/Classe114/php-todo-list-json/backend/game.php').then((res)=>{
            console.log(res.data);
            this.games = res.data
        })
    }
  // Monto l'istanza di Vue in pagina
}).mount('#app');