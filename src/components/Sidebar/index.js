import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='coffee' onClick={toggle}> Coffee</SidebarLink>
                    <SidebarLink to='grinds' onClick={toggle}> Grinds</SidebarLink>
                    <SidebarLink to='brews' onClick={toggle}> Brews</SidebarLink>

                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/drinks'> Drinks</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar