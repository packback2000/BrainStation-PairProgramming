const webrequest = require("axios");
const express = require("express");
const searchRoutes = express.Router();

const dotenv = require("dotenv");
dotenv.config();

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

function createSearchResults(data, searchString) {
  let currentItem = data.items[0];
  console.log(`ID ${currentItem.id}`);
  console.log(`search string: ${searchString}`);

  let searchTermSplit = searchString.split(" ");
  //console.log(`search split: ${[searchTermSplit]}`);

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
  console.log(
    `thumbnail ${currentItem.volumeInfo.imageLinks.thumbnail} sale ${currentItem.saleInfo.saleability}`
  );
  let isForSale =
    currentItem.saleInfo.saleability === "NOT_FOR_SALE"
      ? false
      : currentItem.saleInfo.listPrice;
  console.log(`for sale ${isForSale ? isForSale.amount : "0"}`);
  /**
   * rating,
   * price,
   * title,
   * subtitle,
   * searchTermInTitle,
   * author,
   * searchTermInAuthor
   * link,
   * description
   */
  return {
    rating: currentItem.volumeInfo.averageRating,
    price: isForSale,
    title: currentItem.volumeInfo.title,
    subtitle: currentItem.volumeInfo.subtitle,
    searchTermInTitle: searchTermInTitle,
    author: currentItem.volumeInfo.authors,
    searchTermInAuthor: searchTermInAuthor,
    link: "",
    description: currentItem.volumeInfo.description,
  };
}

searchRoutes.get("/:searchString", (req, res) => {
  let searchTerm = req.params.searchString;
  console.log(`----------- QUERY IN: ${searchTerm} -----------`);

  const queryBooksAPI = async () => {
    let queryString = `?q=${searchTerm}&orderBy=newest&key=${process.env.API_KEY}`;
    console.log(`API QUERY: ${process.env.API_URL}${queryString}`);
    try {
      let { data } = await webrequest.get(
        `${process.env.API_URL}${queryString}`
      );
      console.log(data);
      res.send(createSearchResults(data, searchTerm));
    } catch (err) {
      console.log(err);
    }
  };

  queryBooksAPI();
});

//queryBooksAPI("dirty work");

module.exports = searchRoutes;
