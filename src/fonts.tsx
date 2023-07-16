import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
        @font-face {
            font-family: 'Magistral';
            src: url('/fonts/Magistral-Bold.eot');
            src: local('Magistral Bold'), local('Magistral-Bold'),
                url('public/fonts/Magistral-Bold.eot?#iefix') format('embedded-opentype'),
                url('/fonts/Magistral-Bold.woff2') format('woff2'),
                url('/fonts/Magistral-Bold.woff') format('woff'),
                url('/fonts/Magistral-Bold.ttf') format('truetype');
            font-weight: bold;
            font-style: normal;
        }

        @font-face {
            font-family: 'Poppins';
            src: url('/fonts/Poppins-Regular.eot');
            src: local('Poppins Regular'), local('Poppins-Regular'),
                url('/fonts/Poppins-Regular.eot?#iefix') format('embedded-opentype'),
                url('/fonts/Poppins-Regular.woff2') format('woff2'),
                url('/fonts/Poppins-Regular.woff') format('woff'),
                url('/fonts/Poppins-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
        }
      `}
  />
);

export default Fonts;
