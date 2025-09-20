import React, { useEffect, useState } from 'react';
import Menu from './menu'
import {Car} from './car'
import filter from '../filter/filterCategorie'

function NavBar({status}) {

return (
    <nav className='navbar'>
        {status && <Menu></Menu>}
            <h1 className='title-store'>WILKER STORE</h1>
            <div className='listItem'>
        {status && (
            <ul>
                <ListItem item={"All"} category="all"/>
                <ListItem item={"Clothing"} category="Clothing"/>
                <ListItem item={"Electronics"} category="Electronics"/>
                <ListItem item={"Furniture"} category="Furniture"/>
                <ListItem item={"Others"} category="Others"></ListItem>
            </ul>
        )}
        </div>
        <Car></Car>
    </nav>
)
}


function ListItem(props) {
    return (
        <li className="dropdownItem">
            <button className='dropdownItem-button' onClick={() => filter(props.category)}>{props.item}</button>
        </li>
    )
}

export default NavBar
