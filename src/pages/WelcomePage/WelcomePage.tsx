import React from 'react';
import AboutProject from './AboutProject';
import AboutDevs from './AboutDevs';
import Cover from './Cover';

export default function WelcomePage() {
  return (
    <div className="w-full bg-white m-0 pt-3 box px-16 max-md:p-8">
      <Cover />
      <AboutProject />
      <AboutDevs />
    </div>
  );
}
