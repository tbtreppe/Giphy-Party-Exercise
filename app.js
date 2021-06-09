const $imagearea = $("#image-area");
const $searchInput = $("#search");

function getGiphy(res) {
  const $ul = $("#images");
  const $li = $("li"); // this is actually selecting <li> elements, but I think you're meaning to create a <li>
  let numResults = res; // this should be a number, as in numResults
  // try console.log(res) and understand the data structure
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $addGif = $("<img>", { src: res[randomIdx] }); // this will generate an element => <img src="whatever res[randomIdx] is"> please inspect the data structure of res and try fixing this

    $li.append($addGif);
    $ul.append($li);
    console.log("an image is coming");
  }
  console.log(numResults);
}

$("#searchform").on("submit", async function (evt) {
  evt.preventDefault();

  let searchGiphy = $searchInput.val();
  $searchInput.val("");
  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: "pXRNb3pmfel4eUDipzy3bkTgAzR6Cf9k",
      q: searchGiphy,
    },
  });
  getGiphy(response.data);
});
$("#delete").on("click", function () {
  $imagearea.empty();
});

console.log("Let's get this party started!");
