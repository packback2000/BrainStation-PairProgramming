function ListItem(props) {
  return (
    <div className="search__list">
      <h1 className="search__list_title">
        <a href={props.link} target="_blank">{props.title}</a>
      </h1>
      <img src={props.image}/>
      <div className="search__list__details">
        <span className="search__list__details_rating">
          Rating: {(props.rating || props.ratingcount !== 0) ? props.rating : "Not Available"}
        </span><br />
        <span className="search__list__details_rating">
          Price: {(props.price.amount !== undefined) ? "$" + props.price.amount : " PriceNot Available"}
          <br></br> 
          {(props.price.currencyCode !== undefined) ? "$" + props.price.currencyCode : "Currency Code Not Available"}
          <span className="search__list__details_rating">
           
          </span>
        </span>
      </div>
    </div>
  );
}

export default ListItem;

/* 
id: currentItem.id,
        rating: currentItem.volumeInfo.averageRating,
        ratingcount: currentItem.volumeInfo.ratingsCount,
        price: isForSale,
        title: currentItem.volumeInfo.title,
        subtitle: currentItem.volumeInfo.subtitle,
        searchTermInTitle: searchTermInTitle,
        author: currentItem.volumeInfo.authors,
        searchTermInAuthor: searchTermInAuthor,
        link: currentItem.saleInfo.buyLink,
        description: currentItem.volumeInfo.description,
        image: currentItem.volumeInfo.imageLinks.thumbnail,
*/
