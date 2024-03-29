import React from 'react'
import './ImageModal.css'
import ProjectContent from './ProjectContent.jsx'

const ImageModal = (props) => {

  return (
    <>
      <div className="row row-custom-mywork">
        <div className="content-mywork col-lg-11">
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
            <div className="dev-list">
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
              <img src={props.imageModal} alt=''></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};


export default ImageModal