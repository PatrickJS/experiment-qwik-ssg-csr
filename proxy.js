// proxy.ts
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router.all("/(.*)", async (context) => {
  const destinationUrl = `http://localhost:4173/${context.params[0]}`;
  const fetchResponse = await fetch(destinationUrl, {
    method: context.request.method,
    headers: context.request.headers,
  });

  // Create a new Headers object for the Oak response
  const headers = new Headers();
  for (const [key, value] of fetchResponse.headers) {
    headers.set(key, value);
  }

  context.response.status = fetchResponse.status;
  context.response.headers = headers;

  if (fetchResponse.body) {
    // Oak handles the body as a Uint8Array or as a stream.
    const body = new Uint8Array(await fetchResponse.arrayBuffer());
    context.response.body = body;
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 3000 });
