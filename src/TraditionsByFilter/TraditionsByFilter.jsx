import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { Bala } from '../components/bala/bala';
import { Faq } from '../components/faq/faq';
import Jasospirim from '../components/Jasospirim/Jasospirim';
import { Navbar } from '../components/navbar';
import Pictures from '../components/pictures/pictures';
import Qart from '../components/Qart/Qart';
import Traditions from '../components/traditions/traditions';



const buttons = [
    {
      type: "traditions",
      label: "Bala",
    },
    {
      type: "pictures",
      label: "Jasospirim",
    },
    {
      type: "faq",
      label: "Qart",
    },
  ];
  const toDoItems = [
    {
      key: uuidv4(),
      label: <Bala />,
      type: "traditions"
    },
    {
      key: uuidv4(),
      label: <Jasospirim />,
      type: "pictures"
    },
    {
      key: uuidv4(),
      label: <Qart />,
      type: "faq"
    },
  ];
  
  function TraditionsByFilter() {

    const [isActive, setIsActive] = useState('false')

    const [items, setItems] = useState(() => toDoItems);
    const [filterType, setFilterType] = useState("");
    const handleFilterItems = (type) => {
      setFilterType(type);
      setIsActive(!isActive);
    };
  
  const filteredItems =
    !filterType || filterType === "traditions"
      ? items.filter((item) => item.type === "traditions")
      : filterType === "pictures"
      ? items.filter((item) => item.type === "pictures")
      : filterType === "faq"
      ? items.filter((item) => item.type === "faq")
      : items;

  return (
    <>
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                {buttons.map((item) => (
                    <li className={`nav-item ${isActive ? 'active' : ''}`}>
                        <a
                        aria-current="page" 
                        href="#"
                        onClick={() => handleFilterItems(item.type)}
                        key={item.type}
                        type="button"
                        className="nav-link"
                        >
                        {item.label}
                        </a>
                    </li>
                ))}
                {/* {buttons.map((item) => (
                <span
                    className="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                    onClick={() => handleFilterItems(item.type)}
                >
                    {item.label}
                </span>
                ))} */}
            </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
            {filteredItems.length > 0 &&
                filteredItems.map((item) => (
                <li key={item.key} className="list-group-item">
                    <span className={'todo-list-item'}>
                    <span
                        className="todo-list-item-label"
                    >
                        {item.label}
                    </span>
                    </span>
                </li>
            ))}
            {/* <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            >
            ...
            </div> */}
        </div>
        {/* <div className="container">
            <div>
            <ul className="list-group todo-list">
            {filteredItems.length > 0 &&
                filteredItems.map((item) => (
                <li key={item.key} className="list-group-item">
                    <span className={'todo-list-item'}>
                    <span
                        className="todo-list-item-label"
                    >
                        {item.label}
                    </span>
                    </span>
                </li>
                ))}
            </ul>
            </div>
        </div> */}
    </>
  )
}

export default TraditionsByFilter