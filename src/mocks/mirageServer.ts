import {createServer} from 'miragejs';
import authRequest from "@/mocks/requests/auth";

export function makeServer({environment = 'development'} = {}) {
    return createServer({
        environment,

        routes() {
            this.namespace = '/api/v1'

            authRequest(this)
        },
    });
}
