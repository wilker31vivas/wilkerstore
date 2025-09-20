import React, { useState, useEffect, useRef } from 'react';
import filter from '../filter/filterCategorie'

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
                <img src="../icons/bars-solid.svg" alt="" className={`navbar-menu ${open ? 'active' : 'inactive'}`} />
            </div>

            <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
                <h3 className='dropdown-title'>Categories</h3>
                <ul>
                    <DropdownItem item={"All"} category="all"/>
                    <DropdownItem item={"Clothing"} category="Clothing"/>
                    <DropdownItem item={"Electronics"} category="Electronics"/>
                    <DropdownItem item={"Furniture"} category="Furniture"/>
                    <DropdownItem item={"Others"} category="Others"/>
                </ul>
            </div>
        </div>
    )
}

function DropdownItem(props) {
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
        <li className="dropdownItem" onClick={() => filter(props.category)} ref={menuRef} >
            <div onClick={() => { setOpen(!open) }}>
                <button className='dropdownItem-button' >{props.item}</button>
                <img alt="" className="cart-shopping-img" src={`${open ? './icons/caret-right-solid-white.svg' : './icons/caret-right-solid-black.svg'}`} />
            </div>
        </li>
    )
}

export default Menu