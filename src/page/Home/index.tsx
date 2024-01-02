import { Menu } from '../../types'
import { useEffect, useState } from 'react'

import Header from '../../components/HeaderHome'
import FoodList from '../../components/FoodListHome'
import estrela from '../../assets/images/estrela.png'

const Home = () => {
  const [food, setFood] = useState<Menu[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setFood(res))
  }, [])

  return (
    <>
      <Header />
      <FoodList menus={food} estrela={estrela} />
    </>
  )
}

export default Home
