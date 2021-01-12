// ось тут прописуй ключ і базовий лінк
let API_KEY = "19822341-38023a333dc0ee1aeedcaef47";
let BASE_URL = "https://pixabay.com/api";

// Клас PixabayAPI
export default class PixabayAPI {
  constructor() {
    this.searchQuery = "";
    this.page = 1;
  }

  async fetchHits() {
    const request = `/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
    const response = await fetch(BASE_URL + request);
    const newResponse = await response.json();
    return newResponse.hits;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
