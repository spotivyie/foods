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
