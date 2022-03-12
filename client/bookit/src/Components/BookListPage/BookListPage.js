

export default function BookListPage(props) {
    let url = 'http://lgimages.s3.amazonaws.com/nc-md.gif';
    return(
        <section className="booklist">
            <p className="book-title">{(props.title !== undefined) ? props.title : "Title Not Available"}</p>
            <p className="book-author">{(props.author !== undefined) ? props.author : "Author Not available"}</p>
            <img src={(props.image !== undefined) ? props.image : url} alt="book cover" />
            <p className="book-description"> { (props.description !== undefined) ?  props.description : "Description Not Available" } </p>
            <p className="book-rating">Rating: {(props.rating !== undefined) ? props.rating : "Not Available"}</p>
            <p className="rating-count">Number of Ratings: {(props.ratingCount !== undefined) ? props.ratingCount : "Not Available"}</p>
        </section>
    )
}