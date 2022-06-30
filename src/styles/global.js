import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--PrimaryFont);
    }
:root{
    //Fonts:
    --PrimaryFont:  'Inter', sans-serif;
    --SecondaryFont: 'Poppins', sans-serif;

   
    --Black-2: #111111;
    --Black-1: #57595E;
    --Black : #000000; 

    --White-2: #e5e5e5;
    --White-1: #f5f5f5;
    --White : #FFFFFF;

   
}

a{
    text-decoration: none;
}
ul, ol, li{
    list-style: none;
}
button{
    cursor: pointer;
    border: none;
}
`;
