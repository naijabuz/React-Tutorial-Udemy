const Book = ({ img, title, authname }) => {
  return (
    <article className="book">
      <img src={img} />

      <h2>{title}</h2>

      <h3 style={{ marginTop: "10px", marginBottom: "10px" }}>
        {authname.toUpperCase()}
      </h3>

      <p style={{ color: "#fff" }}>Click to learn more about this book</p>
    </article>
  );
};

export default Book;
