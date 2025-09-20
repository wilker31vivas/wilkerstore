import React, { useEffect, useState } from 'react';
import Menu from './menu'
import {Car} from './car'
import filter from '../filter/filterCategorie'

function NavBar({status}) {

    useEffect(()=>{
        console.log(status)
    },[status])

return (
    <nav className='navbar'>
        {status && <Menu></Menu>}
            <h1 className='title-store'>WILKER STORE</h1>
            <div className='listItem'>
        {status && (
            <ul>
                <ListItem item={"Todo"} categorie="all"/>
                <ListItem item={"Ropa"} categorie="Ropa"/>
                <ListItem item={"Electronicos"} categorie="Electronicos"/>
                <ListItem item={"Muebles"} categorie="Muebles"/>
                <ListItem item={"Otros"} categorie="Otros"></ListItem>
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
            <button className='dropdownItem-button' onClick={() => filter(props.categorie)}>{props.item}</button>
        </li>
    )
}

export default NavBar
