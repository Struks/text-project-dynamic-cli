<template>
    <div class="contact-info mt-4 offset-lg-3">
        <h2>{{subtitle}}</h2>
        <p class='mt-3'>{{informations}}</p>
        <b>email:</b>&NonBreakingSpace;&NonBreakingSpace;<a href="mailto:info@bild-studio.net">{{email}}</a><br/>
        <p><b>phone:</b>&NonBreakingSpace;&NonBreakingSpace;{{phone}}<br/></p>
        {{street}}<br/>
        {{ZIP}}
        <h2 class="mt-4">{{storeHours}}</h2>
        <table>
            <tr>
                <td>{{workDays}}</td>
                <td class="td-left-margin">{{workTime}}</td>
            </tr>
            <tr>
                <td>{{noWork}}</td>
                <td class="td-left-margin">{{noTime}}</td>
            </tr>
            </table>
    </div>
</template>


<script>
import {mapGetters} from 'vuex'
export default {
  data(){
      return{

      }
    },
    computed:{
        ...mapGetters([
           'subtitle',
           'storeHours',
           'informations',
           'email',
           'phone',
           'street',
           'ZIP',
           'workDays', 
           'workTime',
           'noWork',
           'noTime',
        ])
    }  
}
</script>


<style scoped>
    .contact-info{
        padding: 13px 0px 0px 15px;
        font-family: 'Helvetica', Arial, sans-serif;
        font-size: 14px;
        color: #adacac;
    }
    .contact-info a{
        text-decoration: none;
        color: #45d07d
    }
    .mt-4{
        padding-top: 12px;
        padding-bottom: 10px;
    }
    .td-left-margin{
        padding-left: 50px;
    }
</style>


