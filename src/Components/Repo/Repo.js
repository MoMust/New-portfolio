import React from "react";
import { useState } from "react";
import axios from "axios";
import RepoResult from "./RepoResult.js";

function Repo() {
  // const [searchValue, setSearchValue ] = useState('')
  const [repos, setRepos] = useState([]);

  // const handleChange = (e) => {
  //     setSearchValue(e.target.value);
  // }

  const handleClick = async () => {
    try {
      const result = await axios(`https://api.github.com/users/Momust/repos`);
      setRepos(result);
      // ${searchValue}
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* For search */}
      {/* <input type='text' placeholder='Search for BigBits8' value={searchValue} onChange={handleChange}/> */}
      <div className="text-center mt-4">
        <button onClick={handleClick} type="">
          Get
        </button>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <RepoResult repos={repos} />
      </div>
    </div>
  );
}

export default Repo;
