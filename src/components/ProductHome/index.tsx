import {
  Card,
  Descricao,
  Infos,
  Titulo,
  Tag,
  Espaco,
  SaibaMais,
  EstrelaNota,
  HeaderBar
} from './styles'

import { Link } from 'react-router-dom'

type Props = {
  description: string
  title: string
  nota: string
  estrela: string
  system: string
  infos: string[]
  image: string
}

const Product = ({
  description,
  image,
  infos,
  system,
  title,
  estrela,
  nota
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Espaco>
      <HeaderBar>
        <div>
          <Titulo>{title}</Titulo>
        </div>
        <EstrelaNota>
          <div>{nota}</div>
          <img src={estrela} alt={estrela} />
        </EstrelaNota>
      </HeaderBar>
      <Descricao>{description}</Descricao>
      <SaibaMais>
        <Tag>
          <Link to="/perfil">{system}</Link>
        </Tag>
      </SaibaMais>
    </Espaco>
  </Card>
)

export default Product
