import styled from 'styled-components'
import { cores } from '../../styles'

import lixo from '../../assets/images/lixo.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  padding: 32px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  button {
    max-width: 100%;
    width: 100%;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${cores.branco};
    text-align: center;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branco};
  margin-bottom: 16px;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.branco};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px 8px;
  position: relative;
  background-color: ${cores.rosaClaro};
  margin-top: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${cores.rosa};
    font-weight: bold;
    font-size: 18px;
  }

  div {
    color: ${cores.rosa};
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${lixo});
    background-color: ${cores.rosaClaro};
    width: 16px;
    height: 16px;
    border: none;
    position: absolute;
    top: 76px;
    right: 8px;
    cursor: pointer;
  }
`

export const Button = styled.button`
  border: 2px solid ${cores.rosaClaro};
  background-color: ${cores.rosaClaro};
  color: ${cores.rosa};
  font-size: 16px;
  font-weight: bold;
  padding: 4px 16px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`
