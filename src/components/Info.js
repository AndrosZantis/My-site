import React from 'react';
import styled from 'styled-components';
import myself from './assets/myself.JPG';

//CSS
const Styles = styled.div`
h1{
text-align:center;
}

div{
    font-family:Lao MN;
    text-align:left;


}

img{
    display: inline-block;
    vertical-align: top;
    width: 46%;
    margin: 20px 30px 0 0;
}
h2{
    text-align:center;
}
p{
    float:right;
    font-size:16pt;


}
.description{
    display: inline-block;
    width: 46%;
    font-size:16pt;
    @media (max-width: 620px) {
    width: 100%;

    }
display:incline;
}

.boxFrame{
    font-family:Lao MN;
    border: 3px solid black;
    padding: 50px;
    font-size:16pt;
    align-content:inherit;
    text-align:center;
    position:relative;
    margin:auto;
    margin-top:20px;
}
`;

export const Info = () =>(
    <Styles>
    <div>
    <div className="boxFrame">
         <img id="myself"src={myself} alt = "profile of me"/>
        <div className="description"> 
        
        <b>Hello, my name is Andros Zantis.</b>
        <br></br>
       <p> I am a recent MSc Computer Science graduate seeking to use and further develop 
        my knowledge and skills in software development in a graduate-level position.</p>
        <br></br>
        <br></br>
          <p> I am an eager and quick learner who enjoys being challenged
               and engaged with projects that require me to work outside my comfort zone and knowledge set.</p>
          <br></br>
          <br></br>
          </div>
        </div>
        <br>
        
        </br>
        <br></br>

        <h1> Interests</h1>
        <br></br>
        <p>
        I am an inquisitive, energetic and hard-working computer science professional 
        with particular interests in mobile app development and cloud computing. 
        I work extremely well under pressure and have consistently met deadlines and 
        targets whilst delivering a high quality of work.
        </p>
        <p>
        Outside of work I thoroughly enjoy travel, with family in Cyprus and Qatar, 
        I love being able to experience new cultures. I take great interest in politics
         current affairs and in my spare time I enjoy collecting vinyl, attending concerts
          as well as extending my knowledge of Web Development by learning frameworks 
          such as Angular, React.js and Vue.js through their use in my own personal 
          projects.
        </p>

        <p>
        As an avid lover of music, whilst at university I was the president of the Newcastle University Rock Society 
        and also oversaw the running of a charity music festival raising money 
        for the Sophie Lancaster Foundation supporting subcultures in society.
        </p>

    </div>
    </Styles>
)