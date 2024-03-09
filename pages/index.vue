<script setup lang="ts">
import ExampleDialog from '~/components/Modal/ExampleDialog.vue';


const popup = useOurPopup(ExampleDialog);


</script>
<template>
    <div>
        <button @click="popup.show()">Open form</button>
    </div>
</template>