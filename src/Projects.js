import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div>
      <div id="projects" className="project">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>

          <div class="carousel-inner pt-xl-0 pt-5 mt-xl-4 mt-5">
            <div className="mt-md-0 pt-md-0 mt-sm-5 mt-0">
              <div class="carousel-item active">
                <img
                  src="polymer-1.png"
                  class="d-block w-100 img-fluid"
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h3
                    className="mb-3 clip "
                    style={{
                      color: "#4918BB",

                      textShadow: "1px 1px 1px black",
                    }}
                  >
                    Responsive Polymer search clone with React js
                  </h3>
                  <a
                    href="https://gleaming-crumble-697e1b.netlify.app/"
                    className="text-white text-decoration-none p-2 border-white border-dark rounded-1 me-5"
                    target="_blank"
                    style={{ backgroundColor: "#4918BB", display: "inline" }}
                  >
                    Deploy Link
                  </a>
                  <a
                    href="https://github.com/jothilakshmi22/polymer-search-clone"
                    className=" text-white text-decoration-none p-2 border-white border-dark rounded-1"
                    target="_blank"
                    style={{ backgroundColor: "#4918BB" }}
                  >
                    Source code
                  </a>
                </div>
              </div>

              <div class="carousel-item">
                <img
                  src="groco-1.png"
                  class="d-block w-100 img-fluid"
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h3
                    className="mb-3 clip2"
                    style={{
                      color: "#FD7504",

                      textShadow: "1px 1px 1px black",
                    }}
                  >
                    Responsive Groco with html,css and javascript
                  </h3>
                  <a
                    href="https://stirring-tulumba-8bcf66.netlify.app/"
                    className=" text-white text-decoration-none p-2 border-white border-dark rounded-1 me-5"
                    target="_blank"
                    style={{ backgroundColor: "#FD7504" }}
                  >
                    Deploy Link
                  </a>
                  <a
                    href="https://github.com/jothilakshmi22/groco-website"
                    className=" text-white text-decoration-none p-2 border-white border-dark rounded-1"
                    target="_blank"
                    style={{ backgroundColor: "#FD7504" }}
                  >
                    Source code
                  </a>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="spices.png"
                  class="d-block w-100 img-fluid"
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h3
                    className="mb-3 clip3"
                    style={{
                      color: "#28DC05",
                      textShadow: "1px 1px 1px black",
                    }}
                  >
                    Responsive spices with React js and Bootstrap
                  </h3>
                  <a
                    href="https://strong-kangaroo-7286c6.netlify.app/"
                    className="text-white text-decoration-none p-2 border-white border-dark rounded-1 me-5"
                    target="_blank"
                    style={{ backgroundColor: "#28DC05" }}
                  >
                    Deploy Link
                  </a>
                  <a
                    href="https://github.com/jothilakshmi22/spices"
                    className=" text-white text-decoration-none p-2 border-white border-dark rounded-1"
                    target="_blank"
                    style={{ backgroundColor: "#28DC05" }}
                  >
                    Source code
                  </a>
                </div>
              </div>
              <div class="carousel-item">
                <img src="aws.png" class="d-block w-100 img-fluid" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h3
                    className="mb-3 clip4 "
                    style={{
                      color: "red",
                      textShadow: "1px 1px 1px black",
                    }}
                  >
                    AWS polymer search UI with React js and Bootstrap
                  </h3>
                  <a
                    href="https://celadon-florentine-2323d2.netlify.app/"
                    className=" text-white text-decoration-none p-2 border-white border-dark rounded-1 me-5"
                    target="_blank"
                    style={{
                      backgroundColor: "red",
                    }}
                  >
                    Deploy Link
                  </a>
                  <a
                    href="https://github.com/jothilakshmi22/aws-polymer-search"
                    className=" text-white text-decoration-none p-2 border-white border-dark rounded-1"
                    target="_blank"
                    style={{ backgroundColor: "red" }}
                  >
                    Source code
                  </a>
                </div>
              </div>
              <div class="carousel-item">
                <img src="coffee2.png" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h3
                    className="mb-3 clip5"
                    style={{
                      color: "white",
                    }}
                  >
                    Responsive Coffee website using html css and js
                  </h3>
                  <a
                    href=" https://animated-madeleine-e0ebf7.netlify.app/"
                    className=" text-white text-decoration-none p-2 border-white border-dark rounded-1 me-5"
                    target="_blank"
                    style={{ backgroundColor: "black" }}
                  >
                    Deploy Link
                  </a>
                  <a
                    href="https://github.com/jothilakshmi22/coffee-website"
                    className=" text-white text-decoration-none p-2 border-white border-dark rounded-1"
                    target="_blank"
                    style={{ backgroundColor: "black" }}
                  >
                    Source code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bg bg-dark"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button "
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon  bg bg-dark"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
