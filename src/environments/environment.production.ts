export const environment = {
  ApiHost: 'http://ec2-3-142-142-75.us-east-2.compute.amazonaws.com',
  smartAuth: {
    clientId: 'fake_client_id',
    fhirScope: 'launch profile openid online_access patient/Patient.read',
    redirectUri: 'https://jcespedes97.github.io/38-384mvwWERf9w/',
  },
  smartLauncherUrls: {
    provider:
      'https://launch.smarthealthit.org/?launch_url=http%3A%2F%2Fhttps://jcespedes97.github.io/38-384mvwWERf9w/%2Flaunch%3FlaunchType%3Dprovider&launch=WzEsIiIsIiIsIkFVVE8iLDAsMCwwLCIiLCIiLCIiLCIiLCIiLCIiLCIiLDAsMSwiIl0',
    patient:
      'https://launch.smarthealthit.org/?launch_url=http%3A%2F%2Fhttps://jcespedes97.github.io/38-384mvwWERf9w/%2Flaunch%3FlaunchType%3Dpatient&launch=WzEsIiIsIiIsIkFVVE8iLDAsMCwwLCIiLCIiLCIiLCIiLCIiLCIiLCIiLDAsMSwiIl0',
  },
};
