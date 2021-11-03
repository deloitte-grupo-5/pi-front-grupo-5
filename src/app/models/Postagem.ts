import { Comentario } from './Comentario';
import { Usuario } from "./usuario";

export interface Postagem {
  id: number,
  comentarios:Comentario[]
  curtidas:number
  data:Date
  porcao:number
  preparo:number
  referencias:string
  texto:string
  titulo:string
  user:Usuario

}
