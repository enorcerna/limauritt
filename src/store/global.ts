import { colors } from '@/utils/config';
import { writable } from 'svelte/store';

const selecterFont = writable({
	name: '',
	value: ''
});
const selectColor = writable({
	blue: colors.blue,
	green: colors.green
});
const selectSpaceLetter = writable(0);
export { selecterFont, selectColor, selectSpaceLetter };
