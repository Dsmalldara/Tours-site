import React from 'react'
import styled from 'styled-components'
const StyleBtn = styled.button`
background:  linear-gradient(35deg,rgb(187, 194, 196), rgb(122, 163, 177), rgb(133, 193, 213)); 
text-transform:uppercase;
width:65%;
letter-spacing:0.2rem;
height:3rem;
color:white;
cursor:pointer;
border-radius:2rem;
border:none;
box-shadow:2rem 1rem 2rem 1rem #33333;
&:hover{
    color:brown;
    transition:all 400ms ease-out;
    
}
` 


function Btn({Content}){
  return (
  <StyleBtn>{Content}</StyleBtn>
  )
}

export default Btn;