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

      //volumeInfo.imageLinks.thumbnail
      //volumeInfo.categories[]
      //volumeInfo.mainCategory
    let searchTermInTitle =
      currentItem.volumeInfo.title
        .toLowerCase()
        .indexOf(searchTermSplit[0].toLowerCase()) >= 0;

    let searchTermInAuthor =
      currentItem.volumeInfo.authors[0]
        .toLowerCase()
        .indexOf(searchTermSplit[0].toLowerCase()) >= 0;

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
        id: currentItem.id,
        rating: currentItem.volumeInfo.averageRating || 0,
        ratingcount: currentItem.volumeInfo.ratingsCount || 0,
        price: currentItem.saleInfo.listPrice || {amount: -1, currencyCode: "USD"},
        title: currentItem.volumeInfo.title,
        subtitle: currentItem.volumeInfo.subtitle,
        searchTermInTitle: searchTermInTitle,
        author: currentItem.volumeInfo.authors,
        searchTermInAuthor: searchTermInAuthor,
        link: currentItem.saleInfo.buyLink,
        description: currentItem.volumeInfo.description,
        image: (currentItem.volumeInfo.imageLinks && currentItem.volumeInfo.imageLinks.thumbnail) || "",
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
