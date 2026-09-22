import { minify, presets } from "html-minifier-next";
import { dev } from "$app/environment";

export async function handle({ event, resolve }) {
    let response = resolve(event);

    if (!dev) {
        response = await resolve(event, {
            transformPageChunk: ({ html }) =>
                minify(html, {
                    ...presets.comprehensive,
                    removeOptionalTags: false,
                }),
        });
    }

    return response;
}
