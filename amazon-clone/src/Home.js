import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-carousel image-with-transparent-mask">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active ">
              <img
                class="d-block w-100 "
                src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
                alt="First slide"
              />
            </div>
            <div class="carousel-item ">
              <img
                class="d-block w-100 "
                src="https://m.media-amazon.com/images/I/71cp9PVuTfL._SX3000_.jpg"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item ">
              <img
                class="d-block w-100"
                src="https://m.media-amazon.com/images/I/71W14HNIbaL._SX3000_.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev carousel-control-position-fixed "
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next carousel-control-position-fixed"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
