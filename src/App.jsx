import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from "./Components";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f0f4fa]">
      {/* Navbar */}
      <Navbar className="w-full" />

      <div className="flex flex-1">
        <main className="flex-1 overflow-y-auto">
          <Outlet />  {/* This will render the child routes */}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
