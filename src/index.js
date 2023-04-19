const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", updateLinks);

function updateLinks() {
  const keyword = encodeURIComponent(searchInput.value);

  const amazonLink =
    `https://www.amazon.co.jp/s?k=${keyword}&i=stripbooks&bbn=2761990051&rh=n%3A2761990051%2Cn%3A465392%2Cn%3A466298&dc&qid=1681794377&rnid=2761990051`;
  const mercariLink =
    `https://jp.mercari.com/search?keyword=${keyword}&status=on_sale&category_id=674`;
  const paypayLink =
    `https://paypayfleamarket.yahoo.co.jp/search/${keyword}?categoryIds=10002%2C10604&open=1`;

  document.getElementById("amazonLink").href = amazonLink;
  document.getElementById("mercariLink").href = mercariLink;
  document.getElementById("paypayLink").href = paypayLink;
}

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBmuHKSWPWQNri104l5oxnHA1GLW0Y3aSo",
  authDomain: "u-techbook.firebaseapp.com",
  projectId: "u-techbook",
  storageBucket: "u-techbook.appspot.com",
  messagingSenderId: "476898001462",
  appId: "1:476898001462:web:49fe0073385cb3858ece97",
  measurementId: "G-LJN7YGFPYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
