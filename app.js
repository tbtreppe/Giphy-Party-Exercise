const $imagearea = $("#image-area");
const $searchInput = $("#search");

function getGiphy(res) {
  const $ul = $("#images");
  const $li = $("<li>");
  let numResults = res.data.length;
  console.log(res);
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $addGif = $("<img>", { src: res.data[randomIdx].images.original.url });

    $li.append($addGif);
    $ul.append($li);
    $imagearea.append($ul);
    console.log("an image is coming");
    console.log(res);
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
