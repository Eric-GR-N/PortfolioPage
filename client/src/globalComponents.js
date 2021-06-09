import React from 'react'
import styled from 'styled-components';

export const PageContainer = styled.div`
display: flex;
width: 100%;
height: 100vh;
`
export const Header = styled.h1`
`
export const Paragraph = styled.p`
`

export const Note = styled.div`   
 display: flex;
 justify-content: center;
 align-items: center;
 height: ${props => props.height};
 width: ${props => props.width};
 background-image: url(${props => props.img});
 background-size: cover;
 background-repeat: no-repeat;
 background-position: center;
 position: relative;
 border-radius: 15px;
 box-shadow: 0 5px 10px rgba(0, 0, 0, 0.356);

 @media only screen and (max-width: 600px) {
    height: 80%;
    width: 95%;
}
`

export const BigNote = styled.div`
`
export const ParagraphContainer = styled.div`

` 
