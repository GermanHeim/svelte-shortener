import { redirect, error } from '@sveltejs/kit';
import { validURL } from '$lib/utils';

export const load = ({ locals }) => {
    if (!locals.user) {
        throw redirect(303, '/login');
    }
};

export const actions = {
	shorten: async ({ request, locals }) => {
        const body = await request.formData();

        if (!body.get('slug')) {
            body.set('slug', Math.random().toString(36).substr(2, Math.random() * (10 - 5) + 5));
        }

        if (!body.get('redirect').startsWith('http' || 'https')) {
            body.set('redirect', `https://${body.get('redirect')}`);
        }

        if (!validURL(body.get('redirect'))) {
            throw error(400, 'Invalid URL');
        }

        const data = {
            "slug": body.get('slug'),
            "redirect": body.get('redirect')
        };

        try {
            await locals.pb.collection('links').create(data);
        } catch (err) {
            console.log('Error: ', err);
            throw error(500, 'Something went wrong shortening the link');
        }
        
        throw redirect(303, `/generated/${body.get('slug')}`);
    }
};