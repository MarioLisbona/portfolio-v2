import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
        @font-face {
            font-family: 'RobotoSlab';
            src: local('RobotoSlab Bold'), local('RobotoSlab-Bold'),
                url('/fonts/RobotoSlab-Bold.ttf') format('truetype');
            font-weight: bold;
            font-style: normal;
        }

        @font-face {
            font-family: 'Montserrat';
            src: local('Montserrat Regular'), local('Montserrat-Regular'),
                url('/fonts/Montserrat-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
        }
      `}
  />
);

export default Fonts;
