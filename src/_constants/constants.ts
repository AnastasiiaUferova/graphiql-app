export const WHITE_HEADER =
  'z-20 sticky trasition ease-in-out duration-500 shadow-xl left-0 top-0 w-full m-0 bg-white m-0 pt-3 box px-24 max-md:px-2';
export const GRAY_HEADER = 'w-full m-0 bg-light-gray m-0 pt-3 box px-24 max-md:px-2';
import AnastasiaPic from '../assets/Anastasia.jpg';
import AnnaPic from '../assets/Anna.jpeg';
import SergijPic from '../assets/Sergij.jpeg';
import { Dev } from '../types/types';

export const techs = [
  'React.JS',
  'GraphQL',
  'Tailwind CSS',
  'Firebase',
  'TypeScript',
  'CodeMirror',
];

export const devs: Dev[] = [
  {
    name: 'Anastasiia Iuferova',
    pic: AnastasiaPic,
    gh: 'https://github.com/AnastasiiaUferova',
    ln: 'https://www.linkedin.com/in/anastasiia-iuferova-frontend-dev/',
    text: "I'm a Frontend Developer with 1 year of experience, committed to delivering user-friendly solutions. Skilled in a range of web development technologies including TypeScript, React.js, REST API, Redux Toolkit and CSS/SCSS. Passionate about building web apps from scratch and enhancing existing ones. Always looking for opportunities to sharpen my skills. Based in Warsaw, Poland.",
  },
  {
    name: 'Hanna Biruk',
    pic: AnnaPic,
    gh: 'https://github.com/anna-biruk',
    ln: 'https://www.linkedin.com/in/anna-biruk/',
    text: "I'm a Frontend Engineer based in Warsaw, Poland. I specialize in React, Redux, TypeScript, and JavaScript, creating web experiences that truly captivate users. I love solving problems and keeping up with the latest tech trends. Collaboration is important to me, as it brings fresh ideas and leads to great results. When I'm not coding, I explore the tech community for inspiration and to fuel my creative solutions.",
  },
  {
    name: 'Sergij Kusyy',
    pic: SergijPic,
    gh: 'https://github.com/sak74',
    ln: 'https://www.linkedin.com/in/serhiy-kusyy/',
    text: "I'm a Junior Frontend Developer from Częstochowa (Poland) with a passion for creating engaging web experiences. I specialize in JS, TS, React.js, and Angular partly. I am open to new challenges and excited about the opportunity as a professional front-end developer.",
  },
];
