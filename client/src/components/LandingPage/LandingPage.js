import React, { useState, useEffect } from 'react'
import { Burger, Divider, Item, LandingContainer, Menu, NavBar, NavLink, Span, TitleParagraph, UpperContainer, BottomContainer, MainContainer, ImageContainer, MainContentContainer, InnerContainer, ArrowLeft, ArrowRight, ProjectWrapper, BurgerCross, MenuParagraph, ContactBox, PhoneIcon, MailIcon } from './LandingPageElements';
import { Note } from '../../globalComponents';
import Portrait from '../../resources/me.jpg';
import Contact from '../../resources/contact.jpg';
import HomePage from '../../resources/HomePage.png';
import PilsnerProtokollet from '../../resources/pilsner.png';

const projects = [{
    img: HomePage,
    width: '23em',
    height: '16em',
    titleText: 'Home Page',
    text: 'A web app for home automation and integration of the Internet Of Things for a simpler everyday life. The App is developed with React.js on the frontend and Node.js on the backend',
},
{
    img: PilsnerProtokollet,
    width: '15em',
    height: '24em',
    titleText: 'PilsnerProtokollet',
    text: 'This one is mostly just for laughs. My friends who has a passion for beer testing needed a fullstack mobile friendly page that is able to communicate with a MySQL database for rating and fetching aggregated data',
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
        if(project < 1){
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
                    <Note img={obj.img} width={obj.width} height={obj.height}/>
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
                    <ImageContainer img={Portrait}/>
                </InnerContainer>
                <Divider height='60%'/>
                <InnerContainer>
                    <TitleParagraph width="80%">Eric Nordgren</TitleParagraph>
                    <TitleParagraph margin="8%" width="80%">A newly graduated student with a strong passion for Frontend Development. At the moment i'm combining vacation with deep diving into React.js</TitleParagraph>
                    <TitleParagraph>- A perfect summer</TitleParagraph>
                </InnerContainer>
            </MainContentContainer>
            )
        }else if(menuChoice === 'Contact'){
            return (
                <MainContentContainer>
                <InnerContainer>
                    <ImageContainer img={Contact}/>
                </InnerContainer>
                <Divider height='60%'/>
                <InnerContainer>
                    <ContactBox>
                        <PhoneIcon /><TitleParagraph>076 325 1816</TitleParagraph>
                    </ContactBox>
                    <ContactBox>
                        <MailIcon /><TitleParagraph>eric.r.nordgren@gmail.com</TitleParagraph>
                    </ContactBox>
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
