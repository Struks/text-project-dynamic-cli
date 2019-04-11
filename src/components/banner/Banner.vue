<template>
    <div class="banner">
        <div class="container">
            <svgicon v-if="src"
                name='blog'
                width='25'
                color="white"
                class="icon mr-2"
            />
            <h1>{{headline}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        headline:{
            type:String
        },
        src:{
            type:Boolean
        }
    }
}
</script>

<style scoped>
    .banner{
        background-color: #2ecc71;
        padding: 25px;
        margin-top: 10px;
    }
    h1{
        font-family: 'Novecentosan', Arial, sans-serif;
        font-size: 30px;
        text-transform: uppercase;
        color: #fff;  
    }
    .icon{
        float: left;
        margin-top: 8px;
        
    }

</style>


