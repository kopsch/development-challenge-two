import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --primary: #023e8a;
        --secondary: #90e0ef;
        --gray-100: #333333;
        --gray-50: #828282;
        --gray-20: #E0E0E0;
        --gray-0: #F5F5F5;
        --white-50: rgba(255,255,255,0.05);
        --black-95:rgba(51, 51, 51, 0.95);
    }
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-family: "Roboto", sans-serif
    }

    
    body{}

    ::-webkit-scrollbar {
        width: 7px; 
        height: 10px;         
    }
  
    ::-webkit-scrollbar-thumb {
        background-color: var(--primary-50);  
        border-radius: 20px;      
    }
`;