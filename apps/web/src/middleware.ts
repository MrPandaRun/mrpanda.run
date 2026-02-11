import { defineMiddleware } from "astro:middleware";

const ROOT_HOST = "mrpanda.run";
const WWW_HOST = "www.mrpanda.run";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  if (url.hostname === ROOT_HOST) {
    url.hostname = WWW_HOST;
    return Response.redirect(url.toString(), 301);
  }

  return next();
});
