import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  background-size: cover;

  .container {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  img {
    padding-top: 44px;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-width: 600px;
  color: ${cores.rosa};
  padding-top: 144px;
`
