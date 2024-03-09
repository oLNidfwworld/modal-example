import { defineStore } from "pinia";


export const usePopupStore = defineStore('popup', () => {
    const popupState: Ref<Boolean> = ref(false)

    const setPopupState = (newState: Boolean) => {
        popupState.value = newState
    }

    return {
        setPopupState,
        popupState
    }
})