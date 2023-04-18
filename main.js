const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", updateLinks);

function updateLinks() {
  const keyword = searchInput.value;

  const amazonLink = `https://www.amazon.co.jp/s?k=${
    encodeURIComponent(keyword)
  }&i=stripbooks&bbn=2761990051&rh=n%3A2761990051%2Cn%3A465392%2Cn%3A466298&dc&qid=1681794377&rnid=2761990051`;
  const mercariLink = `https://jp.mercari.com/search?keyword=${
    encodeURIComponent(keyword)
  }&status=on_sale&category_id=674`;
  const paypayLink = `https://paypayfleamarket.yahoo.co.jp/search/${
    encodeURIComponent(keyword)
  }?categoryIds=10002%2C10604&open=1`;

  document.getElementById("amazonLink").href = amazonLink;
  document.getElementById("mercariLink").href = mercariLink;
  document.getElementById("paypayLink").href = paypayLink;
}
