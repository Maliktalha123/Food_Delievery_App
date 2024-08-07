import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "./screen.css";



function Home() {
  const [search, setSearch] = useState("");

  const [foodItem, setFoodItem] = useState([]);
  const [foodCat, setFoodCat] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:7000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodCat(response[0]);
    setFoodItem(response[1]);
    // console.log(response[0],response[1])
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "2" }}>
              <div className="d-flex" >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e)=>{setSearch(e.target.value)}}
                />
                <button
                  className="btn btn-outline-success"
                  style={{ backgroundColor: "greenyellow" }}
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://media.istockphoto.com/id/1779137593/photo/crispy-juicy-and-tender-chicken-broast%C2%A0served-with-french-fries-is-the-ideal-snack-plate.webp?b=1&s=170667a&w=0&k=20&c=F-RmsO69agvmJz_JtSxymZ_cIZehgHcxh-FKOi7y5Ak="
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D"
                className="d-block w-100"
                alt="................."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww"
                className="d-block w-100"
                alt="........."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {foodCat != [] ? (
          foodCat.map((data) => {
            
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem != [] ? (
                  foodItem
                    .filter((item) => (item.CategoryName === data.CategoryName)&&(item.name.toLowerCase().includes(search.toLowerCase())))
                    .map((filterItems) => {
                      return (
                        <div
                            key={filterItems._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Card
                        
                            foodItem={filterItems}
                            
                            options={filterItems.options[0]}
                          />
                        </div>
                      );
                    })
                ) : (
                  <div>Technical issue</div>
                )}
              </div>
            );
          })
        ) : (
          <div>Errorrr</div>
        )}
      </div>
    </div>
  );
}

export default Home;
