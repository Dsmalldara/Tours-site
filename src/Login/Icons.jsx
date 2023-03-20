import React from "react";

import styled from "styled-components";
const IconsComp = styled.div`
display:flex;
padding:2rem;
align-items:center;
height:1rem;
width:1rem;
margin-top:-1rem;
justify-content:center;
flex-direction:row;
cursor:pointer;
row-gap:0.2em;
background: ${(props)=>props.background};
svg{
    width:2rem;
    height:2rem;
}
&:hover{
    color:red;
}

`
function Icons({children, color }){
  return (
<IconsComp background={color}>{children}</IconsComp>
  )

}

export default Icons;