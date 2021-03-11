import { writable } from 'svelte/store';

type AuthMode = 'login' | 'signup' | 'none';

function createAuthMode() {
	const { subscribe, update } = writable<AuthMode>('none');

	function setAuthMode(newAuthMode: AuthMode) {
		update((authMode) => {
			if (newAuthMode === authMode) {
				return 'none';
			} else {
				return newAuthMode;
			}
		});
	}

	return {
		subscribe,
		setAuthMode,
	};
}

export const authMode = createAuthMode();
