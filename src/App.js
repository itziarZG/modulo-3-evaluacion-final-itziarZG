import "./App.css";
import { Route } from "react-router-dom";
import getDataFromAPI from "./services/getDataFromAPI";
import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList/CharacterList";
import Loader from "./services/Loader";
import Filters from "./components/Filters/Filters";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";

function App() {
  //variables estado
  const [isLoading, setLoading] = useState(true); //true while APi is fetching
  const [data, setData] = useState([]); // empty since API return data
  // const [filterData, setFilterData] = useState();
  const [filterValue, setFilterValue] = useState("");

  //GET DATA
  useEffect(() => {
    getDataFromAPI().then((data) => {
      setData(data);
      setLoading(false);
    });
    return;
  }, []);

  //HANDLEFILTER
  const handleFilter = (dataFilter) => {
    setFilterValue(dataFilter);
  };

  //handleCharacterDetail
  const handleCharacterDetail = (props) => {
    const characterClicked = data.find(
      (char) => char.id === props.match.params.id
    );
    console.log(characterClicked);
  };

  const filterData = data.filter((character) => {
    return character.name.toUpperCase().includes(filterValue.toUpperCase());
  });

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <Filters value={filterValue} handleFilter={handleFilter} />
      {isLoading ? <Loader /> : <CharacterList data={filterData} />}
      <Route path="/detail/:id" render={handleCharacterDetail} />}
    </div>
  );
}
export default App;
