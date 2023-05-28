import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignInForm from './pages/SignInPage';
import SignUpForm from './pages/SignUpPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import { Footer } from './components/footer';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-[calc(100vh_-_136px)]">
        <Routes>
          <Route path="/sign-in" element={<SignInForm />}></Route>
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
