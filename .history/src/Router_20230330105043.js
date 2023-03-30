import {Routes, Route} from 'react-router-dom';
import AdminDashboardPage from './pages/AdminDashboardPage';
import StudentDashboardPage from './pages/StudentDashboardPage';
import Welcome from './Welcome'
import AdminLoginPage from './pages/AdminLoginPage'
import QuizPage from './pages/QuizFormPage';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/Login" element={<AdminLoginPage/>} />
            <Route path="/admin-dashboard" element={<AdminDashboardPage/>} />
            <Route path="/user-dashboard" element={<StudentDashboardPage/>} />
            <Route path="/create-quiz" element={<QuizPage/>} />
        </Routes>
    )
}

export default Router;