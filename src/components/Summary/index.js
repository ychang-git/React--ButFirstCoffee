import React from 'react'
import Icon1 from '../../images/coffeebeans.jpg';
import Icon2 from '../../images/coffeeMethods.jpg';
import Icon3 from '../../images/coffeebrew.jpg';
import {
    SummaryContainer,
    SummaryH1,
    SummaryH2,
    SummaryWrapper,
    SummaryCard,
    SummaryIcon,
    SummaryP
} from './SummaryElements';
const Summary = () => {
    return (
        <SummaryContainer id="summary">
            <SummaryH1> In Just 3 Steps</SummaryH1>
            <SummaryWrapper>
                <SummaryCard>
                    <SummaryIcon src={Icon1}/>
                    <SummaryH2>Your Roast</SummaryH2>
                    <SummaryP> Your preference on Acidity, body and flavor.</SummaryP>
                </SummaryCard>
                <SummaryCard>
                <SummaryIcon src={Icon2}/>
                    <SummaryH2>Your Method</SummaryH2>
                    <SummaryP> French Press, Pour over or Machine Drip.</SummaryP>
                </SummaryCard>
                <SummaryCard>
                <SummaryIcon src={Icon3}/>
                    <SummaryH2>Your Brew</SummaryH2>
                    <SummaryP> Based on on your method.</SummaryP>
                </SummaryCard>
            </SummaryWrapper>
        </SummaryContainer>
    )
}

export default Summary
