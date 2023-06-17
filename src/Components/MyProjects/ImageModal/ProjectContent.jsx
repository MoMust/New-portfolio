import React from 'react'

const ProjectContent = ({setImageModal, img1, img2}) => {
  return (
    <div className="row row-work-images mt-5">
      <div
        className="content-work-img col-lg-6"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => setImageModal(img1)}
      >
        <img id="img1" src={img1} alt=""></img>
      </div>
      <div
        className="content-work-img col-lg-6"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => setImageModal(img2)}
      >
        <img id="img1" src={img2} alt=""></img>
      </div>
    </div>
  );
}

export default ProjectContent