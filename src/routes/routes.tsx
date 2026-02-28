import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import JobDetail from "../pages/JobDetail";
import Admin from "../pages/Admin";
import About from "../pages/About";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '', element: <Home /> },
            { path: 'jobs', element: <Jobs /> },
            { path: 'jobs/:id', element: <JobDetail /> },
            { path: 'admin', element: <Admin /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
        ],
    },
]);

export default router;
