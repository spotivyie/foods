class Menu {
  id: number
  description: string
  title: string
  nota: string
  estrela: string
  system: string
  infos: string[]
  image: string

  constructor(
    id: number,
    description: string,
    title: string,
    nota: string,
    estrela: string,
    system: string,
    infos: string[],
    image: string
  ) {
    this.id = id
    this.description = description
    this.title = title
    this.nota = nota
    this.estrela = estrela
    this.system = system
    this.infos = infos
    this.image = image
  }
}

export default Menu
