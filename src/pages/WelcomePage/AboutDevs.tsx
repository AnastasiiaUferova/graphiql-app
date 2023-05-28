import React from 'react';
import CardList from './CardList';
import { useTranslation } from 'react-i18next';

export default function AboutDevs() {
  const { t } = useTranslation();
  return (
    <section className="flex justify-between flex-col mb-16 p-x-6">
      <h2 className="text-3xl md:text-4xl pb-6 font-mono text-dark-blue">
        {t('welcomePage.developers.title')}
      </h2>
      <CardList />
    </section>
  );
}
