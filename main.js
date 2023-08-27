import { Router } from "./router.ts";

const router = new Router();

router.get("/static/:path*", async ({ req, params }) => {
    const file = await Deno.open("./static/" + params.path, { read: true });

    const readableStream = file.readable;

    return new Response(readableStream);
});

Deno.serve((req) => {
    return router.route(req);
});
