import { Usuario } from './usuario';
export interface Comentario{
  usuario:Usuario;
  title:string;
  body:string;
}
