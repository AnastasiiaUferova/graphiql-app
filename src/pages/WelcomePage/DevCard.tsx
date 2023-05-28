import React, { FC } from 'react';
import GitHubLogo from '../../assets/GithubLogo.png';
import LinkedInLogo from '../../assets/LinkedInIcon.svg';
import { Dev } from '../../types/types';

const DevCard: FC<Dev> = (props: Dev) => {
  const { name, pic, text, ln, gh } = props;

  return (
    <div className="flex flex-col items-center gap-6 border-2 border-light-gray shadow-md p-4 rounded-2xl">
      <div
        className="border-2 rounded-2xl h-80 w-full bg-center bg-cover"
        style={{ backgroundImage: `url(${pic})` }}
      ></div>
      <h3 className="font-semibold text-2xl text-center">{name}</h3>
      <a
        className="text-lg hover:opacity-50 flex items-center"
        href={gh}
        target="_blank"
        rel="noreferrer"
      >
        Github
        <img className="ml-1.5 w-8 h-8" src={GitHubLogo}></img>
      </a>
      <a
        className="text-lg hover:opacity-50 flex items-center"
        href={ln}
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
        <img className="ml-1.5 w-8 h-8" src={LinkedInLogo}></img>
      </a>
      <p className="text-xl leading-8 text-center">{text}</p>
    </div>
  );
};

export default DevCard;

//  <img className="w-80 h-3/5 self-center rounded max-w-full align-middle" src={pic}></img>
