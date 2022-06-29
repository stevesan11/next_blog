import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/global.css";
import Layout from "@/components/layout/Layout";

// if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
// 	const { worker } = require("../public/__mocks__/browser");
// 	worker.start();
// }

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
