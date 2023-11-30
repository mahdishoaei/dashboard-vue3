<template>
    <div class="d-flex flex-column">
       <span class="app-font-size-16 app-font-weight-600">
          {{ name }}
       </span>
       <div 
        class="app-bg-primary line"  
        :style="{'width': `${width}`}"
       >
       </div>
    </div>
</template>

<script setup>
const props = defineProps({
    name : {
        type : String,
        default : "",
        required : false
    },
    width : {
        type : String,
        default : "",
        required : false
    },
})
</script>

<style lang="scss">
.line{
    height: 2px;
    margin-top: 5px;
}
</style>