import styled from 'styled-components'
import { cores } from '../../styles'

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
`

export const Links = styled.a`
  display: flex;
`

export const LinkCart = styled.a`
  display: flex;
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
`
