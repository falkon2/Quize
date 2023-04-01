import {Routes, Route} from 'react-router-dom';
import AdminDashboardPage from './pages/AdminDashboardPage';
import StudentDashboardPage from './pages/StudentDashboardPage';
import Welcome from './Welcome'
import AdminLoginPage from './pages/AdminLoginPage'
import QuizPage from './pages/QuizFormPage';
import TestView from './pages/TestView';
import PreviewQuiz from "./components/QuizPreview"
import EditQuiz from "./components/EditQuiz"
import Board from './components/Board';
import NotFound from './pages/NotFound';
function Router() {
    return (
        <Routes>
            <Route path='*' element={<NotFound />}/>
            <Route path="/" element={<Welcome/>} />
            <Route path="/Login" element={<AdminLoginPage/>} />
            <Route path="/admin-dashboard" element={<AdminDashboardPage/>} />
            <Route path="/admin-dashboard/test-view" element={<TestView />} />
            <Route path="/user-dashboard" element={<StudentDashboardPage/>} />
            <Route path="/create-quiz" element={<QuizPage/>} />
            <Route path="/leaderboard" element={<Board/>} />
            <Route path="/prev-quiz" element={<PreviewQuiz/>} />
            <Route path="/edit-quiz" element={<EditQuiz/>} />

        </Routes>
    )
}

export default Router;