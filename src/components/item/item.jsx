import React from 'react'
import { v4 as uuidv4 } from "uuid";

function Item({}) {
    const key = uuidv4();
  return (
    <div
        className="tab-pane fade"
        id={key}
        role="tabpanel"
        aria-labelledby="nav-home-tab"
        tabIndex={0}
    >
        Content
    </div>
  )
}

export default Item