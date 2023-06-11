
import React, {useState} from 'react'
import '../Css/ImageModal.css'
const ImageModal = (props) => {



  return (
    <>
      <div className="row row-custom-mywork">
        <div className="content-mywork col-lg-12">
          <div className="project-names">
            <h3>{props.title}</h3>
         </div>

          <div className="row row-work-images mt-5">
            <div
              className="content-work-img col-lg-6"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"

              onClick={() => props.setImageModal(props.img1)}
            >
              <img id="img1" src={props.img1} alt=""></img>
            </div>
            <div
              className="content-work-img col-lg-6"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => props.setImageModal(props.img2)}
            >
              <img id="img1" src={props.img2} alt=""></img>
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