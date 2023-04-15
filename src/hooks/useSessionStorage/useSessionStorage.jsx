// import { useState, useEffect } from "react";

// type SessionStorageSetter = (
//   value: string | ((prevValue: string) => string)
// ) => void;

// const useSessionStorage = (
//   key: string,
//   initialValue: string = ""
// ): [string, SessionStorageSetter] => {
//   const [value, setValue] = useState(() => {
//     const item = window.sessionStorage.getItem(key);
//     return item ? item : initialValue;
//   });

//   useEffect(() => {
//     window.sessionStorage.setItem(key, value);
//   }, [key, value]);

//   return [value, setValue];
// };

// export default useSessionStorage;
