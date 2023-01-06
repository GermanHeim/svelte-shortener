import { error, redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());
		
		try {
			await locals.pb.collection('users').authWithPassword(body.email, body.password);
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong while logging in');
		}

		throw redirect(303, '/');
	}
};