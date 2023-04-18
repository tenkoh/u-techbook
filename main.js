const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", updateLinks);

function updateLinks() {
  const keyword = searchInput.value;

  const amazonLink = `https://www.amazon.co.jp/s?k=${
    encodeURIComponent(keyword)
  }&i=stripbooks&bbn=2761990051&rh=n%3A2761990051%2Cn%3A465392%2Cn%3A466298&dc&qid=1681794377&rnid=2761990051`;
  const mercariLink = "https://www.mercari.com/jp/search/?keyword=" +
    encodeURIComponent(keyword) + "&category_root=5&category_child=0";
  const paypayLink = "https://paypaymall.yahoo.co.jp/search?p=" +
    encodeURIComponent(keyword) + "&cid=465";

  document.getElementById("amazonLink").href = amazonLink;
  document.getElementById("mercariLink").href = mercariLink;
  document.getElementById("paypayLink").href = paypayLink;
}
