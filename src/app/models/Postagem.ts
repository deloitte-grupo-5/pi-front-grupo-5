import { Comentario } from './Comentario';
import { Usuario } from "./usuario";

export interface Postagem {
  id: number
  titulo:string  
  texto:string
  comentarios:Comentario[]
  curtidas:number
  porcao:number
  preparo:number
  data:Date
  referencias:string
  user:Usuario 
}
