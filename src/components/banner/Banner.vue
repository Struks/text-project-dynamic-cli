<template>
    <div class="banner">
        <div class="container">
            <h1>{{headline}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        headline:{
            type:String
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
</style>


