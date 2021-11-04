import { Usuario } from './usuario';
export interface Comentario{
  user:Usuario;
  title:string;
  body:string;
}
