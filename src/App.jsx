import "./App.css";
import React, {useState, useEffect} from "react";
import { Button } from "@mui/material";
import axios from "axios";
import pet1 from "./assets/pet1.jpg";

function App() {
  const [able, setAble] = useState(true);

  const handleClick = () => {
    setAble(false);
    feed();
    setTimeout(() => {
      setAble(true);
    }, "10000")
  };

  function feed () {
    const options = {
      method: "POST",
      url: "http://localhost:8080/api/pets/messages",
      params: { message: "food" },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl	font-semibold p-5">Welcome to PetIoT</h1>
        <section className="flex w-full flex-row">
          <div className="flex flex-col space-y-1 items-center md:space-y-3">
            <picture className="flex flex-col items-center rounded-full p-5">
              <img
                src={pet1}
                className="w-full rounded-full lg:w-1/3"
                alt="Foto de la mascota"
              />
            </picture>
            <h3>Trosky</h3>
            <p>7 Kilogramos</p>
            <p>6 meses</p>
            <Button disabled={!able} onClick={handleClick} variant="contained">
              Feed pet
            </Button>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
