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
import ProtectedRouter from './components/ProtectedRouter';
import ProtectedRouterStudent from './components/ProtectedRouterStudent';
function Router() {
    const name = localStorage.getItem('name')

    return (
        <Routes>
            <Route path='*' element={<NotFound />}/>
            <Route path="/" element={<Welcome/>} />
            <Route path="/Login" element={<AdminLoginPage/>} />
            <Route path="/results" element={<TeachersStudentView />} />
            <Route path={`/${name}/profile`} element={<Profile />} />

            <Route element={<ProtectedRouter/>}>
                <Route path="/admin-dashboard" element={<AdminDashboardPage/>} />
                <Route path="/edit-quiz" element={<EditQuiz/>} />
                <Route path="/prev-quiz" element={<PreviewQuiz/>} />
                <Route path="/create-quiz" element={<QuizPage/>} />
                <Route path={`/${name}/test-view`} element={<TestView />} />

            </Route>

            <Route element={<ProtectedRouterStudent/>}>
                <Route path="/user-dashboard" element={<StudentDashboardPage/>} />
                <Route path={`/${name}/test-view`} element={<TestView />} />

            </Route>
            
            
        </Routes>
    )
}

export default Router;