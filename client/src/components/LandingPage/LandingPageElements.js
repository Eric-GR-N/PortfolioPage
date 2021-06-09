import styled from 'styled-components';
import {PageContainer} from '../../globalComponents';
import {Header, Paragraph} from '../../globalComponents';
import {Link} from 'react-scroll';
import { GrMenu } from 'react-icons/gr';
import { GrClose } from 'react-icons/gr';
import {AiFillHome} from 'react-icons/ai';
import { FiPhoneForwarded } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md'
import Background from '../../resources/background1.jpg';
import BackgroundMob from '../../resources/backgroundmob1.jpg';



export const LandingContainer = styled(PageContainer)`
display: flex;
flex-wrap: wrap;
justify-content: center;
`

export const UpperContainer = styled(PageContainer)`
position: relative;
justify-content: center;
align-items: center;
height: 70vh;

@media only screen and (max-width: 600px) {
    height: 100vh;
}
`

export const BottomContainer = styled(PageContainer)`
display: flex;
justify-content: center;
height: 30vh;
background-color: #1B2F33;
position: relative;

@media only screen and (max-width: 600px) {
    display: none;
}
`

export const MainWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
position: absolute;
width: 40%;

@media only screen and (max-width: 600px) {
    margin-bottom: 40%;
    width: 100%;
    justify-content: center;
}
`

export const MainHeader = styled.h1`
margin-bottom: 0.5em;
font-family: 'Montserrat', sans-serif;
color: #1B2F33;
font-size: 3rem;
text-align: center;
opacity: ${props => props.opacity};
transition: opacity 1s ease-in-out;
width: ${props => props.width};

@media only screen and (max-width: 600px) {
    font-size: 2rem;
}
`
export const MainText = styled.h1`
font-family: 'Montserrat', sans-serif;
color: #1B2F33;
font-size: 1.5rem;
@media only screen and (max-width: 600px) {
    font-size: 1rem;
}
`

export const NavBar = styled.nav`
transition: 0.6s ease-in-out;
display: flex;
position: absolute;
justify-content: center;
align-items: center;
left: ${props => props.menuOpen ? 0 : '-15%'};
width: 15%;
height: 100%;
z-index: 100;

@media only screen and (max-width: 600px) {
    display: none;
}
`

export const MobileNavBar = styled.nav`
display: none;
@media only screen and (max-width: 600px) {
    z-index: 100;
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease-in-out;
    height: 100%;
    background-color: rgba(255,255,255,0.98);
    width: 100%;
    left: ${props => props.menuOpen ? 0 : '-100%'};
}
`

export const Menu = styled.ul`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 50%;

@media only screen and (max-width: 600px) {

}
`

export const Item = styled.li`
padding: 0 2em;
`

export const NavLink= styled(Link)`
color: #1B2F33;
font-size: 1.3rem;
border-bottom: solid black 1px;
transition: 0.4s ease-in-out;
cursor: pointer;

@media only screen and (max-width: 600px) {
    border: none;
    font-size: 2rem;
}

&:hover{
    transition: 0.4s ease-in-out;
    padding: 0 1em;
}
`

export const Span = styled.span`
width: 0.8em;
height: 0.8em;
border-radius: 100%;
`
export const MainContainer = styled.div`
background-image: url(${Background});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
display: flex;
justify-content: center;
align-items: center;
border-radius: 25px;
height: 60vh;
width: 70%;
position: relative;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.356);
overflow: hidden;

@media only screen and (max-width: 600px) {
    height: 100vh;
    width: 100%;
    background-image: url(${BackgroundMob});
    border-radius: 0;
}
`

export const TitleParagraph = styled(Paragraph)`
margin: ${props => props.margin};
width: ${props => props.width};
color: #1B2F33;
font-size: 1.3rem;
text-align: center;
@media only screen and (max-width: 600px) {
    width: 90%;
}
`
export const MenuParagraph = styled.p`
top: 0;
left: 0;
margin-top: 1em;
margin-left: 5.3%;
font-size: 1.5rem;
position: absolute;
color: pink;
`

export const Burger = styled(GrMenu)`
min-height: 1.6em;
min-width: 1.6em;
color: #1B2F33;
z-index: 11;
cursor: pointer;
margin: 1em;

