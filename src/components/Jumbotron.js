import React from "react";
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import bridge from '../assets/bridge.jpg';
//find nice images from pexels.com

const Styles = styled.div`
.jumbo{
font-family:Lao MN;
background: url(${bridge}) no-repeat fixed bottom;
background-position:top ;
color:white;
height: 200px;
position: relative;
z-index: -2;
}

h1{
    text-align: center;
    font-size: 45pt;
}

.overlay{
    background-color:#000;
    opacity:0.4;
    position: absolute;
    top: 0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;

}

`;



export const Jumbotron = () => (
<Styles>
    <Jumbo fluid className= "jumbo">
      <div className="overlay" ></div>
        <Container>
        </Container>
    </Jumbo>
</Styles>
)


