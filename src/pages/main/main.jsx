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
import TraditionsByFilter from '../../TraditionsByFilter/TraditionsByFilter'
import { Navbar } from '../../components/navbar'





const buttons = [
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
const mainItems = [
  {
    key: uuidv4(),
    label: <TraditionsByFilter />,
    type: "traditions"
  },
  {
    key: uuidv4(),
    label: <Pictures />,
    type: "pictures"
  },
  {
    key: uuidv4(),
    label: <Faq />,
    type: "faq"
  },
];

const Main = () => {
  const [items, setItems] = useState(() => mainItems);
  const [filterType, setFilterType] = useState("");
  const handleFilterItems = (type) => {
    setFilterType(type);
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
      <header className="header container mb-1">
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={icKz} alt="" className='img_icon' />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <div className="btn-group">
                    
                  </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {buttons.map((item) => (
                              <li className="nav-item">
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
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                        Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
      </header>

      <div className="container">
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
      </div>
      </>
  )
}

export default Main