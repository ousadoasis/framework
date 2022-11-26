const tuned = require('tuned');
const Tuned = new tuned.Tuned();


/**
 * Tuned API Connector
 * This connector is used to connect to the Tuned API
 */
const getTuned = (config) => {
  const tunedConfig = get(config, 'tuned', {});
  const tunedClient = Tuned;
  return tunedClient;
}

export default getTuned;