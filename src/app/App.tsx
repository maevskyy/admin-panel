import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from '../modules'
import './css/reset.css';

function Home() {
    return <h1>Home Page</h1>;
}

function About() {
    return <h1>About Page</h1>;
}

function NotFound() {
    return <h1>404 - Page Not Found</h1>;
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                {/* Маршрут для всех несуществующих страниц */}
                <Route path="*" element={<NotFound />} />

            </Routes>
        </Router>
    );
}

export default App;
