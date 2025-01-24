import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'give-weather-2u',
  webDir: 'www',
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  }
};

export default config;
