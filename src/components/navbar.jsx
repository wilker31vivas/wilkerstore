import React, { useState, useEffect, useRef } from 'react';
import Menu from './menu'
import {Car} from './car'
import filter from '../filter/filter'

function NavBar() {

return (
    <nav className='navbar'>
        <Menu></Menu>

        <div className='navbar-left'>
            <h1 className='title-store'>WILKER STORE</h1>
        </div>

        <div className='listItem'>
            <ul>
                <ListItem item={"Tudos"} categorie="all"/>
                <ListItem item={"Feminino"} categorie="femenino"/>
                <ListItem item={"Calcados"} categorie="calcados"/>
                <ListItem item={"Jeans"} categorie="jeans"/>
                <ListItem item={"Acessorios"} categorie="acessorios"/>
                <ListItem item={"Infatil"} categorie="infantil"/>
                <ListItem item={"Masculino"} categorie="masculino"/>
            </ul>
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
