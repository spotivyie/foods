import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  position: relative;
  display: inline-block;
  color: ${cores.rosa};
  border: 1px solid ${cores.rosa};
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`

export const Tag = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
  display: inline-block;
  font-weight: bold;
  margin-right: 8px;
  padding: 4px 6px;

  a {
    color: ${cores.branco};
    text-decoration: none;
  }
`

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const EstrelaNota = styled.a`
  display: flex;
  align-items: center;
  font-weight: bold;

  img {
    margin-left: 8px;
  }
`

export const Espaco = styled.section`
  padding: 0 8px;
`

export const SaibaMais = styled.section`
  padding-bottom: 8px;
`
