export const environment = {
  ApiHost: 'ec2-3-132-102-209.us-east-2.compute.amazonaws.com',
  smartAuth: {
    clientId: 'fake_client_id',
    fhirScope: 'launch profile openid online_access patient/Patient.read patient/Observation.read patient/MedicationRequest.*',
    redirectUri: 'https://jcespedes97.github.io/38-384mvwWERf9w/',
  },
  smartLauncherUrls: {
    provider:
      'https://launch.smarthealthit.org/?launch_url=https%3A%2F%2Fjcespedes97.github.io/38-384mvwWERf9w/%2Flaunch%3FlaunchType%3Dprovider&launch=WzEsIiIsIiIsIkFVVE8iLDAsMCwwLCIiLCIiLCIiLCIiLCIiLCIiLCIiLDAsMSwiIl0',
    patient:
      'https://launch.smarthealthit.org/?launch_url=https%3A%2F%2Fjcespedes97.github.io/38-384mvwWERf9w/%2Flaunch%3FlaunchType%3Dpatient&launch=WzEsIiIsIiIsIkFVVE8iLDAsMCwwLCIiLCIiLCIiLCIiLCIiLCIiLCIiLDAsMSwiIl0',
  },
};
