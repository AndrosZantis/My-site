import React from 'react';
import styled from 'styled-components';

//CSS
const Styles = styled.div`
h1{
text-align:center;
}
div{
    font-family:Lao MN;
    text-align:justify;
    font-size:16pt;
    text-align:justify;


}

.education{
    text-align:justify;
    font-family:Lao MN;
    font-size:16pt;
    border: 3px solid black;
    padding: 50px;
    align-content:inherit;
    text-align:center;
    position:relative;
    margin-top:20px;
}
`;

export const About = () =>(
    <Styles>
    <div>
        <h1> Qualifications</h1>
         <div className="education">

        <h3>MSc Computer Science</h3>
        <h5>Newcastle University</h5>
        <br></br>

        <p>Specialisations including IoT (Internet of Things), UX Design, Routing Algorithms, Cloud Computing and Mobile Web Design, with a First Class Dissertation Project on improving cloud services for future IoT development.
        </p>
        </div>
        <br></br>
        <div className="education">
        <h3>BSc Computer Science (Hons)</h3>
        <h5>Newcastle University</h5>

        <br></br>

        <p>A second class Computer Science (Hons) graduate with experience including but not limited to: Human Computer Interaction, Ubiquitous Computing and Web-Design (Server-Side), 
            with a First Class Dissertation Project developing a mobile phone app using HCI and 
            Interaction Design principles.</p>
           <p> Achieved the highest mark in the Software Engineering Team Project module in my 
            second year of university where we developed and published the mobile application "Dyne" to the Google Play Store.
        </p>
        </div>
        <br></br>
        <div className="education">
        <h3>Skills</h3>
        <br></br>

        <p>
        Programming Languages: C, C++, C#, Java, JavaScript, PHP, CSS, Python, HTML, React.js, Angular Development Tools: Xcode, Intellij IDE, Eclipse IDE, Git, PyCharm IDE, Sketch, Figma </p>
        <p>Database Systems: SQL, SQLlite, Google Firebase </p>
        <p>Languages: Fluent in Greek, Fluent in English
        </p>
        </div>

        <br></br>


    </div>
    </Styles>
)