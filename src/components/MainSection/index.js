import React, {useState} from 'react';
import Video from '../../video/coffeevid.mp4';
import {Button} from '../ButtonElements';
import {MainContainer, MainBg, VideoBg, MainContent, MainH1, MainP, MainBtnWrapper, ArrowForward, ArrowRight } from './MainElements';

const MainSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <MainContainer>
            <MainBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </MainBg>
            <MainContent>
                <MainH1> Your Coffee 101 Guide</MainH1>
                <MainP>Tired of long lines for a cup of coffee?
                </MainP>
                <MainP>
                Make it at home! 
                </MainP>
                <MainBtnWrapper>
                    <Button to='drinks' onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get started {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </MainBtnWrapper>
            </MainContent>
        </MainContainer>
    )
}

export default MainSection
