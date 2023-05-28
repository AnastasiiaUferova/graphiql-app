import { FC } from 'react';
import gh_logo from 'assets/gh-logo.png';

export const Author: FC<{ name: string; gh_link: string }> = ({ name, gh_link }) => (
  <a
    href={gh_link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center hover:-translate-y-1 duration-300"
  >
    <img src={gh_logo} alt="gh-logo" className="w-8" />
    <span className="text-dark-blue text-lg max-md:text-sm font-semibold hover:opacity-50">
      {name}
    </span>
  </a>
);
