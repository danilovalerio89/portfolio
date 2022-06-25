import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 1rem;
        color: var(--White);
        background-color: var(--Black);
        font-family: var(--PrimaryFont)

    }
:root{
    //Fonts:
    --PrimaryFont:  'Inter', sans-serif;
    --SecondaryFont: 'Poppins', sans-serif;

    //Colors:
    --Dark-5: #000000;
    --Dark-4: #1C1A1A;
    --Dark-3: #2A2A2A;
    --Dark-2: #4B4A54;
    --Dark-1: #57595E;

    --Black : #000000; 
    --White : #FFFFFF;

    --Blue-5: #1A1960;
    --Blue-4: #004391;
    --Blue-3: #006CB5;
    --Blue-2: #0095C7;
    --Blue-1: #00BDC7;

    //Font-Size:
    --Font-6: 3.052rem;
    --Font-5: 2.441rem;
    --Font-4: 1.953rem;
    --Font-3: 1.563rem;
    --Font-2: 1.25rem;
    --Font-1: 0.8rem;
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
