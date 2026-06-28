import { createBrowserRouter } from 'react-router-dom';

// * Layouts
import MainLayout from '../layouts/MainLayout';
// * Pages 
import Home from '../pages/home/home';
import News from '../pages/news/news';
import Contact from '../pages/contact/contact';
import Academy from '../pages/academy/academy';
import Membership from '../pages/fans/membership';
// * 404 Not found
import NotFound from '../pages/NotFound';
// * Roster
import Mens from '../pages/roster/mens';
import Womens from '../pages/roster/womens';
// * The Club
import Presidency from '../pages/club/presidency';
import Club from '../pages/club/club';
import Identity from '../pages/club/identity';
import Sponsors from '../pages/club/sponsors';
// * History
import History from '../pages/history/history';
import Honours from '../pages/history/honours';
// * Media
import Media from '../pages/media/media';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, 
    children: [
      // * Main pages
        { index: true, element: <Home /> }, 
        { path: 'news', element: <News /> }, 
        { path: 'contact', element: <Contact /> }, 
        { path: 'academy', element: <Academy /> }, 
        { path: 'fans', element: <Membership /> }, 
        // * Multimedia
        { path: 'media', element: <Media /> }, 
        // * History 
        { path: 'history', element: <History /> }, 
        { path: 'history/honours', element: <Honours /> }, 
        // * Club 
        { path: 'club', element: <Club /> }, 
        { path: 'club/identity', element: <Identity /> }, 
        { path: 'club/presidency', element: <Presidency /> }, 
        { path: 'club/sponsors', element: <Sponsors /> }, 
        // * Roster 
        { path: 'mens', element: <Mens /> },
        { path: 'womens', element: <Womens /> },
        // * 404 
        { path: '*', element: <NotFound /> },
    ],
  },
]);