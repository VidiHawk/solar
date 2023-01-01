import Head from "next/head";

const Seo = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>{pageTitle && `${pageTitle} - Tera Power`}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="keywords"
        content="power plant, renewable energy, database, agent, broker, business, corporate, directory, listing power plants, subscribe packages"
      />
      <meta
        name="description"
        content="Tera Power - The Power Plant Marketplace"
      />
      <meta name="ibthemes" content="ATFN" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="favicon.ico" />
    </Head>
  </>
);

export default Seo;
