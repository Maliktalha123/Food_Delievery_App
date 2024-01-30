import React from "react";

function Slider() {
  return (
    <div >
   <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner" id="carousel">
    <div className = "carousel-caption" style={{'zIndex':'2'}}>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success" style={{'backgroundColor':'greenyellow'}} type="submit">Search</button>
    </form>
       </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900×900/?pizza" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×900/?burger" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×900/?chicken" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}

export default Slider;
