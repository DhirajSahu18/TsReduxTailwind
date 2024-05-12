import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <HomePage/>
    </>,
  },
]);

function App() {
  return (
    <div className="App bg-[#1E1E1E] text-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
