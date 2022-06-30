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

    //Colors:
    --Dark-4: #1C1A1A;
    --Dark-3: #2A2A2A;
    --Dark-2: #4B4A54;
    --Dark-1: #57595E;

    --Black : #000000; 
    --White : #FFFFFF;

    //Font-Size:
    --fontSize-3: 1.563rem;
    --fontSize-2: 1.25rem;
    --fontSize-1: 0.8rem;
    --fontSize: 1rem;
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
