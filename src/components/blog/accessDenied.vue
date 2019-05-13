<template>
    <div class="margin-bottom">
        <h1 class="text-center mt-5">You don't have authorization <br/> to access this page.</h1>
        <div class="text-center mt-5">
            <!-- back to last page -->
            <button @click="$router.go(-1)" class="btn btn-danger">BACK</button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>
h1{
    margin-top: auto;
    margin-bottom: auto;
}
</style>
