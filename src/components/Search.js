import react from "react";

const Search = (props) => {
  const { term, setTerm, search } = props;
  function handleChange(e) {
    setTerm(e.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
    search(term);
  }
  return (
    <form className="Search">
      <p style={{ color: "red" }} className="typed">
        <em> {term && "Searched item: " + term}</em>
      </p>
      <input
        type="text"
        value={term}
        onChange={handleChange}
      />
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
    </form>
  );
};

export default Search;