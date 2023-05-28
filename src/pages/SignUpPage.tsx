import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useTranslation } from 'react-i18next';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { t } = useTranslation();
  useEffect(() => {
    if (user) {
      navigate('/main');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const validatePassword = () => {
    let isValid = true;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (password !== '' && confirmPassword !== '' && password !== confirmPassword) {
      isValid = false;
      setErrorMessage(t('signUp.doesntMatchError') as string);
    } else if (!passwordRegex.test(password)) {
      isValid = false;
      setErrorMessage(t('signUp.invalidPasswordError') as string);
    }

    return isValid;
  };

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validatePassword()) {
      return;
    }
    setErrorMessage('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e: unknown) {
      console.error(e);
      setErrorMessage('Sign up error. Try again');
      return;
    }
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="flex items-center justify-center mt-10 mb-10">
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            {t('signUp.title')}
          </h1>
          <form className="space-y-4 md:space-y-6 " action="#" onSubmit={register}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                {t('signUp.name')}
              </label>
              <input
                type="name"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                {t('signUp.email')}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                {t('signUp.password')}
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {t('signUp.confirmPassword')}
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              />
            </div>
            {errorMessage && <div className="text-red-600">{errorMessage}</div>}
            <button
              type="submit"
              className="w-full text-white bg-dark-blue hover:bg-light-blue hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {t('signUp.button')}
            </button>
            <p className="text-sm font-light text-gray-500">
              {t('signUp.haveAccount')}
              <Link to="/sign-in" className="font-medium text-blue-600 hover:underline p-2">
                {t('signUp.login')}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
