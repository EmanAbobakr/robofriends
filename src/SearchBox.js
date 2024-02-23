export const SearchBox = ({ setSearchedWord }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={setSearchedWord}
      />
    </div>
  );
};
