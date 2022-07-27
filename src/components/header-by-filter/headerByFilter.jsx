import React from 'react'
import { Header } from '../../components/header/header'
import Pictures from '../../components/pictures/pictures'
import { Faq } from '../../components/faq/faq'
import Traditions from '../../components/traditions/traditions'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import './main.css'
import icKz from '../../components/header/assets/ic_kz.png'
import { useState } from 'react'
import Promo from '../promo/promo'
import { v4 as uuidv4 } from "uuid";



const buttons = [
  {
    type: "all",
    label: "All",
  },
  {
    type: "traditions",
    label: "Traditions",
  },
  {
    type: "pictures",
    label: "Pictures",
  },
  {
    type: "faq",
    label: "FAQ",
  },
];
const toDoItems = [
  {
    key: uuidv4(),
    label: "Have funny day",
  },
  {
    key: uuidv4(),
    label: "Spread Empathy",
  },
  {
    key: uuidv4(),
    label: "Generate Value",
  },
  {
    key: uuidv4(),
    label: "Traditions",
    type: "traditions"
  },
  {
    key: uuidv4(),
    label: "Pictures",
    type: "pictures"
  },
  {
    key: uuidv4(),
    label: "Faq",
    type: "faq"
  },
];

const HeaderByFilter = () => {
  const [items, setItems] = useState(() => toDoItems);
  const [filterType, setFilterType] = useState("");
  const handleFilterItems = (type) => {
    setFilterType(type);
  };

const filteredItems =
  !filterType || filterType === "all"
    ? items
    : filterType === "traditions"
    ? items.filter((item) => item.type === "traditions")
    : filterType === "pictures"
    ? items.filter((item) => item.type === "pictures")
    : filterType === "faq"
    ? items.filter((item) => item.type === "faq")
    : items;



const handleItemImportant = ({key}) => {
  const itemIndex = items.findIndex((item) => item.key === key);
  const oldItem = items[itemIndex];
  const newItem = { ...oldItem, important: !oldItem.important };
  const leftSideOfAnArray = items.slice(0, itemIndex);
  const rightSideOfAnArray = items.slice(itemIndex + 1, items.length);
  setItems([...leftSideOfAnArray, newItem, ...rightSideOfAnArray]);
};

const handleItemDelete = ({key}) => {
  const itemIndex = items.findIndex((item) => item.key === key);
  const deletedItem = items[itemIndex];
  const leftSideOfAnArray = items.slice(0, itemIndex);
  const rightSideOfAnArray = items.slice(itemIndex + 1, items.length);
  setItems([...leftSideOfAnArray, ...rightSideOfAnArray]);
};

const handleItemDone = ({ key }) => {
  setItems((prevItems) =>
    prevItems.map((item) => {
      if (item.key === key) {
        return { ...item, done: !item.done };
      } else return item;
    })
  );
};

  return (
    <>
      <div className="container">
        <div className="btn-group">
          {buttons.map((item) => (
            <button
              onClick={() => handleFilterItems(item.type)}
              key={item.type}
              type="button"
              className={`btn btn-${
                filterType !== item.type ? "outline-" : ""
              }info`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div>
          <ul className="list-group todo-list">
          {filteredItems.length > 0 &&
            filteredItems.map((item) => (
              <li key={item.key} className="list-group-item">
                <span className={`todo-list-item${item.done ? " done" : ""} ${item.important ? " important" : ""}`}>
                  <span
                    className="todo-list-item-label"
                    onClick={() => handleItemDone(item)}
                  >
                    {item.label}
                  </span>

                  <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={() => handleItemImportant(item)}
                  >
                    <i className="fa fa-exclamation" />
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={() => handleItemDelete(item)}
                  >
                    <i className="fa fa-trash-o" />
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default HeaderByFilter