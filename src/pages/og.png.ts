import type { APIRoute } from 'astro';
import { ogImageResponse } from '../lib/og';

export const GET: APIRoute = () =>
	ogImageResponse('El meetup de desarrollo web frontend en Alicante. Charlas y comunidad para aprender y compartir.');
