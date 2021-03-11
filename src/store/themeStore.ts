import { writable } from 'svelte/store';
import systemTheme from '../utils/systemTheme';

type ThemeName = 'dark' | 'light';

const global = {
	shadowSM:
		'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
	shadow: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
		rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px`,
	shadowMD:
		'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
	shadowLG:
		'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
	shadowXL:
		'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
	shadow2XL:
		'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
	orange100: '#FFF4CC',
	orange200: '#FFE699',
	orange300: '#ffd466',
	orange400: '#ffb81f',
	orange500: '#FFA500',
	orange600: '#DB8500',
	orange700: '#B76900',
	orange800: '#934F00',
	orange900: '#7A3D00',
	orangeTransparent100: 'rgba(255, 164, 0, 0.2)',
	orangeTransparent200: 'rgba(255, 164, 0, 0.4)',
	orangeTransparent300: 'rgba(255, 164, 0, 0.6)',
	orangeTransparent400: 'rgba(255, 164, 0, 0.8)',
	red100: '#ecd2d4',
	red200: '#f4b6bb',
	red300: '#ec7f87',
	red400: '#f0616d',
	red500: '#ee4956',
	red600: '#db3140',
	red700: '#cc2433',
	red800: '#b91221',
	red900: '#93000d',
	blue100: '#a8eeff',
	blue200: '#72dff9',
	blue300: '#55d2f0',
	blue400: '#36c1e3',
	blue500: '#20afd2',
	blue600: '#16a0c1',
	blue700: '#0d8caa',
	blue800: '#067893',
	blue900: '#05596c',
	blueTransparent100: 'rgba(32, 175, 210, 0.2)',
	blueTransparent200: 'rgba(32, 175, 210, 0.4)',
	blueTransparent300: 'rgba(32, 175, 210, 0.6)',
	blueTransparent400: 'rgba(32, 175, 210, 0.8)',
	black: '#000000',
	white: '#FFFFFF',
};

const opacities = ['00', '33', '66', '99', 'CC'];

export const themes = {
	light: {
		...global,
		background100: global.white,
		background200: '#F3F4F6',
		onBackground: '#2D2D2D',
		grey100: '#F3F4F6',
		grey200: '#E5E7EB',
		grey300: '#d7d7d7',
		grey400: '#c1c1c1',
		grey500: '#8e8e8e',
		grey600: '#717171',
		grey700: '#535353',
		grey800: '#3B3B3B',
		grey900: '#2D2D2D',
		backgroundTransparent100: global.black + opacities[1],
		backgroundTransparent200: global.black + opacities[2],
	},
	dark: {
		...global,
		background100: '#3B3B3B',
		background200: '#2D2D2D',
		onBackground: '#F3F4F6',
		grey100: '#2D2D2D',
		grey200: '#3B3B3B',
		grey300: '#535353',
		grey400: '#717171',
		grey500: '#8e8e8e',
		grey600: '#c1c1c1',
		grey700: '#d7d7d7',
		grey800: '#E5E7EB',
		grey900: '#F3F4F6',
		backgroundTransparent100: global.black + opacities[1],
		backgroundTransparent200: global.black + opacities[2],
	},
};

function createTheme() {
	const { subscribe, set, update } = writable<ThemeName>('light');

	let theme = (localStorage.getItem('theme') || systemTheme()) as ThemeName;
	set(theme);

	function toggleTheme() {
		update((currentTheme) => {
			if (currentTheme === 'dark') {
				localStorage.setItem('theme', 'light');
				return 'light';
			} else {
				localStorage.setItem('theme', 'dark');
				return 'dark';
			}
		});
	}

	return {
		subscribe,
		toggleTheme,
	};
}

export const theme = createTheme();
