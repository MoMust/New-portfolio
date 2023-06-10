import React from 'react'
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
            >
              <img id="img1" src={props.img} alt=""></img>
            </div>
            {/* <div className="content-work-img col-lg-6">
              <img id="img1" src={doc2} alt=""></img>
            </div> */}
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
        <div className="modal-lg-centered">
          <div className="modal-content">
            <div className="modal-header">
              
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img src={props.img}></img>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageModal