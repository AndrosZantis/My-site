import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

//CSS
const Styles = styled.div`
color:white;
h1{
    text-align:center;
    font-size:50pt;
    margin-top:180px;
    font-family:Lao MN;
}
h4{
    text-align:center;
    font-family:Lao MN;
    margin:40px;
}
.social{
    font-size:35pt;
    text-align:center;
    display:block;
    margin:10px 0 10px 0;
  }
`;
export const Home = () =>(
    <Styles>
        
     <Container>
     <style>{'body { background-color: black; }'}</style>

         <h1>ANDROS ZANTIS</h1>
         <h4>I am a graduate from Newcastle University with a Masters and Bachelors Degree in Computer Science.</h4>
         <h4>I specialise in front-end and mobile app development. </h4>
         <div className="social-container">
            <h1>Social Follow</h1>
        </div>
     </Container>
        <div className="social">
        <a href="https://www.linkedin.com/in/andros-c-zantis-1a241b10b/"><FontAwesomeIcon icon={faLinkedin}/></a>
        &nbsp;<a href="https://github.com/AndrosZantis"><FontAwesomeIcon icon={faGithub}/></a>
        </div>
         </Styles>
)