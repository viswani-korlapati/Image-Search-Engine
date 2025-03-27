const accessKey = "6ZgdygwK5LjLt7nXAzl2xwAJ-7V5-N5UdZHHfVuVdnk";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
let keyword = "";
let page = 1;
async function searchImage() {
keyword = searchBox.value;
const url =
`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${
accessKey}&per_page=9&order_by=relevant`;
const response = await fetch(url);
const data = await response.json();
if (page === 1) {
searchResult.innerHTML = "";
}
const results = data.results;
results.forEach((result) => {
const image = document.createElement("img");
image.src = result.urls.regular;
const imageLink = document.createElement("a");
imageLink.href = result.links.html;
imageLink.target = "_blank";
imageLink.appendChild(image);
searchResult.appendChild(imageLink);
});
showMoreBtn.style.display = "block";
}
searchForm.addEventListener("submit", (e) => {
e.preventDefault();
page = 1;
searchImage();
});
showMoreBtn.addEventListener("click", () => {
page += 1;
searchImage();
});