import { writable } from "svelte/store";

export const state = writable({
    images: [],
    loading: true
});
