class Menu {
  id: number
  description: string
  title: string
  system: string
  image: string

  constructor(
    id: number,
    description: string,
    title: string,
    system: string,
    image: string
  ) {
    this.id = id
    this.description = description
    this.title = title
    this.system = system
    this.image = image
  }
}

export default Menu
