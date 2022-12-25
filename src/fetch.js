const img = document.querySelector('img');
const searchBtn = document.querySelector('.search-btn');
const refreshBtn = document.querySelector('.refresh-btn');

// // USING PROMISES DIRECTLY
// const getImg = function getImgfromGiphyAPI(search) {
//     let userSearch = document.querySelector('#user-search').value;

//     search = userSearch ? userSearch : 'cats';

//     fetch(`https://api.giphy.com/v1/gifs/translate?api_key=MYKEYHERE&s=${search}`, {mode: 'cors'})
//         .then((response) => response.json())
//         .then((response) => img.src = response.data.images.original.url)
//         .catch((error) => console.log(error));
// }


// USING PROMISES VIA ASYNC/AWAIT
const getImg = async function getImgfromGiphyAPI(search) {
    let userSearch = document.querySelector('#user-search').value;
    search = userSearch ? userSearch : 'cats';

    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=gSwGOyzsRFnpkZDzVzWo8PbsOIMKdBSd&s=${search}`, {mode: 'cors'});
    const gifData = await response.json();
    img.src = gifData.data.images.original.url
}

getImg();

searchBtn.addEventListener('click', getImg);
refreshBtn.addEventListener('click', getImg);