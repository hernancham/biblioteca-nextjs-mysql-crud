import "next-auth";

declare module "next-auth" {
  interface User {
    id_usuario: number;
    codigo_usuario: string;
    rol_usuario: string;
    username_usuario: string;
  }

  interface Session {
    user: User | null | undefined;
  }
}
