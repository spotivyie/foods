import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  rosaClaro: '#FFEBD9',
  rosaFundo: '#FFF8F2',
  branco: '#ffffff',
  cinza: '#D3D3D3'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '700px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;

    body{
      background-color: ${cores.rosaFundo};
    }

    .container{
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
    }
  }
`
