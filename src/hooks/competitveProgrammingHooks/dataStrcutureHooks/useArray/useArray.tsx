// import { useState, useCallback } from "react";

// type UseArrayReturnType<T> = {
//   value: T[];
//   setValue: (value: T[]) => void;
//   clear: () => void;
//   removeIndex: (index: number) => void;
//   push: (item: T) => void;
//   filter: (callback: (item: T) => boolean) => void;
//   map: <R>(callback: (item: T, index: number) => R) => R[];
//   updateIndex: (index: number, item: T) => void;
//   insertIndex: (index: number, item: T) => void;
//   find: (callback: (item: T) => boolean) => T | undefined;
// };

// const useArray = <T>(initialValue: T[]): UseArrayReturnType<T> => {
//   const [value, setValue] = useState<T[]>(initialValue);

//   const push = useCallback((item: T) => {
//     setValue((prevValue) => [...prevValue, item]);
//   }, []);

//   const removeIndex = useCallback((index: number) => {
//     setValue((prevValue) => {
//       const newValue = [...prevValue];
//       newValue.splice(index, 1);
//       return newValue;
//     });
//   }, []);

//   const clear = useCallback(() => {
//     setValue([]);
//   }, []);

//   const filter = useCallback((callback: (item: T) => boolean) => {
//     setValue((prevValue) => prevValue.filter(callback));
//   }, []);

//   const map = useCallback(<R>(callback: (item: T, index: number) => R) => {
//     return value.map(callback);
//   }, [value]);

//   const updateIndex = useCallback((index: number, item: T) => {
//     setValue((prevValue) => {
//       const newValue = [...prevValue];
//       newValue[index] = item;
//       return newValue;
//     });
//   }, []);

//   const insertIndex = useCallback((index: number, item: T) => {
//     setValue((prevValue) => {
//       const newValue = [...prevValue];
//       newValue.splice(index, 0, item);
//       return newValue;
//     });
//   }, []);

//   const find = useCallback((callback: (item: T) => boolean) => {
//     return value.find(callback);
//   }, [value]);

//   return {
//     value,
//     setValue,
//     clear,
//     removeIndex,
//     push,
//     filter,
//     map,
//     updateIndex,
//     insertIndex,
//     find,
//   };
// };

// export default useArray;
