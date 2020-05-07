import React, {Component} from 'react';
import styled from 'styled-components';


const Styles = styled.div`
h1{
    text-align:center;
    font-family:Lao MN;

}
.wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-wrapper {
    width: 500px;
    height:450px;
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: 0px 10px 50px #555;
    background-color: #ffffff;
  }
  
  input {
    padding: 10px 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #cfcfcf;
  }
  
  input::placeholder {
    font-family:Lao MN;
    font-size: 1.2em;
    font-weight: lighter;
    color: #999;
  }
  textarea{
    font-family:Lao MN;
    font-size:14pt;
    padding: 10px 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #cfcfcf;
    height:150px;
  }

  textarea::placeholder{
    font-family:Lao MN;
    color:#999;
  }
  .name,.email {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }

  .messageBox{
    font-family:Lao MN;
      display:flex;
      flex-direction:column;
      width:100%;
      height:150px;
  }

  .contactMe {

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .contactMe button {
    background-color: #519e8a;
    color: #fff;
    border: 2px solid #fff;
    width: 100%;
    margin-top: 1em;
    padding: 8px 0px;
    font-size: 1em;
    font-weight: lighter;
    letter-spacing: 1px;
    margin-bottom: 0.25em;
  }
  
  .contactMe button:hover {
    color: #519e8a;
    background-color: #fff;
    border: 2px solid #519e8a;
  }
  
  .contactMe small {
    color: #999;
    font-weight: lighter;
  }

  
`;
//email validation using regular expressions
const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

const formValid = formErrors =>{
    let valid = true;
  
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
      return valid;
  };

class Contact extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            name:null,
            email:null,
            messageBox:null,
            formError:{
                    name:"",
                    email:"",
                    messageBox:"",
            }
        };
    }
    
    handleSubmit = e => {
        e.preventDefault();

        if(formValid(this.state.formErrors)){
          console.log(`
          --SUBMITTING--
          Name: ${this.state.name}
          Email:${this.state.email}
          Message: ${this.state.messageBox}
          `);
        } else {console.error("we got a problem");
        }
    };
    //destructuring syntax
    handleChange = e =>{
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;

        //console.log("Name:beech", name);
        //console.log("value", value);

        switch(name){
            case 'name':
            formErrors.name = value.length < 3 ? "Minimum 3 characters":"";
            break;

            case 'email':
            formErrors.email = emailRegex.test(value)
            ? "":"Invalid Email";
         
            break;

            default:
            
            break;
        }
       
        this.setState({formErrors, [name]: value}, () => console.log(this.state));

    };
    

render() {
    return(

      
       
    <Styles>
    <div >
        <div className= "wrapper">
            <div className="form-wrapper">
            <h1>Contact Me</h1>
            <form onSubmit={()=>this.handleSubmit()} noValidate>
                <div className="name">
                    <label htmlFor="Name"></label>
                    <input type="text"
                     className= ""
                      placeholder=" Name" 
                      name=" name"
                      noValidate
                      onChange={this.handleChange}
                      />

                      </div>
       <div className="email">
                    <label htmlFor="email"></label>
                    <input type="email"
                     className= ""
                      placeholder=" Email" 
                      name="Email"
                      noValidate
                      //calling function
                      onChange={this.handleChange}
                      />
       </div>
        <div className="messageBox">
            <label htmlFor="messageBox"></label>
            <textarea id="messageBox"
             placeholder=" Write a message." 
 
            maxlength="250"
            onChange={this.handleChange}
                      />
            </div>
        <div className="contactMe">
            <button type="submit">Send</button>
        </div>
            </form>
            </div>
        </div>
        </div>
  
    </Styles>
)


    }

    
}

export default Contact;
