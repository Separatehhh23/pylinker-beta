import React from 'react';
import NavBar, { DropdownMenu, NavItem } from 'c/NavBar';

import { IoMdAdd, IoMdArrowDropdown, IoMdChatbubbles, IoMdNotificationsOutline } from 'react-icons/io';

function App() {
    return (
        <NavBar>
            <NavItem icon={<IoMdNotificationsOutline />} />
            <NavItem icon={<IoMdAdd />} />
            <NavItem icon={<IoMdChatbubbles />} />

            <NavItem icon={<IoMdArrowDropdown />}>
                
                <DropdownMenu />

            </NavItem>
        </NavBar>
    );
}

export default App;
