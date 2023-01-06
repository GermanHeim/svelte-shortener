import { redirect, error } from '@sveltejs/kit';

// On load, check if there is a slug in the 'links' collection of pocketbase that matches the current page slug
// If there is, redirect to the redirect URL
// If there isn't, throw a 404 error
// q: why do I get GET method not allowed
// a: because I'm using the wrong method in the form
export const load = async ({ params, locals }) => {
    const slug = params.slug;
    console.log(slug);
    // get one only accepts a record id, not a slug
    const link = await locals.pb.collection('links').getFullList(undefined, { filter: `slug = "${slug}"` });
    if (link) {
        throw redirect(303, link[0].redirect);
    } else {
        throw error(404, 'Page not found');
    }
};