import { authors } from '_constants/authors';
import { GRAY_HEADER } from '_constants/constants';
import { Author } from './Author';
import { useTranslation } from 'react-i18next';

const FOOTER = GRAY_HEADER.replace('box', 'flex').concat(
  ' pb-2 justify-between items-center bottom-0 flex-col md:flex-row gap-4'
);

export const Footer = () => {
  const { t } = useTranslation();

  const translatedAuthors = authors.map((author) => ({
    name: t(`footer.devs.${author.name}`),
    gh_link: author.gh_link,
  }));

  return (
    <footer className={FOOTER}>
      <a href="https://rs.school/react/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://rs.school/images/rs_school_js.svg"
          alt="logo"
          className="w-32 hover:scale-110 duration-300 max-md:w-24"
        />
      </a>
      <div className="space-x-2 inline-flex flex flex-col md:flex-row gap-4">
        {translatedAuthors.map((author) => (
          <Author key={author.gh_link} {...author} />
        ))}
      </div>
      <div className="font-semibold text-lg">© 2023</div>
    </footer>
  );
};
