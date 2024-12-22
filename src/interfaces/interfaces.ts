export interface AuthProps {
  email: string;
  password: string;
  remember?: boolean;
}
export interface RegisterProps {
  email: string;
  password: string;
}
export interface Route {
  path: string;
  element: React.ReactNode;
}
