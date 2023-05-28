import React from 'react';
import { techs } from '_constants/constants';
import { useTranslation } from 'react-i18next';

export default function AboutProject() {
  const { t } = useTranslation();
  return (
    <section className="flex justify-between flex-col p-x-6 my-16">
      <h2 className="text-3xl md:text-4xl pb-6 font-mono text-dark-blue">
        {t('welcomePage.about.title')}
      </h2>
      <div className="text-xl leading-8 flex gap-6 flex-col">
        <p>{t('welcomePage.about.aboutApp')}</p>
        <p>
          {t('welcomePage.about.queries')}
          <a
            className="text-dark-blue"
            href="https://studio.apollographql.com/public/rick-and-morty-a3b90u/variant/current/home"
          >
            {t('welcomePage.about.apiName')}
          </a>
          {t('welcomePage.about.aboutApi')}
        </p>
        <p>{t('welcomePage.about.aboutStyles')}</p>
        <p>{t('welcomePage.about.overall')}</p>
        <p>{t('welcomePage.about.aboutCourse')}</p>
      </div>
      <div>
        <h2 className="text-3xl mt-16 md:text-4xl pb-8 font-mono text-dark-blue">
          {t('welcomePage.technologies.title')}
        </h2>
        <div className="flex gap-10 flex-col md:flex-row items-center justify-center">
          {techs.map((item, index) => {
            return (
              <div key={index} className="bg-light-gray p-3 rounded-lg">
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
