
function Projects(
  setBigImage1,
  part1SizeImage1,
  part1SizeImage2,
  makeCursor2,
  MakebigImage,
  doc1,
  doc2
) {
  return (
    <div className="row row-custom-mywork">
      <div className="content-mywork col-lg-12">
        <div className="project-names">
          <h3>Project DOC</h3>
        </div>

        <div
          style={makeCursor2}
          className="row row-work-images mt-5"
          onClick={() => setBigImage1((MakebigImage) => !MakebigImage)}
        >
          <div className="content-work-img col-lg-6">
            <img style={part1SizeImage1} id="img1" src={doc1}></img>
          </div>
          <div className="content-work-img col-lg-6">
            <img style={part1SizeImage2} id="img1" src={doc2}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
