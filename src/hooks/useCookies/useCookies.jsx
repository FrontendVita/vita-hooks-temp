// import { useState, useEffect } from "react";

// type CookieValue = string | undefined;

// interface CookieOptions {
//   path?: string;
//   expires?: number | Date;
//   maxAge?: number;
//   domain?: string;
//   secure?: boolean;
//   sameSite?: "strict" | "lax" | "none";
// }

// type SetCookie = (
//   name: string,
//   value: CookieValue,
//   options?: CookieOptions
// ) => void;

// type GetCookie = (name: string) => CookieValue;

// interface CookieHook {
//   getCookie: GetCookie;
//   setCookie: SetCookie;
// }

// const useCookie = (): CookieHook => {
//   const [cookies, setCookies] = useState<{ [key: string]: CookieValue }>({});

//   useEffect(() => {
//     setCookies(
//       document.cookie
//         .split(";")
//         .map((cookie) => cookie.trim().split("="))
//         .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
//     );
//   }, []);

//   const getCookie: GetCookie = (name) => cookies[name];

//   const setCookie: SetCookie = (name, value, options = {}) => {
//     const { expires, maxAge, domain, path, secure, sameSite } = options;

//     let cookie = `${name}=${value}`;

//     if (expires) {
//       if (typeof expires === "number") {
//         const date = new Date();
//         date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
//         cookie += `;expires=${date.toUTCString()}`;
//       } else {
//         cookie += `;expires=${expires.toUTCString()}`;
//       }
//     }

//     if (maxAge) {
//       cookie += `;max-age=${maxAge}`;
//     }

//     if (domain) {
//       cookie += `;domain=${domain}`;
//     }

//     if (path) {
//       cookie += `;path=${path}`;
//     }

//     if (secure) {
//       cookie += `;secure`;
//     }

//     if (sameSite) {
//       cookie += `;same-site=${sameSite}`;
//     }

//     document.cookie = cookie;
//     setCookies((prevCookies) => ({ ...prevCookies, [name]: value }));
//   };

//   return { getCookie, setCookie };
// };

// export default useCookie;
