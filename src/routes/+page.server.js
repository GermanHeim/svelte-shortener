import { redirect, error } from '@sveltejs/kit';
import { validURL, generateRandomSlug } from '$lib/utils';

const reservedSlugs = ['login', 'generated'];

export const load = ({ locals }) => {
    if (!locals.user) {
        throw redirect(303, '/login');
    }
};

export const actions = {
	shorten: async ({ request, locals }) => {
        const body = await request.formData();

        if (!body.get('redirect').startsWith('http' || 'https')) {
            body.set('redirect', `https://${body.get('redirect')}`);
        }

        if (!validURL(body.get('redirect'))) {
            throw error(400, 'Invalid URL');
        }

        if (!body.get('slug')) {
            body.set('slug', generateRandomSlug());
        }

        if (body.get('slug').includes('/')) {
            body.set('slug', body.get('slug').replace('/', '-'));
        }

        if (reservedSlugs.includes(body.get('slug'))) {
            throw error(400, 'Slug is reserved');
        }

        const data = {
            "slug": body.get('slug'),
            "redirect": body.get('redirect')
        };

        try {
            await locals.pb.collection('links').create(data);
        } catch (err) {
            console.log('Error: ', err);
            throw error(500, err);
        }
        
        throw redirect(303, `/generated/${body.get('slug')}`);
    }
};