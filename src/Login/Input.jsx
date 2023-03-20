import React from 'react'
import styled from 'styled-components'
const StyledInput = styled.input`

box-shadow: 8px 0 20px 4px rgba(31, 38, 135, 0.37);
height:3rem;
background-color:rgba(255, 255, 255, 0.15);
width:80%;
padding:1rem;
outline:none;
border:none;
margin-bottom:1.2rem;
border-radius:2rem;
color:#3c354e;
font-size:1rem;
font-weight:bold;
&:focus{
    display:inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter:blur(12rem);
    border-radius:2rem;
}
&::placeholder{
    color#b9abe099;
    font-weight:200;
    font-size:1rem;
}
`;
function Input({type, placeholder}){
  return (
    <StyledInput type={type} placeholder={placeholder}>

    </StyledInput>
  )
}

export default Input