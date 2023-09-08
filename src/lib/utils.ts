import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function b64Image(image: string) {
  return `data:image/png;base64,${image}`
}


export function formatNumberto0(num: number): string {
  return num >= 10 ? `${num}` : `0${num}`;
}


export function getCookie(name: string) {
  const cookieString = document.cookie;
  const cookies = cookieString.split('; ');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    const cookieName = cookie[0];
    const cookieValue = cookie[1];

    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }

  return null;
}


export function setCookie(name: string, value: string, daysToExpire: number) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + daysToExpire);

  const cookieValue = encodeURIComponent(value) + (daysToExpire ? `; expires=${expirationDate.toUTCString()}` : '');
  document.cookie = `${name}=${cookieValue}; path=/`;
}