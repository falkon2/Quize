import {Routes, Route} from 'react-router-dom';
import AdminDashboardPage from './pages/AdminDashboardPage';
import StudentDashboardPage from './pages/StudentDashboardPage';
import Welcome from './Welcome'
import AdminLoginPage from './pages/AdminLoginPage'
import QuizPage from './pages/QuizFormPage';
import TestView from './pages/TestView';
import PreviewQuiz from "./components/QuizPreview"
import EditQuiz from "./components/EditQuiz"
import NotFound from './pages/NotFound';
import TeachersStudentView from './pages/TeachersStudentView';
import Profile from './pages/Profile';
function Router() {
    //here firebase needs to be implemented for dynamic routing for user profile
    const name = localStorage.getItem('name')

    return (
        <Routes>
            <Route path='*' element={<NotFound />}/>
            <Route path="/" element={<Welcome/>} />
            <Route path="/Login" element={<AdminLoginPage/>} />
            <Route path="/student-result" element={<TeachersStudentView />} />
            <Route path="/admin-dashboard" element={<AdminDashboardPage/>} />
            <Route path="/test-view" element={<TestView />} />
            <Route path="/user-dashboard" element={<StudentDashboardPage/>} />
            <Route path="/create-quiz" element={<QuizPage/>} />
            <Route path="/prev-quiz" element={<PreviewQuiz/>} />
            <Route path="/edit-quiz" element={<EditQuiz/>} />
            <Route path={`/${name}/profile`} element={<Profile />} />
        </Routes>
    )
}

export default Router;