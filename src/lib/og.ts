import { generateOpenGraphImage } from 'astro-og-canvas';

export async function ogImageResponse(description: string) {
	const png = await generateOpenGraphImage({
		title: 'Alicante Frontend Meetup',
		description,
		bgGradient: [
			[255, 255, 255],
			[255, 255, 255],
		],
		border: { color: [255, 255, 255], width: 0 },
		padding: 80,
		font: {
			title: {
				size: 60,
				color: [11, 23, 38],
				weight: 'ExtraBold',
				lineHeight: 1.1,
			},
			description: {
				size: 32,
				color: [74, 90, 115],
				weight: 'Normal',
				lineHeight: 1.4,
			},
		},
		logo: {
			path: './public/alicante-frontend-logo.png',
			size: [450],
		},
	});

	return new Response(png as unknown as BodyInit, {
		headers: { 'Content-Type': 'image/png' },
	});
}
