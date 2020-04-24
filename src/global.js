import px2vw from "./components/px2vw";

export const Global = `

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: ${px2vw(24)};
  
        @media (min-width: 768px) {
          font-size: ${px2vw(18)};
        }
  
        @media (min-width: 1024px) {
          font-size: ${px2vw(16)};
        }
    }

    @font-face {
        font-family: 'Sui';
        src: URL('./sui\ generis\ rg.ttf') format('truetype');
    }

    body{
        overflow-y: scroll;
        overflow-x: hidden;
        font: 400 14px Sui, bolder;
        font-style: italic;    
        font-size: large;
        background: #f0f0f5;
        -webkit-font-smoothing: antialiased;    
    }
    input, button, textarea{
        font: 400 18px Roboto, sans-serife;    
    }

    button{
        cursor: pointer;
    }

    form input{
        width: 100%;
        height: 60px;
        color: #333;
        border: 1px solid #DCDCE6;
        border-radius: 8px;
        padding: 0 24px;
    }

    form textarea{
        width: 100%;
        min-height: 160px;
        resize: vertical;
        color: #333;
        border: 1px solid #DCDCE6;
        border-radius: 8px;
        padding: 16px 24px;
        line-height: 24px;
    }

    .button{
        width: 100%;
        height: 60px;
        background: #e02041;
        border: 0;
        border-radius: 8px;
        color: #fff;
        font-weight: 700;
        margin-top: 16px;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        line-height: 60px;
        transition: filter 0.2s;
    }
    .button:hover{
        filter: brightness(90%);
    }

    .back-link{
        display: flex;
        align-items: center;
        margin-top: 40px;
        color: #41414D;
        font-size: 18px;
        text-decoration: none;
        font-weight: 500;
        transition: opacity 0.2s;
    }

    .back-link:hover{
        opacity: 0.8;
    }

    .back-link svg{
        margin-right: 8px;
    }`
;
