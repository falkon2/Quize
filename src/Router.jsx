import {Route, Routes} from 'react-router-dom';
import AdminDashboardPage from './pages/AdminDashboardPage';
import StudentDashboardPage from './pages/StudentDashboardPage';
// import Welcome from './Welcome'
import Home from './pages/Home';
import AdminLoginPage from './pages/AdminLoginPage'
import QuizPage from './pages/QuizFormPage';
import TestView from './pages/TestView';
import TestViewStudent from './pages/TestViewStudent';
import PreviewQuiz from "./components/QuizPreview"
import EditQuiz from "./components/EditQuiz"
import NotFound from './pages/NotFound';
import Results from './pages/Results';
import ResultsStudent from './pages/ResultsStudent';
import Profile from './pages/Profile';
import ProtectedRouter from './components/ProtectedRouter';
import ProtectedRouterStudent from './components/ProtectedRouterStudent';
import StudentQuiz from './components/StudentQuiz';
import ViewQuizResult from './components/ViewQuizResult';
import IndividualResult from './pages/StudentResultIn'
import PasswordForget from './pages/PasswordForget';


function Router() {
    const name = localStorage.getItem('name')
    return (
        <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<AdminLoginPage />} />
            <Route path="/ForgetPassword" element={<PasswordForget/>} />
            <Route path={`/${name}/profile`} element={<Profile />} />

            <Route element={<ProtectedRouter />}>
                <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
                <Route path="/edit-quiz" element={<EditQuiz />} />
                <Route path="/prev-quiz" element={<PreviewQuiz />} />
                <Route path="/create-quiz" element={<QuizPage />} />
                <Route path={`/test-view`} element={<TestView />} />
                <Route path="/results" element={<Results />} />
                <Route path="/individual-results" element={<IndividualResult />} />
                
            </Route>

            <Route element={<ProtectedRouterStudent />}>
                <Route path="/user-dashboard" element={<StudentDashboardPage />} />
                <Route path={`/${name}/test-view`} element={<TestViewStudent />} />
                <Route path={`/${name}/result`} element={<ResultsStudent />} />
                <Route path={`/${name}/ViewQuizResult`} element={<ViewQuizResult />} />
                <Route path={`/start-quiz`} element={<StudentQuiz />} />

            </Route>


        </Routes>
    )
}

export default Router;