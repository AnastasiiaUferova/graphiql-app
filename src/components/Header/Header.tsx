import React, { useEffect, useState } from 'react';
import Logo from '../../assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import SignOutButton from './SignOutButton';
import { WHITE_HEADER, GRAY_HEADER } from '../../_constants/constants';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [className, setClassName] = useState<string>(GRAY_HEADER);
  const [user] = useAuthState(auth);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setClassName(WHITE_HEADER);
      } else setClassName(GRAY_HEADER);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className={className}>
      <nav className="flex justify-between mx-w-screen-xl">
        <NavLink to="/">
          <img className="h-16" src={Logo} />
        </NavLink>
        <div className="flex gap-3 justify-between items-center">
          <div className="gap-3 mr-8 flex">
            <button
              onClick={() => changeLanguage('en')}
              className="hover:opacity-50 focus:text-regular-blue"
            >
              {t('header.en')}
            </button>
            <button
              onClick={() => changeLanguage('ru')}
              className="hover:opacity-60 focus:text-regular-blue"
            >
              {t('header.ru')}
            </button>
          </div>
          {user && (
            <NavLink
              className={({ isActive }) => (isActive ? 'text-regular-blue' : 'text-black')}
              to="/main"
            >
              <div className="text-lg p-2 hover:text-regular-blue">{t('header.mainPage')}</div>
            </NavLink>
          )}
          {!user ? (
            <>
              <NavLink to="/sign-in">
                <button className="text-sm px-2 md:py-2 md:px-4 hover:bg-light-blue hover:text-black text-white h-10 bg-dark-blue rounded-md">
                  {t('header.signInButton')}
                </button>
              </NavLink>
              <NavLink to="/sign-up">
                <button className="text-sm px-2 md:py-2 md:px-4 hover:bg-gray-400 hover:text-black text-white h-10 bg-gray-700 rounded-md">
                  {t('header.signUpButton')}
                </button>
              </NavLink>
            </>
          ) : (
            <SignOutButton onClick={handleSignOut} />
          )}
        </div>
      </nav>
    </header>
  );
}
