import React, { useEffect, useState } from "react";
import axios from "axios";

const Apps = () => {
  const [Advicee, SetAdvice] = useState();

 

  useEffect(() => {
    async function getdata() {
      const response = await axios.get(`https://api.adviceslip.com/advice`);

      const { advice } = response.data.slip;
      SetAdvice(advice);
    }
    getdata();
  });

  const advvv = () => {
    async function getdata() {
      const response = await axios.get(`https://api.adviceslip.com/advice`);

      const { advice } = response.data.slip;
      SetAdvice(advice);
      console.log(advice);
    }
    getdata();
  };

  return (
    <>
      <div className="app">
        <div className="card-flyer">
          <div className="text-box">
            <div className="text-container">
              <h6>Advice</h6>
              <h2>{Advicee}</h2>
                 <button className="button" onClick={advvv}>
                Click Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apps;
