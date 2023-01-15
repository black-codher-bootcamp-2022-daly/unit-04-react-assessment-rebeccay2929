import react from "react";

const Search = (props) => {
  const { phrase, setPhrase, search } = props;
  function handleChange(e) {
    setPhrase(e.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
    search(phrase);
  }
  return (
    <form className="Search">
      <p style={{ color: "red" }} className="typed">
        <em> {phrase && "Searched item: " + phrase}</em>
      </p>
      <input
        type="text"
        value={phrase}
        onChange={handleChange}
      />
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
    </form>
  );
};

export default Search;