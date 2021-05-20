import { useState, useEffect, useContext } from "react";
import ThemeContext from "./ThemeContext";
import useBreedList from "./useBreedList";
import Results from "./Results";
import FormLabels from "./FormLabels";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const THEMELIST = ["darkblue", "peru", "chartreuse", "mediumorchid", "red"];

const SearchPrams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = await res.json();
    console.log(json);
    setPets(json.pets);
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    requestPets();
  };

  return (
    <div className="search-params">
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="loacation">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <FormLabels
          id="animal"
          name="Animals"
          value={animal}
          setFunc={setAnimal}
          list={ANIMALS}
        />
        <FormLabels
          id="breed"
          name="Breed"
          value={breed}
          setFunc={setBreed}
          list={breeds}
        />
        <FormLabels
          id="theme"
          name="Theme"
          value={theme}
          setFunc={setTheme}
          list={THEMELIST}
        />
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchPrams;
