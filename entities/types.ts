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
export type ApiData = NavigationLink | FormDataContact;
