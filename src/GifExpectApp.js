import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";

const GifExpectApp = () => {
  const [categories, setCategories] = useState(["Koe no Katachi"]);

  // const handleAdd = () => {
  //   const newCategory = "Hibike! Euphonium";
  //   setCategories((cats) => [...cats, newCategory]);
  // };

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((cat) => {
          return <GifGrid key={cat} category={cat} />;
        })}
      </ol>
    </div>
  );
};

export default GifExpectApp;
