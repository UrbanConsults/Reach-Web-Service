

// developer does this, this version is used on server
export default {
    get_user_by_id: async (args, here) => {

    }
}

type AsyncFunction<A,O> = (args: A) => Promise<O> 
type AuthFunction<A> = (args: A, token: any) => boolean

function auth<A, O>(authCB: AuthFunction<A>, cb: AsyncFunction<A, O>): AsyncFunction<A, O> {
    return cb;
}

const services = {
    get_user_by_id: auth((args, token) => {
        return true;
    }, async (args: {name: string}) => {
        return 2;
    })
};

async function main() {
    const user = await services.get_user_by_id({name: "string"});

}
const do_request = (id) => {
    return (...args) => {
        /* talk to server */
    }
}

// client side gets this
{
    get_user_by_id: do_request(1)
}