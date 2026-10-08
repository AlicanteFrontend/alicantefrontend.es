import type { APIRoute } from 'astro';
import { ogImageResponse } from '../../lib/og';

export const GET: APIRoute = () =>
	ogImageResponse('The frontend web development meetup in Alicante. Talks and community to learn and share.');
