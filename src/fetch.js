const img = document.querySelector('img');

// fetch('https://api.giphy.com/v1/gifs/translate?api_key=gZxdUZFUhTpm3p6shvn9AWl5ysMTnA1N&s=cats', {
//     mode: 'cors'
// }).then((response) => {
//     return response.json();
// }).then((response) => {
//     img.src = response.data.images.original.url;
// }).catch((error) => {
//     console.log(error);
// });

fetch('https://api.giphy.com/v1/gifs/translate?api_key=gZxdUZFUhTpm3p6shvn9AWl5ysMTnA1N&s=cats', {mode: 'cors'})
    .then((response) => response.json())
    .then((response) => img.src = response.data.images.original.url)
    .catch((error) => console.log(error));