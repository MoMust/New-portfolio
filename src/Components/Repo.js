import React from 'react';
import { useState} from 'react'
import axios from 'axios';
import SearchResult from './RepoResult';

function SearchBar() {

    
    const [searchValue, setSearchValue ] = useState('')
    const [repos, setRepos] = useState([]);

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleClick = async () =>{
        console.log(searchValue);

          try{
            const result = await axios(
              `https://api.github.com/users/BigBits8/repos`
            );
            setRepos(result);
            // ${searchValue}
          }catch(err){
        console.log(err)
    }
    }

  
  return (
      <div>
        {/* For search */}
          {/* <input type='text' placeholder='Search for BigBits8' value={searchValue} onChange={handleChange}/> */}
          <button onClick={handleClick} type=''>Search</button>
          <SearchResult repos ={repos}/>
      </div>
  )
}

export default SearchBar;
