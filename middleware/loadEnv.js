import config from '@/config';

export default function ({isServer, context, store, env}) {
    store.commit('setEnvironmentVariables', config);
}