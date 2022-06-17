import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/global.css";
import Layout from "@/components/layout/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Layout>
				<Head>
					<title>Blog Space</title>
				</Head>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
