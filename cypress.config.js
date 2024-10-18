const { defineConfig } = require("cypress");
const fs = require("fs");

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			const envToUse = config.env.CYPRESS_ENV || "development";
			const envConfig = JSON.parse(fs.readFileSync(`cypress-env-config.json`));
			return envConfig[envToUse];
		},
	},
});
