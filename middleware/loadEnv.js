import config from '@/config';

export default function ({isServer, context, store, env}) {
    // if(!isServer) {
        store.commit('setEnvironmentVariables', config);
    // }
}