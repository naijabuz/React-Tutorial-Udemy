import Book from "./Book";
import bookData from "../constants";

const Booklist = () => {
  return (
    <section className="booklist">
      {bookData.map((book) => {
        const { title, img, authname } = book;
        return <Book key={title} title={title} img={img} authname={authname} />;
      })}
    </section>
  );
};

export default Booklist;
