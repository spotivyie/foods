import PerfilList from '../../components/HeaderList'

import { useEffect, useState } from 'react'
import FoodList from '../../components/FoodListPerfil'
import { useParams } from 'react-router-dom'

export interface CardapioItem {
  foto: string
  preco?: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Menu = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  system: string
  cardapio: CardapioItem[]
}

const Home = () => {
  const [foods, setFoods] = useState<Menu>()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setFoods(res))
  }, [id])

  if (!foods) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <PerfilList image={foods.capa} infos={foods.tipo} title={foods.titulo} />
      <FoodList title="Menu" cardapio={foods.cardapio} />
    </>
  )
}

export default Home
