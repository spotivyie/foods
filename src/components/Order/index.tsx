import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'

import { clear, close } from '../../store/reducers/cart'
import { closeDelivery } from '../../store/reducers/delivery'
import { closePayment, openPayment } from '../../store/reducers/payment'
import { closeOrder, openOrder } from '../../store/reducers/order'

import { formataPreco } from '../../utils'
import Input from '../Input'

import * as S from './styles'

const Order = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const { paymentOpen } = useSelector((state: RootReducer) => state.payment)
  const { deliveryOpen } = useSelector((state: RootReducer) => state.delivery)
  const { orderOpen } = useSelector((state: RootReducer) => state.order)

  const dispatch = useDispatch()
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const checkInputError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  const fecharDelivery = () => {
    dispatch(closeDelivery())
  }

  const abrirPayment = () => {
    const field = ['nome', 'endereco', 'cidade', 'cep', 'numero']
    let error: string[] = []
    const nomeInput = document.getElementById('nome') as HTMLInputElement
    const enderecoInput = document.getElementById(
      'endereco'
    ) as HTMLInputElement
    const cidadeInput = document.getElementById('cidade') as HTMLInputElement
    const cepInput = document.getElementById('cep') as HTMLInputElement
    const numeroInput = document.getElementById('numero') as HTMLInputElement
    if (
      nomeInput.value === '' ||
      enderecoInput.value === '' ||
      cidadeInput.value === '' ||
      cepInput.value === '' ||
      numeroInput.value === ''
    ) {
      alert('Preencha os campos obrigatórios')
    } else {
      if (
        checkInputError('nome') ||
        checkInputError('endereco') ||
        checkInputError('cidade') ||
        checkInputError('cep') ||
        checkInputError('numero')
      ) {
        for (let i = 0; i < field.length; i++) {
          if (checkInputError(field[i])) {
            error.push(field[i])
          }
        }
        const errorString = error.join(', ')
        alert(`Campos com erro : ${errorString}`)
      } else {
        dispatch(openPayment())
        error = []
      }
    }
  }

  const fecharPayment = () => {
    dispatch(closePayment())
  }

  const abrirOrder = () => {
    const field = ['cardName', 'cardNumber', 'cvv', 'month', 'year']
    let error: string[] = []
    const cardNameInput = document.getElementById(
      'cardName'
    ) as HTMLInputElement
    const cardNumberInput = document.getElementById(
      'cardNumber'
    ) as HTMLInputElement
    const cvvInput = document.getElementById('cvv') as HTMLInputElement
    const monthInput = document.getElementById('month') as HTMLInputElement
    const yearInput = document.getElementById('year') as HTMLInputElement
    if (
      cardNameInput.value === '' ||
      cardNumberInput.value === '' ||
      cvvInput.value === '' ||
      monthInput.value === '' ||
      yearInput.value === ''
    ) {
      alert('Preencha os campos obrigatórios')
    } else {
      if (
        checkInputError('cardName') ||
        checkInputError('cardNumber') ||
        checkInputError('cvv') ||
        checkInputError('month') ||
        checkInputError('year')
      ) {
        for (let i = 0; i < field.length; i++) {
          if (checkInputError(field[i])) {
            error.push(field[i])
          }
        }
        const errorString = error.join(', ')
        alert(`Campos com erro : ${errorString}`)
      } else {
        dispatch(openOrder())
        error = []
      }
    }
  }

  const fecharOrder = () => {
    dispatch(closeOrder())
    dispatch(closePayment())
    dispatch(closeDelivery())
    dispatch(close())
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      if (valorAtual.preco) {
        return acumulador + valorAtual.preco
      }
      return 0
    }, 0)
  }

  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Campo obrigatório'),
      endereco: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('Campo obrigatório'),
      cidade: Yup.string()
        .min(2, 'A cidade precisa ter pelo menos 2 caracteres')
        .required('Campo obrigatório'),
      cep: Yup.string()
        .min(8, 'O CEP precisa ter pelo menos 5 caracteres')
        .max(9, 'O CEP precisa ter no máximo 8 caracteres')
        .required('Campo obrigatório'),
      numero: Yup.string()
        .min(1, 'O número precisa ter pelo menos 1 caracteres')
        .max(5, 'O número precisa ter no máximo 5 caracteres')
        .required('Campo obrigatório'),

      cardName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Campo obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'O número do cartão precisa ter pelo menos 16 caracteres')
        .max(19, 'O número do cartão precisa ter no máximo 16 caracteres')
        .required('Campo obrigatório'),
      cvv: Yup.string()
        .min(3, 'O CVV precisa ter pelo menos 3 caracteres')
        .max(3, 'O CVV precisa ter no máximo 3 caracteres')
        .required('Campo obrigatório'),
      month: Yup.string()
        .min(2, 'O mês precisa ter pelo menos 2 caracteres')
        .max(2, 'O mês precisa ter no máximo 2 caracteres')
        .required('Campo obrigatório'),
      year: Yup.string()
        .min(2, 'O ano precisa ter pelo menos 2 caracteres')
        .max(2, 'O ano precisa ter no máximo 2 caracteres')
        .required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.nome,
          adress: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            numberAdress: Number(values.numero),
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.month),
              year: Number(values.year)
            }
          }
        }
      })
    }
  })

  return (
    <>
      {isSuccess && data ? (
        <S.OrderContainer className={orderOpen ? 'order-open' : ''}>
          <S.Sidebar>
            <S.Container>
              <p>Pedido realizado - {data.orderId}</p>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
                <br></br>
                <br></br>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
                <br></br>
                <br></br>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
                <br></br>
                <br></br>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>

              <S.ButtonContainer>
                <button onClick={fecharOrder}>Concluir</button>
              </S.ButtonContainer>
            </S.Container>
          </S.Sidebar>
        </S.OrderContainer>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <S.DeliveryPaymentContainer>
            <S.DeliveryContainer
              className={deliveryOpen ? 'delivery-open' : ''}
            >
              <S.Sidebar>
                <S.Container>
                  <p>Entrega</p>
                  <Input title="Quem irá receber">
                    <input
                      id="nome"
                      type="text"
                      value={form.values.nome}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputError('nome') ? 'error' : ''}
                    />
                  </Input>

                  <Input title="Endereço">
                    <input
                      id="endereco"
                      type="text"
                      value={form.values.endereco}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputError('endereco') ? 'error' : ''}
                    />
                  </Input>
                  <Input title="Cidade">
                    <input
                      id="cidade"
                      type="text"
                      value={form.values.cidade}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputError('cidade') ? 'error' : ''}
                    />
                  </Input>
                  <S.Row>
                    <Input className="cepClass" title="CEP">
                      <InputMask
                        id="cep"
                        type="text"
                        value={form.values.cep}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputError('cep') ? 'error' : ''}
                        mask="99999-999"
                      />
                    </Input>
                    <Input title="Número">
                      <input
                        id="numero"
                        type="text"
                        value={form.values.numero}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputError('numero') ? 'error' : ''}
                      />
                    </Input>
                  </S.Row>
                  <Input title="Complemento (opcional)">
                    <input
                      id="complemento"
                      type="text"
                      value={form.values.complemento}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputError('complemento') ? 'error' : ''}
                    />
                  </Input>
                  <S.ButtonContainer>
                    <button type="button" onClick={abrirPayment}>
                      Continuar com o pagamento
                    </button>
                    <button onClick={fecharDelivery}>
                      Voltar para o carrinho
                    </button>
                  </S.ButtonContainer>
                </S.Container>
              </S.Sidebar>
            </S.DeliveryContainer>
            <S.PaymentContainer className={paymentOpen ? 'payment-open' : ''}>
              {/* <Overlay /> */}
              <S.Sidebar>
                <S.Container>
                  <p>
                    Pagamento - Valor a pagar {formataPreco(getTotalPrice())}{' '}
                  </p>
                  <Input title="Nome no cartão">
                    <input
                      id="cardName"
                      type="text"
                      value={form.values.cardName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputError('cardName') ? 'error' : ''}
                    />
                  </Input>

                  <S.Row>
                    <Input className="cardClass" title="Número do cartão">
                      <InputMask
                        id="cardNumber"
                        type="text"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputError('cardNumber') ? 'error' : ''}
                        mask="9999 9999 9999 9999"
                      />
                    </Input>

                    <Input className="cvvClass" title="CVV">
                      <InputMask
                        id="cvv"
                        type="text"
                        value={form.values.cvv}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputError('cvv') ? 'error' : ''}
                        mask="999"
                      />
                    </Input>
                  </S.Row>
                  <S.Row>
                    <Input className="monthClass" title="Mês de vencimento">
                      <InputMask
                        id="month"
                        type="text"
                        value={form.values.month}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputError('month') ? 'error' : ''}
                        mask="99"
                      />
                    </Input>

                    <Input title="Ano de vencimento">
                      <InputMask
                        id="year"
                        type="text"
                        value={form.values.year}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputError('year') ? 'error' : ''}
                        mask="99"
                      />
                    </Input>
                  </S.Row>
                  <S.ButtonContainer>
                    <button type="submit" onClick={abrirOrder}>
                      Finalizar pagamento
                    </button>
                    <button onClick={fecharPayment}>
                      Voltar para edição de endereço
                    </button>
                  </S.ButtonContainer>
                </S.Container>
              </S.Sidebar>
            </S.PaymentContainer>
          </S.DeliveryPaymentContainer>
        </form>
      )}
    </>
  )
}

export default Order
