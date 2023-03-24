import {Routes, Route} from 'react-router-dom';
import AdminDashboardPage from './pages/AdminDashboardPage';
import StudentDashboardPage from './pages/StudentDashboardPage';
import Welcome from './Welcome'
import AdminLoginPage from './pages/AdminLoginPage'
import StudentLoginPage from './pages/StudentLoginPage'
function Router() {
    return (
        <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/user-login" element={<StudentLoginPage/>} />
            <Route path="/admin-login" element={<AdminLoginPage/>} />
            <Route path="/admin-dashboard" element={<AdminDashboardPage/>} />
            <Route path="/user-dashboard" element={<StudentDashboardPage/>} />
        </Routes>
    )
}

export default Router;