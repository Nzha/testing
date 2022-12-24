const img = document.querySelector('img');
const searchBtn = document.querySelector('.search-btn');
const refreshBtn = document.querySelector('.refresh-btn');

const getImg = function getImgfromGiphyAPI(search) {
    let userSearch = document.querySelector('#user-search').value;

    search = userSearch ? userSearch : 'cats';

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=gZxdUZFUhTpm3p6shvn9AWl5ysMTnA1N&s=${search}`, {mode: 'cors'})
        .then((response) => response.json())
        .then((response) => img.src = response.data.images.original.url)
        .catch((error) => console.log(error));
}

getImg();

searchBtn.addEventListener('click', getImg);
refreshBtn.addEventListener('click', getImg);