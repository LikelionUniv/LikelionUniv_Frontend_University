import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--subtitle-20-bold: Roboto;

/* font sizes */
--subtitle-16-bold-size: 1rem;
--subtitle-20-bold-size: 1.25rem;
--body-14-medium-size: 0.88rem;
--body-12-bold-size: 0.75rem;
--title-24-bold-size: 1.5rem;
--title-48-bold-size: 3rem;
--title-28-bold-size: 1.75rem;

/* Colors */
--white: #fff;
--grey-200: #f2f4f6;
--grey-300: #eaecee;
--grey-900: #212224;
--color-darkorange: #ff7710;
--grey-800: #4d5359;
--grey-700: #868c94;

/* Gaps */
--gap-9xs: 0.25rem;
--gap-base: 1rem;
--gap-21xl: 2.5rem;
--gap-5xs: 0.5rem;

/* Paddings */
--padding-5xs: 0.5rem;
--padding-xl: 1.25rem;

/* Border radiuses */
--br-xl: 20px;
--br-12xs-5: 0.5px;
--br-5xs: 8px;

}
`;
