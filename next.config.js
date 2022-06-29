module.exports = {
	webpack(config) {
		config.module.rules.push(
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: ["@svgr/webpack"],
			},
			{
				test: /\.md$/i,
				use: "raw-loader",
			}
		);
		return config;
	},
	images: {
		domains: ["i.imgur.com"],
	},
};
