<template>
    <div class="container d-block d-md-none">
        <div id="accordion">
            <div v-for="(card,index) in cards" :key="index"  class="card">
                <div class="card-header" :id="card.id">
                    <h5 class="mb-0">
                        <button :class='"btn btn-link " + card.collapsed' data-toggle="collapse" :data-target='"#" + card.idTarget' :aria-expanded='card.ariaExpanded' :aria-controls='card.idTarget'>
                                <svgicon
                                    :name='card.Sname'
                                    :id='card.ids'        
                                ></svgicon>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {{card.name}}
                        </button>
                    </h5>
                </div>
                <div :id="card.idTarget" :class="card.classBody" :aria-labelledby="card.id" data-parent="#accordion">
                    <div class="card-body">
                        <p v-html="card.template"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            
        }
    },
    computed:{
        cards(){return this.$store.getters.cards}
    }
}
</script>


<style scoped>
    svg{
        width: 25px;
        height: 25px;       
    }
    button{
        font-family: 'Novecentosan', Arial, sans-serif;  
        color: #bcbcbc;
        text-decoration: none;
        padding-left: 20px;
    }
    
    .btn-link{
        text-decoration: none;
        color: #423e3e;    
    }
    .collapsed{
        text-decoration: none;
        color: #737373;
    }
    button:focus  #Websites,
    button:focus  #Photography,
    button:focus  #Seo,
    button:focus  #Applications{
        color: #423e3e;    
        transition: 100ms;
        animation-timing-function: ease-out;
    } 
    
</style>


