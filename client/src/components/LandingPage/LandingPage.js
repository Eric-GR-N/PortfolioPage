import React, { useState, useEffect, useTransition } from 'react'
import { Burger, Divider, Item, LandingContainer, Menu, NavBar, NavLink,
TitleParagraph, UpperContainer, BottomContainer, MainContainer, ImageContainer,
MainContentContainer, InnerContainer, ArrowLeft, ArrowRight,
BurgerCross, ContactBox, PhoneIcon, MailIcon, Footer, FooterBox,
FooterText, FooterTitle, Home, MainHeader, MainText, MainWrapper, MenuText, NavigationWrapper, InnerTextWrapper, MobileNavBar } from './LandingPageElements';
import { Note } from '../../globalComponents';
import Portrait from '../../resources/me.jpg';
import Contact from '../../resources/contact.jpg';
import HomePage from '../../resources/HomePage.png';
import PilsnerProtokollet from '../../resources/pilsner.png';
import PilsnerMob from '../../resources/pilsner3.PNG';

const projects = [{
    img: HomePage,
    mobileImg: HomePage,
    width: '23em',
    height: '16em',
    titleText: 'A Smarter Home',
    text: 'A web app for home automation and integration of the Internet Of Things for a simpler everyday life. The App is developed with React.js on the frontend and Node.js on the backend',
},
{
    img: PilsnerProtokollet,
    mobileImg: PilsnerMob,
    width: '15em',
    height: '24em',
    titleText: 'PilsnerProtokollet',
    text: 'This one is mostly just for laughs. My friends have a passion for beer testing and needed a fullstack mobile friendly page that is able to communicate with a MySQL database for rating and fetching aggregated data',
}
];

const LandingPage = () => {
    const [menuChoice, setMenuChoice] = useState('Home');
    const [project, setProject] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const isOpen = () =>{
        setMenuOpen(!menuOpen);
    }

    const setType = (e)=>{
        setMenuChoice(e.target.innerText ? e.target.innerText : 'Home');
    }

    const setTypeMobile = (e)=>{
        setMenuChoice(e.target.innerText ? e.target.innerText : 'Home');
        setMenuOpen(!menuOpen);
    }

    const Refresh = ()=>{
        setMenuChoice('Home');
        setMenuOpen(false);
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
                    <Note img={obj.img} mobileImg={obj.mobileImg} width={obj.width} height={obj.height}/>
                </InnerContainer>
                <InnerContainer>
                    <InnerTextWrapper>
                        <TitleParagraph width="80%">{obj.titleText}</TitleParagraph>
                        <TitleParagraph margin="8%" width="80%">{obj.text}</TitleParagraph>
                    </InnerTextWrapper>
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
                        <InnerTextWrapper>
                            <TitleParagraph width="80%">Eric Nordgren</TitleParagraph>
                            <TitleParagraph margin="8%" width="80%">A newly graduated student with a strong passion for frontend development.</TitleParagraph>
                        </InnerTextWrapper>
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
                <InnerTextWrapper>
                    <ContactBox>
                        <PhoneIcon /><TitleParagraph>076 325 18 16</TitleParagraph>
                    </ContactBox>
                    <ContactBox>
                        <MailIcon /><TitleParagraph>eric.r.nordgren@gmail.com</TitleParagraph>
                    </ContactBox>
                    </InnerTextWrapper>
                </InnerContainer>
            </MainContentContainer>
            )
        }
    }


    return (
        <LandingContainer>
        <UpperContainer>
        <NavigationWrapper>
        {menuOpen ? <BurgerCross onClick={isOpen}/> : <Burger onClick={isOpen}/>}
        <MenuText>Menu</MenuText>
        <Home onClick={Refresh}/>
        </NavigationWrapper>
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

        <MobileNavBar menuOpen={menuOpen}>
                <Menu>
                    <Item>
                    <NavLink onClick={e => setTypeMobile(e)}>About Me</NavLink>
                    </Item>
                    <Item>
                    <NavLink onClick={e => setTypeMobile(e)}>Projects</NavLink>
                    </Item>
                    <Item>
                    <NavLink onClick={e => setTypeMobile(e)}>Contact</NavLink>
                    </Item>
                </Menu>
        </MobileNavBar>


                <MainContainer>
                {menuChoice === 'Home' && <MainWrapper>
                <MainHeader>Eric Nordgren</MainHeader>
                <MainText>Software Developer</MainText>
                </MainWrapper>}
                
                {renderContent()}
                </MainContainer>
                </UpperContainer>
                <BottomContainer>
                <Footer>
                    <FooterBox>
                        <FooterTitle>Top Skills</FooterTitle>
                        <FooterText>
                        React
                        <br/>
                        SQL
                        <br/>
                        Styled Components
                        <br/>
                        HTML & CSS
                        </FooterText>
                    </FooterBox>
                    <FooterBox>
                        <FooterTitle>Up To</FooterTitle>
                        <FooterText>Currently planning and brainstorming a website design for for a friend and up and coming DJ - Jowy</FooterText>
                    </FooterBox>
                    <FooterBox>
                        <FooterTitle>Goal</FooterTitle>
                        <FooterText>To become a Fullstack Developer with deep understanding of the whole process - Starting from the front</FooterText>
                    </FooterBox>
                </Footer>
                </BottomContainer>
        </LandingContainer>
    )
}

export default LandingPage
