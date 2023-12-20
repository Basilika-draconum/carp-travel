export type FormDataContact = {
  fullName: string;
  email: string;
  message: string;
};
export type FormDataCareer = {
  fullName: string;
  email: string;
  position: string;
  phone: string;
  message: string;
  isAgree: boolean;
};
export interface NavigationLink {
  label: string;
  href: string;
  duration: number;
  id: number;
}
export interface Header{
  title1: string;
  title2: string;
  subtitle: string;
  description: string;
  button: string;
  navigationLinks: NavigationLink[];
}
export type ApiData = Header | FormDataContact;
