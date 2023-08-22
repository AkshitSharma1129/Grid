import React, { useState } from "react";
import "./Modal.css";

function Modal({ setOpenModal, funcs, onTextEntered }) {
  const [textInput, setTextInput] = useState(""); // State to store entered text

  const handleTextChange = (e) => {
    setTextInput(e.target.value); // Update state with entered text
  };

  const handleContinue = async () => {
    // Here you can access the entered text using the `textInput` state
    console.log("Entered Text:", textInput);

    // Close the modal
    setOpenModal(false);

    // Fetch data and perform other actions
    const response = await fetch("http://localhost:3001/images", {
      method: "POST",
      body: JSON.stringify({
        prompTxt: textInput,
        userId: window.sessionStorage.getItem("userId"),
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const images = await response.json();
      // Set the state to images...
      funcs(images);
    } else {
      alert("Something went wrong");
    }

    // Call the provided onTextEntered function with the entered text
    onTextEntered(textInput);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1 className="modalHeading">
            Describe Your Outfit! We'll Recommend the Best
          </h1>
        </div>
        <div className="body">
          <textarea
            className="styledTextArea"
            placeholder="Please provide a detailed description of the outfit you have in mind...."
            value={textInput}
            onChange={handleTextChange}
          />
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={handleContinue}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
