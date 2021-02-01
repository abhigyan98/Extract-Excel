import React, { useState, useEffect } from "react";
//import { getData } from "../apicalls/apicalls";
import { api } from "../Backend"

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

    <div className="row">
      <hr />
      <h1 className="text-center text-success" > Extract Excel </h1>
      <hr />
      <br /><br />
      <div className="col-sm-5">
      <div className="card center border-0">
        <div className="card-body">
          <h5 className="card-title">Upload Excel File</h5>
          <form id="myForm" encType="multipart/form-data" onSubmit={handleSubmit}>
            <input type="file" name="file" id="file" /><br/><br/>
            <button className="btn btn-primary" type="submit">Upload</button>
          </form>
        </div>
      </div>
      </div>
      <div className="col-sm-7">
      <div className="card center border-0">
        <span>
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
        </span>
      </div>
      </div>
    </div>
  );
};

export default Home;
