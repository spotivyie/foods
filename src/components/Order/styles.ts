import styled from 'styled-components'
import { cores } from '../../styles'

export const DeliveryContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;

  justify-content: flex-end;
  z-index: 1;

  &.delivery-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  /* border: 1px solid ${cores.cinza}; */
  background-color: ${cores.rosa};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`

export const Row = styled.div`
  display: flex;

  .cepClass {
    margin-right: 32px;
  }
`

export const Container = styled.div`
  /* border: 1px solid ${cores.cinza}; */

  input {
    height: 32px;
    background-color: ${cores.rosaClaro};
    padding: 8px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    width: 100%;
    border: 0;
  }

  & > p {
    color: ${cores.rosaClaro};
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 16px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    color: ${cores.rosa};
    border: none;
    background-color: ${cores.rosaClaro};
    margin-bottom: 8px;
    height: 24px;
    &:hover {
      cursor: pointer;
    }
  }

  button:first-child {
    margin-top: 16px;
  }
`

export const PaymentContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;

  justify-content: flex-end;
  z-index: 1;

  &.payment-open {
    display: flex;
  }

  ${Sidebar} {
    /* border: 1px solid ${cores.cinza}; */
    background-color: ${cores.rosa};
    z-index: 1;
    padding: 32px 8px 0 8px;
    max-width: 360px;
    width: 100%;

    ${Container} {
      /* border: 1px solid ${cores.cinza}; */

      input {
        height: 32px;
        background-color: ${cores.rosaClaro};
        padding: 8px;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
        width: 100%;
        border: 0;
      }

      & > p {
        color: ${cores.rosaClaro};
        font-family: Roboto;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 16px;
      }

      ${Row} {
        display: flex;

        .cardClass {
          width: 100%;
          margin-right: 32px;
        }

        .cvvClass {
          width: 40%;
        }

        .monthClass {
          margin-right: 32px;
        }
      }

      ${ButtonContainer} {
        display: flex;
        flex-direction: column;

        button {
          font-family: Roboto;
          font-size: 14px;
          font-weight: 700;
          line-height: 16px;
          letter-spacing: 0em;
          text-align: center;
          color: ${cores.rosa};
          border: none;
          background-color: ${cores.rosaClaro};
          margin-bottom: 8px;
          height: 24px;

          &:hover {
            cursor: pointer;
          }
        }

        button:first-child {
          margin-top: 16px;
        }
      }
    }
  }
`

export const OrderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;

  justify-content: flex-end;
  z-index: 1;

  &.order-open {
    display: flex;
  }

  ${Sidebar} {
    /* border: 1px solid ${cores.cinza}; */
    background-color: ${cores.rosa};
    z-index: 1;
    padding: 32px 8px 0 8px;
    max-width: 360px;
    width: 100%;
  }

  ${Container} {
    /* border: 1px solid ${cores.cinza}; */

    & > p {
      color: ${cores.rosaClaro};
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
    }

    & > p:first-child {
      margin-bottom: 16px;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
    }
  }

  ${ButtonContainer} {
    display: flex;
    flex-direction: column;

    button {
      font-family: Roboto;
      font-size: 14px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: center;
      color: ${cores.rosa};
      border: none;
      background-color: ${cores.rosaClaro};
      margin-bottom: 8px;
      height: 24px;

      &:hover {
        cursor: pointer;
      }
    }

    button:first-child {
      margin-top: 16px;
    }
  }
`

export const DeliveryPaymentContainer = styled.div`
  input {
    &.error {
      border: 2px solid red;
    }
  }
`
