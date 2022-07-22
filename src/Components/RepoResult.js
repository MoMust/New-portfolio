import React from 'react';

const SearchResult = (props) => {
    const {repos} = props;
    console.log('repos is:', repos.data);

    const reposList = repos.length !== 0 ? (
        repos.data.map((item) => <li key={item.id}><a href={item.html_url}>{item.name}</a></li>)
        ) : (
        <li>Hit search to get projects</li>
        );
  return (
      <ul>{reposList}</ul>
  )
};

export default SearchResult;
