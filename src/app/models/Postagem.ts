import { Usuario } from 'src/app/models/usuario';

export interface Postagem {
  id: number,
  comentários:number
  curtidas:number
  data:Date
  porcao:number
  preparo:number
  referencias:string
  texto:string
  titulo:string
  user:Usuario

}
