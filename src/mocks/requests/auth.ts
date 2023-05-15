import {Response} from "miragejs";

export default function (server: any) {
    server.post('login', () => {
        return new Response(
            200,
            {},
            {
                id: 1,
                name: 'lucas',
                email: 'lucas@email.com',
                token: 'token',
                avatar: 'https://a.pinatafarm.com/620x454/a597c433f2/thumbs-up-rambo.jpg'
            });
    });
}
