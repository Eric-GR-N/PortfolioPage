import React, { useState, useEffect } from 'react'
import { Burger, Divider, Item, LandingContainer, Logo, MenuContainer, MainHeader, Menu, NavBar, NavLink, Span, TitleParagraph, UpperContainer, BottomContainer, MainContainer, ImageContainer, MainContentContainer, InnerContainer, ArrowLeft, ArrowRight, ProjectWrapper, BurgerCross, MenuParagraph } from './LandingPageElements';
import Portfolio from '../../resources/logo.PNG';
import { Note } from '../../globalComponents';

const projects = [{
    img: 'Home Page Pic',
    titleText: 'Home Page',
    text: 'A web app for home automation and integration of the Internet Of Things for a simpler everyday life',
},
{
    img: 'Pilsner Protokollet Pic',
    titleText: 'PilsnerProtokollet',
    text: 'PilsnerProtokollet text',
},
{
    img: 'Jowy Pic',
    titleText: 'Jowy',
    text: 'Jowy Text',
}
];

const LandingPage = () => {
    const [menuChoice, setMenuChoice] = useState();
    const [project, setProject] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);


    useEffect(()=>{
        renderContent();
    },[project, menuChoice])

    const isOpen = () =>{
        setMenuOpen(!menuOpen);
    }

    const setType = (e)=>{
        setMenuChoice(e.target.innerText);
    }

    const slideRight = ()=>{
        if(project < 2){
            setProject(project + 1);
        }
    }

    const slideLeft = ()=>{
        if(project !== 0){
            setProject(project - 1);
        }
    }


    const renderContent = ()=>{

        if(menuChoice === 'Projects'){
            const obj = projects[project];

            return (
                <MainContentContainer>
                <ArrowLeft onClick={slideLeft}/>
                <InnerContainer>
                    <Note>{obj.img}</Note>
                </InnerContainer>
                <InnerContainer>
                    <TitleParagraph width="80%">{obj.titleText}</TitleParagraph>
                    <TitleParagraph margin="8%" width="80%">{obj.text}</TitleParagraph>
                </InnerContainer>
                <ArrowRight onClick={slideRight}/>
            </MainContentContainer>
            )
        }else if(menuChoice === 'About Me'){
            return (
                <MainContentContainer>
                <InnerContainer>
                    <ImageContainer/>
                </InnerContainer>
                <Divider height='60%'/>
                <InnerContainer>
                    <TitleParagraph width="80%">Eric Nordgren</TitleParagraph>
                    <TitleParagraph margin="8%" width="80%">A newly graduated student with a strong passion for Frontend Development. At the moment i'm combining vacation with deep diving into React.js</TitleParagraph>
                    <TitleParagraph>- A perfect summer</TitleParagraph>
                </InnerContainer>
            </MainContentContainer>
            )
        }
    }


    return (
        <LandingContainer>
        <UpperContainer>
        {menuOpen ? <BurgerCross onClick={isOpen}/> : <Burger onClick={isOpen}/>}
        <NavBar menuOpen={menuOpen}>
                <Menu>
                    <Item>
                    <NavLink onClick={e => setType(e)}>About Me</NavLink>
                    </Item>
                    <Item>
                    <NavLink onClick={e => setType(e)}>Projects</NavLink>
                    </Item>
                    <Item>
                    <NavLink onClick={e => setType(e)}>Contact</NavLink>
                    </Item>
                </Menu>
        </NavBar>


                <MainContainer>
                {renderContent()}
                </MainContainer>
                </UpperContainer>
                <BottomContainer>

                </BottomContainer>
        </LandingContainer>
    )
}

export default LandingPage
