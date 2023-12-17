import Menu from '../../ModelsHome'

import ladolce from '../../assets/images/ladolce.png'
import sushi from '../../assets/images/sushi.png'
import estrela from '../../assets/images/estrela.png'

import Header from '../../components/HeaderHome'
import FoodList from '../../components/FoodListHome'

const foods: Menu[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi ',
    nota: '4.9',
    estrela: estrela,
    system: 'Saiba mais',
    infos: ['Destaque da semana', 'Japonesa'],
    image: sushi
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    estrela: estrela,
    system: 'Saiba mais',
    infos: ['Italiana'],
    image: ladolce
  },
  {
    id: 3,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi ',
    nota: '4.9',
    estrela: estrela,
    system: 'Saiba mais',
    infos: ['Destaque da semana', 'Japonesa'],
    image: sushi
  },
  {
    id: 4,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    estrela: estrela,
    system: 'Saiba mais',
    infos: ['Italiana'],
    image: ladolce
  },
  {
    id: 5,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi ',
    nota: '4.9',
    estrela: estrela,
    system: 'Saiba mais',
    infos: ['Destaque da semana', 'Japonesa'],
    image: sushi
  },
  {
    id: 6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    estrela: estrela,
    system: 'Saiba mais',
    infos: ['Italiana'],
    image: ladolce
  }
]

const Home = () => (
  <>
    <Header />
    <FoodList menus={foods} title="Menu" />
  </>
)

export default Home
