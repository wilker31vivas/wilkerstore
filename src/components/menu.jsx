import React, { useState, useEffect, useRef } from 'react';
import filter from '../filter/filter'

function Menu() {
    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });

    return (
        <div className='menu-container' ref={menuRef}>
            <div className='menu-trigger' onClick={() => { setOpen(!open) }}>
                <img src="./img/bars-solid.svg" alt="" className='navbar-menu dropbtn' />
            </div>

            <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
                <h3 className='dropdown-title'>Categories</h3>
                <ul>
                    <DropdownItem item={"Tudos"} categorie="all" />
                    <DropdownItem item={"Feminino"} categorie="femenino" />
                    <DropdownItem item={"Calcados"} categorie="calcados" />
                    <DropdownItem item={"Jeans"} categorie="jeans" />
                    <DropdownItem item={"Acessorios"} categorie="acessorios" />
                    <DropdownItem item={"Infatil"} categorie="infantil" />
                    <DropdownItem item={"Masculino"} categorie="masculino" />
                </ul>
            </div>
        </div>
    )
}

function DropdownItem(props) {
    return (
        <li className="dropdownItem">
            <button className='dropdownItem-button' onClick={() => filter(props.categorie)}>{props.item}</button>
        </li>
    )
}

export default Menu