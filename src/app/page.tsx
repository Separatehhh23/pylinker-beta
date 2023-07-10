import NavBar, { DropdownMenu, NavItem } from 'c/NavBar';
import Background from 'c/Background';

import { IoMdAdd, IoMdArrowDropdown, IoMdChatbubbles, IoMdNotificationsOutline } from 'react-icons/io';

function App() {
    return (
        <div className='h-screen w-screen'>
            <NavBar>
                <NavItem icon={<IoMdNotificationsOutline />} />
                <NavItem icon={<IoMdAdd />} />
                <NavItem icon={<IoMdChatbubbles />} />
                <NavItem icon={<IoMdArrowDropdown />}>
                    <DropdownMenu />
                </NavItem>
            </NavBar>

            <Background />
        </div>
    );
}

export default App;
