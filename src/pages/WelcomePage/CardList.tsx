import React from 'react';
import DevCard from './DevCard';
import { devs } from '_constants/constants';
import { useTranslation } from 'react-i18next';

export default function CardList() {
  const { t } = useTranslation();

  const translatedDevs = devs.map((dev) => ({
    name: t(`welcomePage.developers.devs.${dev.name}`),
    pic: dev.pic,
    gh: dev.gh,
    ln: dev.ln,
    text: t(`welcomePage.developers.devs.${dev.text}`),
  }));
  return (
    <div className="grid grid-cols-1 gap-8 mt-4 md:grid-cols-2 lg:grid-cols-3">
      {translatedDevs.map((item, index) => {
        return (
          <DevCard
            key={index}
            text={item.text}
            pic={item.pic}
            name={item.name}
            ln={item.ln}
            gh={item.gh}
          />
        );
      })}
    </div>
  );
}
