const webrequest = require("axios");
const express = require("express");
const searchRoutes = express.Router();

const dotenv = require("dotenv");
dotenv.config();

const DEFAULT_LIMIT = 10;

// ///volumes/volumeId  TAFSEAAAQBAJ
// let volumeId = "TAFSEAAAQBAJ";
// queryString = `/${volumeId}?key=${process.env.API_KEY}`;
// console.log(`API QUERY: ${process.env.API_URL}${queryString}`);
// webrequest
//   .get(`${process.env.API_URL}${queryString}`)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     //console.log(error);
//   });

function createSearchResults(data, searchString, searchLimit) {
  let results = [];

  let searchTermSplit = searchString.split(" ");

  data.items.forEach((currentItem, index) => {
    if (index > searchLimit) return;

    console.log(
      `title ${currentItem.volumeInfo.title} subtitle ${currentItem.volumeInfo.subtitle} authors ${currentItem.volumeInfo.authors}`
    );

    let searchTermInTitle =
      currentItem.volumeInfo.title
        .toLowerCase()
        .indexOf(searchTermSplit[0].toLowerCase()) >= 0;
    console.log(`searchTermInTitle ${searchTermInTitle}`);

    let searchTermInAuthor =
      currentItem.volumeInfo.authors[0]
        .toLowerCase()
        .indexOf(searchTermSplit[0].toLowerCase()) >= 0;
    console.log(`searchTermInAuthor ${searchTermInAuthor}`);

    console.log(`description ${currentItem.volumeInfo.description}`);
    console.log(`rating ${currentItem.volumeInfo.averageRating}`);
    console.log(`number of ratings ${currentItem.volumeInfo.ratingsCount}`);
    let isForSale =
      currentItem.saleInfo.saleability === "NOT_FOR_SALE"
        ? false
        : currentItem.saleInfo.listPrice;
    console.log(`for sale ${isForSale ? isForSale.amount : "0"}`);
    /**
     * rating,
     * ratingcount,
     * price,
     * title,
     * subtitle,
     * searchTermInTitle,
     * author,
     * searchTermInAuthor
     * link,
     * description,
     * image,
     */
    results = [
      ...results,
      {
        rating: "",
        ratingcount: "",
        price: isForSale,
        title: currentItem.volumeInfo.title,
        subtitle: currentItem.volumeInfo.subtitle,
        searchTermInTitle: searchTermInTitle,
        author: currentItem.volumeInfo.authors,
        searchTermInAuthor: searchTermInAuthor,
        link: "",
        description: currentItem.volumeInfo.description,
        image: "",
      },
    ];
  });

  return results;
}

searchRoutes.get("/:searchString", (req, res) => {
  let searchTerm = req.params.searchString;
  let searchLimit = req.query.limit || DEFAULT_LIMIT;
  console.log(`----------- QUERY IN: ${searchTerm} ${searchLimit}-----------`);

  const queryBooksAPI = async () => {
    let queryString = `?q=${searchTerm}&orderBy=newest&key=${process.env.API_KEY}`;
    console.log(`API QUERY: ${process.env.API_URL}${queryString}`);
    try {
      let { data } = await webrequest.get(
        `${process.env.API_URL}${queryString}`
      );
      console.log(data);
      res.send(createSearchResults(data, searchTerm, searchLimit));
    } catch (err) {
      console.log(err);
    }
  };

  queryBooksAPI();
});

module.exports = searchRoutes;
