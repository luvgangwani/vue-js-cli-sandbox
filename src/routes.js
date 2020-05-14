import addBlog from "./components/AddBlog";
import showBlogs from './components/ShowBlogs';

export default [
    {
        path: '/',
        component: showBlogs
    },
    {
        path: '/add',
        component: addBlog
    }
]