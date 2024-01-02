import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import PerfilList from '../../components/HeaderList'
import FoodList from '../../components/FoodListPerfil'
import { Menu } from '../../types'

import Loader from '../../components/Loader'

const Home = () => {
  const [foods, setFoods] = useState<Menu>()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setFoods(res))
  }, [id])

  if (!foods) {
    return <Loader />
  }

  return (
    <>
      <PerfilList image={foods.capa} infos={foods.tipo} title={foods.titulo} />
      <FoodList cardapio={foods.cardapio} />
    </>
  )
}

export default Home
