import { createGlobalStyle } from 'styled-components'

import RegularWoff2 from 'assets/fonts/Inter/inter-v12-latin-regular.woff2'
import RegularWoff from 'assets/fonts/Inter/inter-v12-latin-regular.woff'

import BoldWoff2 from 'assets/fonts/Inter/inter-v12-latin-700.woff2'
import BoldWoff from 'assets/fonts/Inter/inter-v12-latin-700.woff'

import LightWoff from 'assets/fonts/Inter/inter-v12-latin-300.woff'
import LightWoff2 from 'assets/fonts/Inter/inter-v12-latin-300.woff2'

export const FontStyles = createGlobalStyle`
  /* inter-regular - latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: local('Inter'),
      url(${RegularWoff2})
        format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${RegularWoff})
        format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* inter-700 - latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    src: local('Inter'),
      url(${BoldWoff2}) format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${BoldWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    src: local('Inter'),
    url(${LightWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    url(${LightWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
`
