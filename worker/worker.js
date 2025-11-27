export default {
  async fetch(request, env) {
    // Try to serve static files from /build
    const res = await env.ASSETS.fetch(request);

    // If the asset exists, return it
    if (res.status !== 404) return res;

    // Else serve the SPA entrypoint
    return env.ASSETS.fetch(new Request("/index.html"));
  }
};
