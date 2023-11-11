import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { AluminioProvider } from "../src/context/AluminioProvider";
import { useAuth } from "./context/AuthProvider";
import { Productos } from "./routes/pages/protected/Productos";
import { Sidebar } from "./components/ui/Sidebar";
import { Navbar } from "./components/Navbar";
import { NotFound } from "./routes/pages/protected/NotFound";
import { Login } from "./routes/pages/Login";
import { Register } from "./routes/pages/Register";
import RutaProtegida from "./layouts/RutaProtejida";
import { Home } from "./routes/pages/protected/Home";

function App() {
  const { isAuth } = useAuth();

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            element={
              <RutaProtegida isAllowed={!isAuth} redirectTo={"/login"} />
            }
          >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route
            element={<RutaProtegida isAllowed={isAuth} redirectTo={"/login"} />}
          >
            <Route
              element={
                <AluminioProvider>
                  <main className="flex gap-2 h-full">
                    <Sidebar />
                    <Outlet />
                  </main>
                </AluminioProvider>
              }
            >
              <Route path="productos" element={<Productos />} />
              <Route path="perfiles" element={<Productos />} />
              <Route path="accesorios" element={<Productos />} />
              <Route path="home" element={<Home />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
