<template>
    <div>
        <div class="jumbo-home jumbotron jumbotron-fluid mt-1">
            <div class="container">
                <img :src="devices.src" :alt="devices.alt" :class="devices.class">
            </div>
        </div>
        <div class="container">
            <div class="text-button">
                <p :class="paraph.class">{{paraph.text}}</p>
                <button class="btn btn-success">BROWSE PORTFOLIO</button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            devices: { 
                src:"/img/devices.svg", 
                alt:"devices", 
                class:"devices img-fluid" 
            },
            paraph:{
                text:'A peripheral is a “device that is used to put information into or get information out of the computer”.',
                class:'text-uppercase font-weight-bold'
            }
        }
    }
}
</script>


<style scoped>
.jumbo-home{
    position: relative;
    background: #2ecc71 url("/img/sunBurst.svg")no-repeat;
    background-size: cover;
    padding-top: 120px;
    max-height: 525px;
}
.devices{
    /* margin-left: 510px;  */
    margin-left: 3%;
    transform: scale(1);
    opacity: 0;
    animation: show-device 1s ease-out forwards;
}
@keyframes show-device {
    0%{
        transform: scale(.5);
        opacity: 0;
    }
    100%{
        transform: scale(1);
        opacity: 1;
    }
}
@media(max-width:768px) {
    .devices{
        width: 80%;
        height: auto;
        margin-left: 5%;    
    }
    .jumbo-home{
        max-height: 410px;
    }
     .text-button{
        margin-top: 90px !important;
    }
}
@media(max-width:425px){
    .jumbo-home{
        max-height: 270px;
    }
    .text-button{
        margin-top: 60px !important;
    }
    .btn{
        font-size: 13px;
    }
}
@media(max-width:375px){
    .jumbo-home{
        max-height: 252px;
    }
    .text-button{
        margin-top: 45px !important;      
    }
    .btn{
        font-size: 10px;
    }
}
@media(max-width: 320px){
    .jumbo-home{
        max-height: 230px;
    }
    .text-button{
        margin-top: 45px !important;
    }
}
/* text and button */
.text-button{
    margin-top: 110px;
    text-align: center;
    font-size: 16px;
    font-family: "Novecentosan", Arial, sans-serif;
}
.text-button p{
    margin-bottom: 25px;
}
button{
    border: 0px;
    border-radius: 0px;
    background: #2ecc71;

}

</style>


