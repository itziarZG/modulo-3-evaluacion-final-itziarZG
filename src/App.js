import "./App.scss";
import { Route, Switch } from "react-router-dom";
import getDataFromAPI from "./services/getDataFromAPI";
import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList/CharacterList";
import Loader from "./services/Loader";
import Filters from "./components/Filters/Filters";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";
import Logo from "./images/Rick_and_Morty_-_logo_(English).png";

function App() {
  //STATE VARS
  const [isLoading, setLoading] = useState(true); //true while APi is fetching
  const [data, setData] = useState([]); // empty since API return data
  const [filterValue, setFilterValue] = useState("");
  const [checkedSort, setCheckedSort] = useState(false);

  //GET DATA
  useEffect(() => {
    getDataFromAPI().then((data) => {
      setData(data);
      setLoading(false);
    });
    return;
  }, []);

  //HANDLEFILTER NAME
  const handleFilter = (dataFilter) => {
    setFilterValue(dataFilter);
  };

  //HANDLEFILTER SORT
  const handleFilterSort = (checked) => {
    if (checked) setCheckedSort(true);
    else setCheckedSort(false);
  };

  //HANDLE URL CHARACTER DETAIL
  const handleCharacterDetail = (props) => {
    const characterClicked = data.find((char) => {
      return char.id === parseInt(props.match.params.id);
    });
    return <CharacterDetail info={characterClicked} />;
  };

  // FILTER CHARACTER AND SORT LIST BEFORE PAINTING
  const filterData = data.filter((character) => {
    return character.name.toUpperCase().includes(filterValue.toUpperCase());
  });
  const sortedData = checkedSort
    ? filterData.sort((charA, charB) => {
        if (charA.name > charB.name) {
          return 1;
        }
        if (charA.name < charB.name) {
          return -1;
        }
        // charA must be equal to charB
        return 0;
      })
    : filterData;

  return (
    <div className="App">
      <h1 className="App__title">Rick and Morty</h1>
      <img style={{ width: "50%" }} src={Logo} alt="Logo Rick and Morty"></img>
      <Filters
        value={filterValue}
        handleFilter={handleFilter}
        handleFilterSort={handleFilterSort}
        checked={checkedSort}
      />
      <Switch>
        <Route exact path="/">
          {isLoading ? <Loader /> : <CharacterList data={sortedData} />}
        </Route>
        <Route exact path="/detail/:id" render={handleCharacterDetail} />
      </Switch>
    </div>
  );
}
export default App;
