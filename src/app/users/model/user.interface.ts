//interfaz usuario tiene los campos: idusuario,nombre,correo,clave,created_at,updated_at,estado
export interface User {
  idusuario: number;
  nombre: string;
  correo: string;
  clave: string;
  created_at: Date;
  updated_at: Date;
  estado: string;
}