new Vue({
  el: '#app',
  data:{
    info:[],
    id:1,
  },
  methods:{
    next(){
      if (this.id < this.info.length) {
        this.id++;
      } else {
        alert("End of list.")
      }
    },

    back(){
      if (this.id > 1 ){
        this.id--;

      }else{
        alert("The beginning of the list.")
      }

    }

  },
  mounted(){
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then(response=>response.json())
    .then((data)=>{
     this.info =data
    });
  }

 
  
})