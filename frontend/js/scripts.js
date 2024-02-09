// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da mondare in pagina
createApp({
    data() {
        return {
            games: [],
            newGame:'',
        };
    },
    methods: {
        changeDone(i){
            this.games[i].done = !this.games[i].done
        },
        addGame(){
            axios.post('http://localhost/Classe114/php-todo-list-json/backend/create-game.php',
            {
                name: this.newGame
            },
            {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            }    
            )
            .then(res=>{
                // console.log(res.data);
 
                    this.games.push({
                        name: this.newGame,
                        done: false
                    });
                    this.newGame="";
                }
            
            );
        }
    },
    mounted(){
        axios.get('http://localhost/Classe114/php-todo-list-json/backend/game.php').then((res)=>{
            console.log(res.data);
            this.games = res.data
        })
    },
  // Monto l'istanza di Vue in pagina
}).mount('#app');