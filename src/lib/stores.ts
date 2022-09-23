import { writable } from "svelte/store"

const wishlistStore = () => {
  const { subscribe, update } = writable<string[]>([])
  
  const toggle = (id: string) => {
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

export const apartments = writable<App.Apartment.Item[]>([])