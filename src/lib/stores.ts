import { writable } from "svelte/store"

const wishlistStore = () => {
  const { subscribe, update } = writable<number[]>([])
  
  const toggle = (id: number) => {
    update(prev => {
      if (prev.includes(id))
        return prev.filter(item => item !== id)
      
      return [id, ...prev]
    })
  }

  return {
    subscribe,
    toggle
  }
}

export const wishlist = wishlistStore()