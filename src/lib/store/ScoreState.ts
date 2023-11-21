import { writable } from 'svelte/store';

type Score = {
	player: number;
	computer: number;
}

export const score = writable<Score>({
	player: 0,
	computer: 0,
});

export const playerScored = () => {
	score.update((currentScore) => {
		return {
			...currentScore,
			player: currentScore.player + 1,
		};
	});
};

export const computerScored = () => {
	score.update((currentScore) => {
		return {
			...currentScore,
			computer: currentScore.computer + 1,
		};
	});
};