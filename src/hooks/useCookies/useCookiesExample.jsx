import useCookie from "./useCookie";

function App() {
  const { getCookie, setCookie } = useCookie();

  useEffect(() => {
    // Get the value of the "myCookie" cookie
    const cookieValue = getCookie("myCookie");
    console.log(cookieValue); // Prints the cookie value to the console
  }, []);

  const handleSetCookieClick = () => {
    // Set the value of the "myCookie" cookie to "hello world"
    setCookie("myCookie", "hello world");
  };

  return (
    <div>
      <button onClick={handleSetCookieClick}>Set Cookie</button>
    </div>
  );
}

export default App;
