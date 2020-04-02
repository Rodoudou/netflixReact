import React, { useState, useEffect } from "react";
import movies from "./movies";
import Logo from "./assets/img/logo.png";
import Section from "./components/Section";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState(movies);

  useEffect(() => {
    const fetchData = async () => {
      await setDatas(datas);
      setIsLoading(false);
      console.log(datas);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        {isLoading ? (
          <p>En chargement...</p>
        ) : (
          <div>
            <img className="logo" src={Logo} alt="" />
            {datas.map((movie, index) => (
              <Section
                key={index}
                category={movie.category}
                images={movie.images}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
