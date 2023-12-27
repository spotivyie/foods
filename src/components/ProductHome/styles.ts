import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.branco};
  position: relative;
  display: inline-block;
  color: ${cores.rosa};
  border: 1px solid ${cores.rosa};
  text-decoration: none;

  img {
    width: 100%;
    height: 350px;
    display: block;
    object-fit: cover;
  }
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

export const Button = styled.button`
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
  margin-top: 8px;

  img {
    margin-left: 8px;
    height: 20px;
    width: 20px;
  }
`

export const Espaco = styled.section`
  padding: 0 8px;
`

export const SaibaMais = styled.section`
  padding-bottom: 8px;
`

export const Links = styled(Link)`
  color: ${cores.rosaClaro};
`
