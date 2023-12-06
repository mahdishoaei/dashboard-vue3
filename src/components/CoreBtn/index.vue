<template>
    <button 
    :style="{
      'border-radius': `${borderRadius}`, 
      'width': `${width}`,
      'height': `${height}`
    }"
    :class="{
        'app-bg-primary': background === 'primary', 
        'app-bg-secondary': background === 'secondary',
        'app-bg-danger': background === 'danger',
        'app-bg-gray': background === 'gray',
        'app-bg-light': background === 'light',
        'app-bg-white': background === 'white',
        'app-bg-dark': background === 'dark',
        'app-bg-blue': background === 'blue',
        'outline-primary': background === 'outline-primary', 
        'outline-primary-hover': background === 'outline-primary-hover', 
     }">
      <v-progress-circular  
        :size="24" 
        v-if="loading"  
        indeterminate
      ></v-progress-circular>
       <div class="d-flex " v-else>
          <!-- <div class="mt-1 mx-1">
            <BootstrapIconTrashFill v-if="icon === 'trash'" />
            <v-icon v-if="icon === 'addtocart'">mdi-cart-plus</v-icon>
            <BootstrapIconCashCoin v-if="icon === 'cash'" />
            <BootstrapIconHeartFill v-if="icon === 'favorite'" class="mt-1 mx-2"/>
          </div> -->
          <span class="name" v-if="name">
            {{ name }}
          </span>           
       </div>
    </button>
</template>

<script setup>
  const props = defineProps({
    name : {
        type : String,
        default : "",
        required : false
    },
    icon : {
        type : String,
        default : "",
        required : false
    },
    background : {
        type : String,
        default : "",
        required : false
    },
    borderRadius : {
        type : String,
        default : "",
        required : false
    },
    width : {
        type : String,
        default : "",
        required : false
    },
    height : {
        type : String,
        default : "",
        required : false
    },
    loading : {
        type : Boolean,
        default : false,
        required : false
    },
  })
</script>

<style  scoped>
button{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 6px;
}

.name{
  padding-top: 2px;
}

.outline-primary{
   border: 1px solid #fd7403;
   background: #fd740357;
   color: #fd7403;
}

.outline-primary-hover{
  border: 1px solid #fd7403;
  background: none;
  color: #fd7403;
  transition: 1s;
}
.outline-primary-hover:hover{
  background: #fd740357;
}
</style>