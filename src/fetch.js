const img = document.querySelector('img');
const searchBtn = document.querySelector('.search-btn');
const refreshBtn = document.querySelector('.refresh-btn');

// USING PROMISES VIA ASYNC/AWAIT
const getImg = async function getImgfromGiphyAPI(search) {
  const userSearch = document.querySelector('#user-search').value;
  search = userSearch || 'cats';
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=gSwGOyzsRFnpkZDzVzWo8PbsOIMKdBSd&s=${search}`,
      { mode: 'cors' }
    );
    const gifData = await response.json();
    img.src = gifData.data.images.original.url;
  } catch (error) {
    console.log(error);
  }
};

function handleError(fn) {
  return function (...params) {
    return fn(...params).catch((err) => {
      console.log('oops', err);
    });
  };
}

getImg();

searchBtn.addEventListener('click', getImg);
refreshBtn.addEventListener('click', getImg);
