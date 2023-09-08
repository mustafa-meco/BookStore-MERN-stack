import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <BookSingleCard book={book} />
      ))}
    </div>
  );
};

// TODOs
// 1. Add PropTypes
// 2. Add default props
// 3. Add tests
// 4. Add storybook
// 5. Add styles

export default BooksCard;
