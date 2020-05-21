import React from 'react';
import styled from 'styled-components';
import jammy1 from './assets/Picture 1-jammy.png';
import jammy2 from './assets/Picture 2-jammy.png';
import dyne2 from './assets/dyne2.png';
import dyne1 from './assets/dyne1.png';


//CSS
const Styles = styled.div`

h1{
    text-align:center;
    font-family:Lao MN;

}
.project{
    font-family:Lao MN;
    font-size:16pt;
    border: 3px solid black;
    padding: 50px;
    align-content:inherit;
    text-align:center;
    position:relative;
    margin-top:20px;
}
img{
    size: 50% 50%;
    height:40%;
    width:40%;
    margin:10px;
}
`;

export const Portfolio = () =>(
    <Styles>
    <div>
        <h1>Portfolio</h1>
        <div className="project">
        <h3>Dyne</h3>
        <img id="dyne1"src={dyne1} alt = "dyne"/>
        <img id="dyne2"src={dyne2} alt = "dyne"/>
        <p></p>
        <p>Dyne is a collaborative venture designed for students based in Newcastle.</p>
        <p>The wide range of informative recipes, tutorials and an essentials 
        guide will quickly teach you advanced cooking skills by explaining all of the main techniques of how to prepare a meal.</p>
        <p><a href="https://play.google.com/store/apps/details?id=com.team18.teamproject&hl=en_GB">Dyne</a> is available on the Google Play Store</p>
        </div>
        <br></br>
        <div className="project">
        <h3>Jammy As</h3>
        <img id="jammy1"src={jammy1} alt = "musicapp"/>
        <img id="jammy2"src={jammy2} alt = "musicapp"/>
        <p></p>
        <p>Designing Digital Tools to help link people active in the North-East Music Scene
        by developing a mobile hybrid app using the Ionic Framework.</p>
        </div>
    </div>
    </Styles>
)