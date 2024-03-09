import { createVNode, render } from 'vue'
import { usePopupStore } from '~/store/popup'
import type { Component } from 'nuxt/schema'


export const useOurPopup = (Component : Component )  => {


  const vnode = createVNode(Component);
  const popupStore = usePopupStore();

  const show =   () => {
      popupStore.setPopupState(true); 
    render(vnode, document.querySelector('.modal__wrapper') as Element);
  }

  const hide = () => {
    popupStore.setPopupState(false);
    render(null, document.querySelector('.modal__wrapper') as Element);
  } 
  return {
    show,hide
  };
}