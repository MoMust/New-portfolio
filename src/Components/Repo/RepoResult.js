import React from 'react';
import './RepoResult.css'
const SearchResult = (props) => {
    const {repos} = props;
    // console.log('repos is:', repos.data);

    const reposList =
      repos.length !== 0 ? (
        repos.data.map((item) => (
          <li key={item.id}>
            <a className="item" target="_blank" href={item.html_url}>
              {item.name}
            </a>
          </li>
        ))
      ) : (
        <li>Hit search to get projects</li>
      );
  return (
      <ul className='d-flex flex-xl-row flex-lg-row flex-md-column flex-sm-column flex-md-column flex-column gap-3'>{reposList}</ul>
  )
};

export default SearchResult;
