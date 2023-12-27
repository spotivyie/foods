import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const HeaderBar = styled.header`
  color: ${cores.rosa};
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: ${cores.rosa};
    font-weight: bold;
    font-size: 18px;
  }

  div {
    display: flex;
    align-items: center;
    padding-top: 44px;
  }

  img {
    margin-right: 254px;
    margin-left: 340px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
    text-align: center;
    justify-content: center;

    div {
      display: block;
      padding-top: 22px;
    }

    img {
      margin: auto;
      padding: 10px;
    }
  }
`

export const Links = styled.a`
  display: flex;

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
  }
`

export const CartButton = styled.a`
  display: flex;

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
  }
`

export const Imagem = styled.div`
  width: 100%;
  height: 186px;
  background-size: cover;
`

export const Images = styled.div`
  color: ${cores.branco};
  width: 100%;
  height: 280px;
  background-size: cover;

  .container {
    display: grid;
    justify-content: space-between;
  }

  h3 {
    font-weight: 100;
    padding-top: 24px;
    font-size: 32px;
  }

  h2 {
    padding-top: 154px;
    font-size: 32px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding-left: 8px;
  }
`
