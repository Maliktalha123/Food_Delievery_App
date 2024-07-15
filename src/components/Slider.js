import React from "react";

function Slider() {
  return (
    <div >
   <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner" id="carousel">
    <div className = "carousel-caption" style={{'zIndex':'2'}}>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" style={{'backgroundColor':'greenyellow'}} type="submit">Search</button>
    </form>
       </div>
    <div className="carousel-item active">
      <img src="https://media.istockphoto.com/id/1779137593/photo/crispy-juicy-and-tender-chicken-broast%C2%A0served-with-french-fries-is-the-ideal-snack-plate.webp?b=1&s=170667a&w=0&k=20&c=F-RmsO69agvmJz_JtSxymZ_cIZehgHcxh-FKOi7y5Ak=" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt="................." />
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww" className="d-block w-100" alt="........." />
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
