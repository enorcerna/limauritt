import chroma from 'chroma-js';

// Definición de tipos
type BaseColors = {
	[key: string]: string;
};

type Palette = {
	[key: string]: string[];
};

// Colores base
const blueBase: string = '#0000ff';
const greenBase: string = '#008000';

// Función para generar escalas de colores
const generateScale = (baseColor: string, numberOfColors: number): string[] => {
	const brightenedColor = chroma(baseColor).brighten(1).saturate(3);
	const darkenedColor = chroma(baseColor).darken(1);

	return chroma
		.scale([brightenedColor, baseColor, darkenedColor])
		.mode('lab')
		.colors(numberOfColors);
};

// Generación de paletas de colores
const generatePalette = (baseColors: BaseColors, numberOfColors: number): Palette => {
	return Object.fromEntries(
		Object.entries(baseColors).map(([name, color]) => [name, generateScale(color, numberOfColors)])
	);
};

// Colores base definidos
const baseColors: BaseColors = {
	blue: blueBase,
	green: greenBase
};

// Generar la paleta combinada
const combinedPalette: Palette = generatePalette(baseColors, 11);

export { combinedPalette };
