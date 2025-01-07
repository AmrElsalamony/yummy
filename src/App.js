import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import Area from './Components/Area/Area';
import Ingredients from './Components/Ingredients/Ingredients';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import CategoryItem from './Components/CategoryItem/CategoryItem';
import MealDetails from './Components/MealDetails/MealDetails';
import AreaItem from './Components/AreaItem/AreaItem';
import IngredientsItem from './Components/IngredientsItem/IngredientsItem';




let x = createBrowserRouter([
  {
  path: '/', element: <Layout />, children: [
    { path: '/', index: true, element: <Home /> },
    { path: '/search', element: <Search /> },
    { path: '/area', element: <Area /> },
    { path: '/ingredients', element: <Ingredients /> },
    { path: '/ingredientsItem/:id', element: <IngredientsItem /> },
    { path: '/categoryitem/:id', element: <CategoryItem /> },
    { path: '/mealdetails/:id', element: <MealDetails /> },
    { path: '/areaItem/:id', element: <AreaItem /> },
    { path: '/contact', element: <Contact /> },
    { path: '*', element: <NotFound /> },

  ]
}])

function App() {
  return <>
    <RouterProvider router={x} />
  </>
}

export default App;
