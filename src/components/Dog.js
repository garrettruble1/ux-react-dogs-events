// Dog.js
import React from "react";


function Dog(props) {

  const handlePetClick = () => {
    alert(`You gave pets to ${props.dog.name}`);
  }

  return (
    <>
  <div>{props.dog.name}</div>
  <button onClick={handlePetClick}>Pet Dog!</button>
  </>
  );
}

export default Dog;
