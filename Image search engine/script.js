const accessKey = "22NT1XNRMBiEZ8450eTlec4oy7Tr6gqHY-Ch5yWTDcA";

const input = document.querySelector(".in");
const button = document.querySelector(".btn");
const button1 = document.querySelector(".btn1");
const Result = document.querySelector(".result");
const Sec = document.querySelector(".sec");

let keyword = "";
let page = 1;

async function searchimages() {
  keyword = input.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    Result.innerHTML = "";
  }

  const results = data.results;
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    Result.appendChild(imageLink);
  });
  Sec.style.display = "block";
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  page = 1;
  searchimages();
});

button1.addEventListener("click", () => {
  page++;
  searchimages();
});
