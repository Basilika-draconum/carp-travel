export function formatPhoneNumber(phone:string) {
const formattedPhone = `${phone.substring(0, 3)} (${phone.substring(3, 6)}) ${phone.substring(6, 8)} ${phone.substring(8, 10)} ${phone.substring(10, 13)}`;
  return formattedPhone;
}