import { Card, Descricao, Titulo, Tag, SaibaMais } from './styles'

import { Link } from 'react-router-dom'

type Props = {
  description: string
  title: string
  system: string
  image: string
}

const ProductPerfil = ({ description, image, system, title }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <div>
      <Titulo>{title}</Titulo>
    </div>
    <Descricao>{description}</Descricao>
    <SaibaMais>
      <Tag>
        <Link to="#">{system}</Link>
      </Tag>
    </SaibaMais>
  </Card>
)

export default ProductPerfil
