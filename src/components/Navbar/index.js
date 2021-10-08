import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll } from 'react-scroll';
import {
    Nav, 
    NavbarContainer,
    NavLogo, 
    MobileIcon,
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>But First, Coffee</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks 
                        to='coffee'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >Coffee</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to='Methods'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >Methods</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to='brews'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >Brews</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/drinks">Drinks</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    );
}

export default Navbar;
