// import { useState, useEffect } from "react";

// interface GeolocationHook {
//   location: GeolocationPosition | null;
//   error: GeolocationPositionError | null;
// }

// const useGeolocation = (): GeolocationHook => {
//   const [location, setLocation] = useState<GeolocationPosition | null>(null);
//   const [error, setError] = useState<GeolocationPositionError | null>(null);

//   useEffect(() => {
//     const successHandler = (position: GeolocationPosition) => {
//       setLocation(position);
//     };

//     const errorHandler = (error: GeolocationPositionError) => {
//       setError(error);
//     };

//     navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
//   }, []);

//   return { location, error };
// };

// export default useGeolocation;
