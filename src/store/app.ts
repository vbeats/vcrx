import {acceptHMRUpdate, defineStore} from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    xx: 'oo',
  }),

  actions: {
    test(xx: string) {
      console.log(xx)
    },
  },
})

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept(acceptHMRUpdate(useAppStore, import.meta.webpackHot))
}
