/**
 * Create and export configuration variables
 */

// Container for all the environments
var environments = {};

// Staging (default) environment
environments.staging = {
	httpPort: 3000,
	httpsPort: 3001,
	envName: 'staging',
	hashingSecret: 'thisIsASecret',
	maxChecks: 5,
	twilio: {
		accountSid: 'AC7a58296214dba8a58a1e3f3ad3129edf',
		authToken: 'e7f43def4079fc904f7597ad6643c030',
		fromPhone: '+12057281654',
	},
};

// Production environment
environments.production = {
	httpPort: 5000,
	httpsPort: 5001,
	envName: 'production',
	hashingSecret: 'thisIsAlsoASecret',
	maxChecks: 5,
	twilio: {
		accountSid: 'AC7a58296214dba8a58a1e3f3ad3129edf',
		authToken: 'e7f43def4079fc904f7597ad6643c030',
		fromPhone: '+12057281654',
	},
};
// Determine which environment was passed as a command-line argument
var currentEnv = typeof process.env.NODE_ENV == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environments above, if not, default to staging
var environmentToExport = typeof environments[currentEnv] == 'object' ? environments[currentEnv] : environments.staging;

// Export the module
module.exports = environmentToExport;
