import React from 'react';
import CoverImage from '../../assets/CoverImage.jpg';
import GitHubLogo from '../../assets/GithubLogo.png';
import { useTranslation } from 'react-i18next';

export default function Cover() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between flex-col p-6 items-center md:flex-row md:pt-0">
      <div className="flex gap-4 flex-col">
        <h1 className="text-4xl md:text-6xl font-mono">{t('welcomePage.cover.title')}</h1>
        <p className="text-2xl leading-10 text-dark-blue">{t('welcomePage.cover.description')}</p>
        <a
          className="text-lg hover:opacity-50 flex items-center"
          href="https://github.com/AnastasiiaUferova/graphiql-app"
          target="_blank"
          rel="noreferrer"
        >
          {t('welcomePage.cover.github')}
          <img className="ml-1.5 w-8 h-8" src={GitHubLogo}></img>
        </a>
      </div>
      <img className="md:w-1/2 w-96 h-1/2" alt="Cover image API" src={CoverImage}></img>
    </div>
  );
}
