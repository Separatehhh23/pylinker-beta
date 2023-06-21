"use client";

import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import { IoMdArrowDropleft, IoMdArrowDropright, IoMdCog, IoMdPerson } from "react-icons/io";

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function clacHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height + 24);
  }

  function DropdownItem(props) {
    return (
      <a 
      href="#" 
      className="menu-item" 
      onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>

        {props.children}

        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition 
      in={activeMenu === "main"} 
      unmountOnExit
      timeout={500}
      classNames="menu-primary"
      onEnter={clacHeight}
      >
        <div className="menu">
          <DropdownItem 
            leftIcon={<IoMdPerson />}>
              My profile
            </DropdownItem>
          <DropdownItem
            leftIcon={<IoMdCog />}
            rightIcon={<IoMdArrowDropright />}
            goToMenu="settings">
              Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition 
      in={activeMenu === "settings"} 
      unmountOnExit
      timeout={500}
      classNames="menu-secondary"
      onEnter={clacHeight}
      >
        <div className="menu">
          <DropdownItem 
            leftIcon={<IoMdArrowDropleft />}
            goToMenu="main">
          </DropdownItem>
          <DropdownItem
            leftIcon={<IoMdCog />}>
              Settings
          </DropdownItem>
          <DropdownItem
            leftIcon={<IoMdCog />}>
              Toggle dark mode
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

function NavBar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        { props.children }
      </ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={
        () => {
          setOpen(!open);
          {props.onClick};
        }
      }>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

export default NavBar;
export { NavItem, DropdownMenu };
