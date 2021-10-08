import React, {useState} from 'react';
import InfoSection from '../components/InfoSection';
import MainSection from '../components/MainSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { typesObjOne, typesObjTwo, typesObjThree} from '../components/InfoSection/Data';
import Summary from '../components/Summary';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar  toggle={toggle} />
            <MainSection />
            <InfoSection {...typesObjOne}/>
            <InfoSection {...typesObjTwo}/>
            <InfoSection {...typesObjThree}/>
            <Summary />
            <Footer/>
        </>
    );
};

export default Home;
