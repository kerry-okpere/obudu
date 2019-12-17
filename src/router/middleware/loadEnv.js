import config from '@/config';

export default function loadEnv ({ next, store }){
  store.commit('setEnvironmentVariables', config);

  return next();
}