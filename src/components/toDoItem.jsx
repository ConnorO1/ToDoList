import React, { useState } from "react";

function List(props) {

    return (
        <li
            onClick={() => {
                props.onChecked(props.id)
                }}>
            {props.contents}
        </li>
    )
};

export default List;