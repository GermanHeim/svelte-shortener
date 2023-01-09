import { redirect, error } from '@sveltejs/kit';

export const load = async ({ params, locals }) => {
    const slug = params.slug;
    const link = await locals.pb.collection('links').getFullList(undefined, { filter: `slug = "${slug}"` });
    if (link) {
        throw redirect(303, link[0].redirect);
    } else {
        throw error(404, 'Page not found');
    }
};