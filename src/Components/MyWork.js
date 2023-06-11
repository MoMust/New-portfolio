import React from 'react'
import { useState} from 'react';
import '../Css/MyWork.css';
import doc1 from '../Images/doc1.png'
import doc2 from '../Images/doc2.png'
import lakarProject from '../Images/lakarDatabas.png';
import sportSkor from '../Images/sportSkor.png';
import SearchBar from './Repo';
import ImgModal from './ImageModal';
// import Projects from './Projects';

function MyWork() {

  const [imageModal, setImageModal] = useState('');


  console.log(imageModal)

    return (
      <div className="body-class-dark" id="myWork">
        <div className="container-mywork mt-0">
          <div className="row-custom-mywork">
            <div className="px-3 header-mywork mt-5 ">
              <h1 className=''>My projects</h1>
              <div className='line-smal'></div>
              <div className='pt-3'>
                <p>
                  Through my school time i've managed to work on a few things.
                </p>
              </div>
            </div>
          </div>
          {/* Part 1 */}
          <ImgModal
            img1={doc1}
            img2={doc2}
            setImageModal={setImageModal}
            imageModal={imageModal}
            title="THE DOCTORS CLOUD"
          />
          {/* Part 2 */}
          <ImgModal
            img1={lakarProject}
            img2={sportSkor}
            setImageModal={setImageModal}
            imageModal={imageModal}
            title="MediCare & Sport Fashion"
          />
          <div className="repo">
            <h1>Search in my repository</h1>
            <SearchBar />
          </div>

          <div className="row row-custom-mywork">
            <div className="content-mywork-mini col-lg-12">
              <div className="content-header-cv">
                <h1>Check out my CV</h1>
              </div>
              {/* <div className="content-cv">
                <iframe
                  src="https://drive.google.com/file/d/1Pczho48GStbiEXElM1HwFDFwLrONfvlq/preview"
                  allow="autoplay"
                  title='iframe'
                ></iframe>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
}

export default MyWork
