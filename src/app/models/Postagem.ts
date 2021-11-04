import { Comentario } from './Comentario';
import { Usuario } from "./Usuario";

export interface Postagem {
  id: number
  title:string
  texto:string
  comentarios:any[]
  stars:number
  porcao:number
  preparo:number
  data:string
  referencias:string
  user:Usuario
}
