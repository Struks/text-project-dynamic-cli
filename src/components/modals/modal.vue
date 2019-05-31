<template>
<div>
   <div v-if="showModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">

        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Question Of Confirmation</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" @click="config.onCancel">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Do you wanna really delete <b>{{config.message}}</b>?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="config.onCancel">{{config.cancelLabel}}</button>
                    <button type="button" class="btn btn-primary" @click="config.onConfirm">{{config.confirmationLabel}}</button>
                </div>
            </div>
        </div>

        </div>
      </div>
    </transition>
  </div>
  </div>
</template>

<script>
import router from '@/router';

export default {
    data(){
        return{
  
        }
    },
    computed:{
        showModal(){
            return this.$store.getters['modal/modal'];
        },
        config() {
            return this.$store.getters['modal/config'];
        }
    },

}
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }
    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
</style>
