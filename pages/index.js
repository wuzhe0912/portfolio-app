import Head from "next/head";
import Home from "@/components/Home";

export default function Entry() {
  return (
    <div className="wrapper">
      <Head>
        <title>Portfolio App</title>
        <meta name="description" content="Pitt Wu's Portfolio App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}
