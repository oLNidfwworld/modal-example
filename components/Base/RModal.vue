<script setup lang="ts">
import { usePopupStore } from "~/store/popup"; 
 

const popupStore = usePopupStore(); 
const close = () => {
    popupStore.setPopupState(false);
} 
 
</script>
<template>
    <div @click="close" id="modal" class="modal__outer">
        <div @click.stop class="modal">
            <div class="modal__wrapper">
                <Transition name="change">
                    <slot />
                </Transition>
            </div>
        </div>
    </div>
</template> 
<style scoped>
.modal__outer {
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.226);
    z-index: 77;
} 
.modal__wrapper {
    min-height: 150px;
    max-height: 80vh;
    min-width: 150px;
    max-width: 80vh;
    padding: 20px;
    background: white;
    inset: 0;
    margin: auto;
    position: absolute;
    width: fit-content;
    height: fit-content;
}
</style>