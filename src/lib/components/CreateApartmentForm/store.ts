import { writable } from 'svelte/store';

export const form = writable<App.Apartment.Form.Create>({
  title: '',
  city: '',
  country: '',
  bedrooms: 0,
  size: 0,
  price: 0,
})

