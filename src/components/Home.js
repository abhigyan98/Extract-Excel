import React, { useState, useEffect } from "react";
//import { getData } from "../apicalls/apicalls";
import {api} from "../Backend"

const Home = () => {
  const [data, setData] = useState([]);

  // const loadAllData = () => {
  //   getData().then((d) => {
  //     if (d.error) {
  //       console.log(d.error);
  //     } else {
  //       setData(d);
  //     }
  //   });
  // };

  useEffect(() => {
    //loadAllData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    var form = document.getElementById("myForm");
    fetch(`${api}`, {
      method: "POST",
      body: new FormData(form)
    })
    .then((response) => {
      return response.json();
    })
    .then((dt) => {
      setData(dt)
    })
  }

  return (
    <div>
      <h1> Home </h1> <br /><br/>
      <div>
        <form id="myForm" encType="multipart/form-data" onSubmit={handleSubmit}>
          <input type="file" name="file" id="file"/>
          <button type="submit">Upload</button>
        </form>
      </div>
      {data.map((dt, index) => {
          return (
              <p key={index} align="left">[{
                  dt.map((d, i) => {
                      return (
                      <span key={i}>{d}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      )
                  })
              }]</p>
          )
      })}
    </div>
  );
};

export default Home;
