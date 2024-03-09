<script setup lang="ts">
import { usePopupStore } from '~/store/popup';
 
const popupStore = usePopupStore();

</script>
<template>
    <main>
        <slot></slot>
    </main>
    <BaseRModal v-show="popupStore.popupState"></BaseRModal>
</template>