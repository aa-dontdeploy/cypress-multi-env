const { defineConfig } = require("cypress");
const fs = require("fs");

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			const envConfig = JSON.parse(fs.readFileSync(`cypress-env-config.json`));
			const envToUse = config.env.PROJECT_ENV || "development";

			if (!envConfig[envToUse]) {
				throw new Error(
					`Invalid PROJECT_ENV value: ${envToUse}. 
						Please provide a valid environment.`
				);
			}

			return envConfig[envToUse];
		},
	},
});
