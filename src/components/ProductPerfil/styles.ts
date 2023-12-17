import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.rosa};
  position: relative;
  display: inline-block;
  color: ${cores.branco};
  border: 8px solid ${cores.rosa};
`

export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  display: block;
  margin-top: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const Tag = styled.div`
  background-color: ${cores.rosaClaro};
  font-weight: 700;
  margin-right: 8px;
  padding: 4px 6px;
  display: flex;
  justify-content: center;

  a {
    color: ${cores.rosa};
    text-decoration: none;
  }
`

export const SaibaMais = styled.section`
  padding-bottom: 8px;
`
