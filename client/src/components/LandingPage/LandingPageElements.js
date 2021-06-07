import styled from 'styled-components';
import {PageContainer} from '../../globalComponents';
import {Header, Paragraph} from '../../globalComponents';
import {Link} from 'react-scroll';
import { GrMenu } from 'react-icons/gr';
import { GrClose } from 'react-icons/gr';
import { FiPhoneForwarded } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md'
import Background from '../../resources/background1.jpg';



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
`

export const BottomContainer = styled(PageContainer)`
height: 30vh;
background-color: #1B2F33;
`

export const NavBar = styled.nav`
transition: 0.7s ease-in-out;
display: flex;
position: absolute;
justify-content: center;
align-items: center;
left: ${props => props.menuOpen ? 0 : '-15%'};
width: 15%;
height: 100%;
z-index: 10;
`

export const Menu = styled.ul`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 50%;
`

export const Item = styled.li`
padding: 0 2em;
`

export const NavLink= styled(Link)`
color: #1B2F33;
font-size: 1rem;
border-bottom: solid black 1px;
transition: 0.4s ease-in-out;
cursor: pointer;

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
justify-content: start;
align-items: center;
border-radius: 25px;
height: 60vh;
width: 70%;
position: relative;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.356);
`

export const TitleParagraph = styled(Paragraph)`
margin: ${props => props.margin};
width: ${props => props.width};
color: #1B2F33;
font-size: 1rem;
text-align: center;
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
width: 1.6em;
height: 1.6em;
color: #1B2F33;
position: absolute;
top: 0;
left: 0;
margin: 1em;
z-index: 11;
cursor: pointer;
`

export const BurgerCross = styled(GrClose)`
width: 1.6em;
height: 1.6em;
color: #1B2F33;
position: absolute;
top: 0;
left: 0;
margin: 1em;
z-index: 11;
cursor: pointer;
`

export const Divider = styled.div`
height: ${props => props.height};
border: solid 1px #1B2F33;
position: absolute;
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
`

export const MainContentContainer = styled.div`
display: flex;
flex-shrink: 0;
position: relative;
align-items: center;
justify-content: center;
border-radius: 10px;
Background-color: rgba(255,255,255,0.9);

width: 100%;
height: 100%;
`

export const InnerContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 40%;
flex-wrap: wrap;
align-content: center;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
color: #1B2F33;
position: fixed;
width: 4em;
height: 4em;
right: 15%;
cursor: pointer;
`
export const ArrowLeft = styled(MdKeyboardArrowLeft)`
color: #1B2F33;
width: 4em;
height: 4em;
position: fixed;
left: 15%;
cursor: pointer;
`

export const ContactBox = styled.div`
display: flex;
align-items: center;
width: 80%;
margin: 1em;
`

export const PhoneIcon = styled(FiPhoneForwarded)`
width: 1.3em;
height: 1.3em;
margin-right: 1em;
`
export const MailIcon = styled(GoMail)`
width: 1.5em;
height: 1.5em;
margin-right: 0.8em;
`


