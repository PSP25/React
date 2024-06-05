import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "../components/card.jsx";
function App() {
  const [count, setCount] = useState(0);

  const newobj = {
    username: "kai",
    age: 14,
  };
  const arr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4  rounded-xl mb-4">
        Tailwind test
      </h1>
      {/* creating a card to learn about props */}
      <Card />
      <Card />
      {/* but each card has different properties like innertext,names photos
   this changes is done by passing properties in the jsx file
   called as raect props */}
      <Card username="psp react" btnTxt="click me" />

      {/* // we can pass objects as stored variables */}

      <Card  username="my react" btnTxt="visit here"/>
    </>
  );
}

export default App;
