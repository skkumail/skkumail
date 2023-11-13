import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--input-placeholder: Inter;
--font-roboto: Roboto;
--font-droid-sans: 'Droid Sans';
--font-secular-one: 'Secular One';

/* font sizes */
--input-placeholder-size: 1rem;
--input-label-size: 0.75rem;
--font-size-13xl: 2rem;
--font-size-xl: 1.25rem;
--font-size-3xs: 0.63rem;
--font-size-sm: 0.88rem;
--font-size-5xs: 0.5rem;
--font-size-5xl: 1.5rem;
--font-size-lg: 1.13rem;
--font-size-smi: 0.81rem;
--font-size-3xl: 1.38rem;

/* Colors */
--white: #ffffff;
--color-white: #ffffff;
--grey: #dde2e5;
--input-defaultbackground: rgba(239, 241, 249, 0.6);
--color-darkgray-100: #b2b2b2;
--black-2: #abafb1;
--black-4: #5e6366;
--color-black: #000;
--color-darkseagreen: #88a788;
--gray: #c3c8dd;
--dark: #060a18;
--color-gray: rgba(0, 0, 0, 0.8);
--color-gray-100: rgba(255, 255, 255, 0.2);
--primary-light: #2a46a9;
--black-1: #cfd3d4;
--primary: #5570f1;
--green: #32936f;
--black-5: #2b2f32;
--color-midnightblue: #0f194a;
--color-yellow: #ffeb00;

/* Gaps */
--gap-5xs: 0.5rem;
--gap-base: 1rem;
--gap-3xs: 0.63rem;
--gap-11xs: 0.13rem;
--gap-8xs: 0.31rem;

/* Paddings */
--padding-18xl: 2.31rem;
--padding-24xl: 2.69rem;
--padding-5xs: 0.5rem;
--padding-base: 1rem;
--padding-9xs: 0.25rem;
--padding-mid: 1.06rem;
--padding-11xs: 0.13rem;
--padding-3xs: 0.63rem;

/* Border radiuses */
--br-xl: 20px;
--br-5xs: 8px;
--br-xs: 12px;
--br-21xl: 40px;
--br-9xs: 4px;
--br-481xl: 500px;
--br-980xl: 999px;
--br-mini: 15px;
--br-6xl: 25px;
--br-8xs: 5px;

}
`;
