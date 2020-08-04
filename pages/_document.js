import Document, { Head, Main, NextScript } from "next/document";



export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="thumbnail" content="/static/avatar.jpg" />
          <meta name="description" content="Hi, I'm Hai! I'm a front end developer based in Saigon, VN. Have been programming for 2 years, I'm now looking for a new Front End developer opportunity at HCM city. " />
          <meta name="keywords" content="Ho Thanh Hai, Blackwolf0559, Front End developer, Frontend, Front-end, looking for job, opportunity, jobs in HCM, jobs in Saigon, software engineering, software engineer, Web developer" />
          <link rel="shortcut icon" href="/static/favicon.png" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap-grid.css" />
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}