@media only screen and (max-width: 600px) {
    width: 1.8em;
    height: 1.8em;
    margin: 0.5em;
}

&:active{
    transition: 0.4s;
    transform: scale(0.5);
}
`

export const BurgerCross = styled(GrClose)`
min-height: 1.6em;
min-width: 1.6em;
color: #1B2F33;
z-index: 110;
cursor: pointer;
margin: 1em;

@media only screen and (max-width: 600px) {
    width: 1.8em;
    height: 1.8em;
    margin: 0.5em;
}

&:active{
    transition: 0.4s;
    transform: scale(0.5);
}
`

export const Divider = styled.div`
height: ${props => props.height};
border: solid 1px rgba(0,0,0, 0.4);
position: absolute;

@media only screen and (max-width: 600px) {
    height: 0;
    width: 75%;
    border: solid 0.4px rgba(0,0,0, 0.4);
}
`

export const ImageContainer = styled.div`
margin: 8%;
border-radius: 100%;
width: 15em;
height: 15em;
background-image: url(${props => props.img});
background-size: cover;
background-position: center;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.356);

@media only screen and (max-width: 600px) {
    margin-top: 12%;
}
`

export const MainContentContainer = styled.div`
display: flex;
position: relative;
align-items: center;
justify-content: center;
Background-color: rgba(255,255,255,0.95);
width: 100%;
height: 100%;

@media only screen and (max-width: 600px) {
    flex-direction: column;
}
`

export const InnerContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 40%;
flex-wrap: wrap;
align-content: center;
@media only screen and (max-width: 600px) {
    position: relative;
    height: 50%;
    width: 100%;
}
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
color: #1B2F33;
position: fixed;
width: 4em;
height: 4em;
right: 15%;
cursor: pointer;
z-index: 100;
@media only screen and (max-width: 600px) {
    position: absolute;
    right: 5%;
    top: 50%;
    z-index: 10;
}
`
export const ArrowLeft = styled(MdKeyboardArrowLeft)`
color: #1B2F33;
width: 4em;
height: 4em;
position: fixed;
left: 15%;
cursor: pointer;
z-index: 100;

@media only screen and (max-width: 600px) {
    top: 50%;
    position: absolute;
    left: 5%;
    z-index: 10;
}
`

export const ContactBox = styled.div`
display: flex;
align-items: center;
width: 80%;
margin: 1em;

@media only screen and (max-width: 600px) {
}
`

export const PhoneIcon = styled(FiPhoneForwarded)`
width: 1.3em;
height: 1.3em;
margin-right: 1em;
@media only screen and (max-width: 600px) {
    margin: 0;
}
`
export const MailIcon = styled(GoMail)`
width: 1.5em;
height: 1.5em;
margin-right: 0.8em;

@media only screen and (max-width: 600px) {
    margin: 0;
}
`

export const Footer = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
height: 100%;
`

export const FooterBox = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
width: 15%;
height: 90%;
position: relative;
`

export const FooterText = styled.p`
color: rgba(255,255,255, 0.8);
line-height: 1.5em;
font-size: 1.1rem;
text-align: center;
`

export const FooterTitle = styled.p`
padding: 0 8% 1% 8%;
color: rgba(255,255,255, 0.8);
letter-spacing: 2px;
font-size: 1.2rem;
text-align: center;
margin: 10% 0 10% 0;
border-bottom: solid rgba(255,255,255, 0.8) 1px;
`

export const Home = styled(AiFillHome)`
z-index: 100;
min-width: 1.6em;
min-height: 1.6em;
color: #1B2F33;
z-index: 11;
cursor: pointer;
margin-left: 90%;

@media only screen and (max-width: 600px) {
    margin: 80%;
}

&:active{
    transition: 0.4s;
    transform: scale(0.5);
}
`

export const MenuText = styled.p`
text-align: center;
color: black;
font-size: 1.3em;
letter-spacing: 2px;
@media only screen and (max-width: 600px) {
    display: none;
}
`

export const NavigationWrapper = styled.div`
z-index: 101;
display: flex;
align-items: center;
position: absolute;
width: 100%;
height: 7vh;
top: 0;

@media only screen and (max-width: 600px) {
}
`

export const InnerTextWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 80%;
width: 95%;

@media only screen and (max-width: 600px) {
    justify-content: start;
    margin-bottom: 5%;
}
`

