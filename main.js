const accessKey = 'AT12wq2dP_zWbWcSnJWgXUVyJFPlamcaLHPXMrbxe7c';
const d = document;
const w = window;

const searchForm = d.getElementById('search-form');
const searchBox = d.getElementById('search_box');
const searchResult = d.getElementById('search-result');
const showMoreBtn = d.getElementById('show-more-btn');


let keyword = '';
let page = 1;

async function searchImages() {

    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1) {

        searchResult.innerHTML = '';
    }


    console.log(data);

    const results = data.results;

    results.map((result) =>{

        const image = d.createElement('img');
        image.src = result.urls.small;

        const imageLink = d.createElement('a');
        imageLink.href = result.links.html;

        imageLink.target = '_blank';

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });

    showMoreBtn.style.display = 'block';

}

searchForm.addEventListener('submit', (e)=>{

    e.preventDefault();
    page = 1;
    searchImages()
});

showMoreBtn.addEventListener('click', (e) =>{

    page++;
    searchImages();
})