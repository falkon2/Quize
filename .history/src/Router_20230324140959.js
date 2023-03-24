import {Routes, Route} from 'react-router-dom';
import AdminDashboardPage from './pages/AdminDashboardPage';
import StudentDashboardPage from './pages/StudentDashboardPage';
import Welcome from './Welcome'
import LoginPage from './pages/LoginPage'
function Router() {
    return (
        <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/admin-dashboard" element={<AdminDashboardPage/>} />
            <Route path="/user-dashboard" element={<StudentDashboardPage/>} />
        </Routes>
    )
}

export default Router;