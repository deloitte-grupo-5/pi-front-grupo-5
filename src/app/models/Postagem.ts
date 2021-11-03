import { Usuario } from "./usuario";

export interface Postagem {
  id: number,
  comentários:number
  curtidas:number
  data:string
  porcao:number
  preparo:number
  referencias:string
  texto:string
  titulo:string
  user:Usuario

}
