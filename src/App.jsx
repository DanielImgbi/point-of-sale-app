import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="w-screen h-screen overflow-hidden">
      <Outlet />
    </main>
  );
}

export default App;
