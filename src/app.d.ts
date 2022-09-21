// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		userid: string;
	}

	// interface PageData {}

	// interface PageError {}

	// interface Platform {}

  namespace Apartment {
    type ItemDetails = {
      bedrooms: number
      size: number
    }

    type Item = {
      id: number
      title: string
      rating: number
      location: string
      price: number
      details: Apartment.ItemDetails
    }
  }
}
