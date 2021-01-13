import refs from "./refs.js";
import PixabayAPI from "./apiService.js";
import ImgItemTemplate from "../template/card.hbs";
import { onOpenModal } from "./modal.js";

const { imageGallery, form, scroll } = refs;
// console.log(refs);

const pixabay = new PixabayAPI();

form.addEventListener("submit", onSearch);
imageGallery.addEventListener("click", onOpenModal);

function onSearch(e) {
  e.preventDefault();
  pixabay.query = e.currentTarget.elements.query.value;

  if (pixabay.query === "") {
    return alert("Enter the word");
  }

  pixabay.resetPage();
  clearHits();
  observer.observe(scroll);
}

function appendHits(hits) {
  imageGallery.insertAdjacentHTML("beforeend", ImgItemTemplate(hits));
}

function clearHits() {
  imageGallery.innerHTML = "";
}

const onEntry = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && pixabay.query !== "") {
      pixabay.fetchHits().then((hits) => {
        appendHits(hits);
        pixabay.incrementPage();
      });
    }
  });
};

// IntersectionObserver API https://developer.mozilla.org/uk/docs/Web/API/Intersection_Observer_API
const observer = new IntersectionObserver(onEntry, {
  rootMargin: "160px",
});
