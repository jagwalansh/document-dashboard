import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { ApiProvider } from "./context/ApiContext";
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <ApiProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </HashRouter>
    </ApiProvider>
  );
}

export default App;