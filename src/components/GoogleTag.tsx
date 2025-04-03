import React from "react";
import { Helmet } from "react-helmet";

const GoogleTag: React.FC = () => {
  return (
    <Helmet>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16585862288"
      ></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16585862288');
        `}
      </script>
    </Helmet>
  );
};

export default GoogleTag;
