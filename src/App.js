import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  //  bmi =(weight/(height**2)*703) 
  function calBmi(e) {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter valid height or weight");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));
      console.log(bmi);

      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are at a healthy weight");
      } else {
        setMessage("Oops! You are overweight!");
      }
    }
  }

  function reload() {
    window.location.reload();
  }

  return (
    <div className="App">
      <div className="container">
        <h1>BMI calculator</h1>
        <form onSubmit={calBmi}>
          <div className="main-container">
            <div className="input-container">
              <div className="input-field">
                <label>Weight (ibs)</label>
                <input
                  type="text"
                  placeholder="Enter weight value"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div className="input-field">
                <label>Height (in)</label>
                <input
                  type="text"
                  placeholder="Enter height value"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
            </div>

            <div className="btn-container">
              <button type="submit" className="btn">
                Submit
              </button>
              <button
                type="submit"
                className="btn btn-outline"
                onClick={reload}
              >
                Reload
              </button>
            </div>

            <hr />

            <div className="center">
              <h3>Your BMI is :{bmi}</h3>
              <p>{message}</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
