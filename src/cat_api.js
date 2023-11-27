const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_UI9TruwBsygTHHLD8jNmTmUOU1hC4AwAzLTbi7P0kN5AZUv69phNxmb3O0xc7Peh';

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
