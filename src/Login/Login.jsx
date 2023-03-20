import React from "react";
import styled from "styled-components";
import "./Login.css"
import Icons from "./Icons";
import Input from "./Input";
import Btn from "./Btn";
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
const MainContainer = styled.div`
display:flex;
flex-direction: column;
align-items:center;
height:74vh;
width:30vw;
background-color: rgba(255, 255, 255, 0.15);
box-shadow: 0 8px 32px 0  rgba(31, 38, 135, 0.37);
background-filter:blur(8.5px);
border-radius:10px;
color:#fffff;
text-transform:uppercase;
letter-spacing:0.4rem;
margin-top:-5rem;

@media only screen and(max-width:320px) {
     height:70vh;
     width:80vw;
  
hr{
 margin-bottom:0.4rem;
}
 h4{
  font-size:small;
 } 
}
`
const Heading = styled.h2`
margin:3rem 0 2rem 0;

` 
const TheInput = styled.div`
display:flex;
flex-direction:column;
justify-content: space-around;
align-items:center;
width:100%;
height:20%;


`
const BtnContainer = styled.div`
 margin:1rem 0 2rem 0;
 width:100%;
 display:flex;
 align-items:center;
 justify-content:center;
 `
const BtnP = styled.h5`
cursor:pointer;

`
const Dash = styled.hr`
height:9px;
margin:1rem 0 0 0;
width:90%;
border:none;
font-weight:700;
border-radius:0.9rem;
box-shadow:2px 2px 2px 2px #33333;
background-color: rgb(163, 216, 214);
backdrop-filter:blur(25px);
`
const IconsCover = styled.div`
height:50%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
`
const ForgetPassword = styled.h4`
cursor:pointer;
display:flex;
margin-bottom:1rem;
&:hover{
  color:red;
}
`
export default function Login(){
  const FbBackground = "linear-gradient(35deg,rgb(46, 71, 78), rgb(1, 28, 28)rgb(133, 193, 213))";
  const InBackground = "linear-gradient(35deg,rgb(46, 71, 78), rgb(1, 28, 28)rgb(133, 193, 213))";
  const TwBackground = "linear-gradient(35deg,rgb(46, 71, 78), rgb(1, 28, 28)rgb(133, 193, 213))";
  return(
    <div className="login">
    <MainContainer>
      <Heading>
        Welcome
      </Heading>
      <TheInput>
      <Input type="text" placeholder="input email"/>
      <Input type="password" placeholder="input password"/>
      </TheInput>
      <BtnContainer>
    <Btn Content="Sign Up"/>
      </BtnContainer>
      <BtnP>
       Or Login With
      </BtnP>
      <Dash/>
      <IconsCover>
      <Icons color={FbBackground}>
        <BsFacebook/>
      </Icons>
      <Icons color={InBackground}>
        <AiOutlineInstagram/>
      </Icons>
      <Icons color={TwBackground}>
        <BsTwitter/>
      </Icons>
      </IconsCover>
      <ForgetPassword>Forget Password ?</ForgetPassword>
   
    </MainContainer>
    </div>
  )
}
