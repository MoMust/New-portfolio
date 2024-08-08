import React from "react";
import "./Skills.css";
const Skills = (props) => {
  return (
    <div className="category col-4 text-center">
      <div className="d-flex flex-column text-center">
        <div className="">{props.icon}</div>
        <a className="mt-3 menu mb-0">
          <h4 className="m-0 menu-title">{props.title}</h4>
          <div className="line mb-3"></div>
          <ul className="menu-dropdown">
            {props.list.map((item) => {
              return (
                <li className="item" key={item}>
                  {item}
                </li>
              );
            })}
          </ul>
        </a>
      </div>
    </div>
  );
};

export default Skills;
