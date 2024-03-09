<script setup>  
import { onMounted } from 'vue';
const isOk = ref(false);
 
const submit = () => {
    isOk.value = true;
} 

onMounted(() => {
    console.log('lol');  
})
 
</script> 
<template >
    <transition name="change" mode="out-in">
        <div v-if="!isOk">
            <form @submit.prevent="submit"> 
                <input type="text">
                <input type="text">
                <button type="submit">Send</button> 
            </form>
        </div>
        <div v-else>
            ok
        </div>
    </transition>
</template>
<style scoped> 
.change-enter-active,
.change-leave-active {
  transition: opacity 0.5s ease;
}

.change-enter-from,
.change-leave-to {
  opacity: 0;
}
input {
    width: 100%;
    padding: 10px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

button{
    width: 100%;
    padding: 10px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

</style>