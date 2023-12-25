import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.rosa};
  position: relative;
  display: inline-block;
  color: ${cores.branco};
  border: 8px solid ${cores.rosa};
  border-radius: 8px;
`

export const Imagem = styled.img`
  width: 308px;
  border-radius: 8px;
  height: 168px;
  display: block;
  object-fit: cover;
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
  padding: 4px 6px;
  display: flex;
  justify-content: center;
  color: ${cores.rosa};

  a {
    text-decoration: none;
    font-size: 14px;
  }
`

export const Serve = styled.div`
  color: ${cores.rosa};
`

export const SaibaMais = styled.section`
  padding-bottom: 8px;
`
//modal
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;

  header {
    position: absolute;
    top: 8px;
    right: -12px;
  }
`
//2 card
export const Cart = styled.div`
  background-color: ${cores.rosaClaro};
  font-weight: 700;
  margin-right: 8px;
  padding: 4px 6px;
  color: ${cores.rosa};
  position: relative;
  display: inline-block;

  a {
    text-decoration: none;
    font-size: 14px;
  }
`

export const Cards = styled.div`
  width: 1024px;
  height: 344px;
  background-color: ${cores.rosa};
  display: flex;
  color: ${cores.branco};
  padding: 32px;

  img {
    padding-right: 24px;
    width: 100%;
    display: block;
    align-items: center;
  }

  h4,
  p {
    display: block;
    align-items: center;
  }

  h4 {
    font-size: 18px;
    padding-bottom: 16px;
  }

  p {
    font-size: 14px;
    padding-bottom: 16px;
    line-height: 22px;
    font-weight: 400;
  }
`
