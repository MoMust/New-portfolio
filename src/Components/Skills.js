import React from 'react'
import '../Css/Skills.css'
const Skills = (props) => {
  return (
    <div className="category col-4 text-center">
      <div className="d-flex flex-column text-center">
        <div className="">{props.icon}</div>
        <div className="mt-3 mb-0">
            <h4 className="m-0">{props.title}</h4>
            <div className="line mb-3"></div>
        </div>
      </div>

      {props.list.map((item) => {
        return (
          <p className="item" key={item}>
            {item}
          </p>
        );
      })}
    </div>
  );
}

export default Skills