
import React, {useState, useEffect} from 'react'
import './ImageModal.css'
import ProjectContent from './ProjectContent.jsx'
const ImageModal = (props) => {
  // ANIMATION, CREATE COMPONENET
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  });

  return (
    <>
      <div className="row hidden row-custom-mywork">
        <div className="content-mywork col-lg-12">
          <ProjectContent
            setImageModal={props.setImageModal}
            img1={props.img1}
            img2={props.img2}
          />
          <ProjectContent
            setImageModal={props.setImageModal}
            img1={props.img3}
            img2={props.img4}
          />

          <div className="project-desc">
            <h2>{props.title}</h2>
            <div className="line-smal"></div>
            <p className="mt-3">{props.desc}</p>
            <div className="dev-list d-flex  gap-3">
              {props.list.map((item) => {
                return (
                  <p className="item ps-2 pe-2" key={item}>
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body border-0">
              <img src={props.imageModal}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};


export default ImageModal