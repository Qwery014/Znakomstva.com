import AuthContextProvider from "./context/AuthContextProvider";
import UsersContextProvider from "./context/UsersContextProvider";
import MainRoutes from "./MainRoutes";


function App() {
  return (
    <>
      <AuthContextProvider>
        <UsersContextProvider>
          <MainRoutes />
        </UsersContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
