import "./App.scss";
import { Route } from "react-router-dom";
import getDataFromAPI from "./services/getDataFromAPI";
import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList/CharacterList";
import Loader from "./services/Loader";
import Filters from "./components/Filters/Filters";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";
import Logo from "./images/Rick_and_Morty_-_logo_(English).png";

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
    const characterClicked = data.find((char) => {
      return char.id === parseInt(props.match.params.id);
    });
    return <CharacterDetail info={characterClicked} />;
  };

  //filtrado de datos con info del filtro y ordenación
  const filterData = data
    .filter((character) => {
      return character.name.toUpperCase().includes(filterValue.toUpperCase());
    })
    .sort((charA, charB) => {
      if (charA.name > charB.name) {
        return 1;
      }
      if (charA.name < charB.name) {
        return -1;
      }
      // charA must be equal to charB
      return 0;
    });

  return (
    <div className="App">
      <h1 className="App__title">Rick and Morty</h1>
      <img style={{ width: "50%" }} src={Logo} alt="Logo Rick and Morty"></img>
      <Filters value={filterValue} handleFilter={handleFilter} />
      {isLoading ? <Loader /> : <CharacterList data={filterData} />}
      <Route exact path="/detail/:id" render={handleCharacterDetail} />
      {/* <Route path="/detail/" component={Loader} /> */}
    </div>
  );
}
export default App;
