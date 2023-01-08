<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FiArrowRight from 'svelte-icons-pack/fi/FiArrowRight';
	import FiClipboard from 'svelte-icons-pack/fi/FiClipboard';
	let host;
	import toast from 'svelte-french-toast';
	onMount(() => (host = window.location.origin));
</script>

<div class="body-page">
	<div class="card">
		{#await host}
			<h1>Loading shortened URL...</h1>
		{:then}
			<h1>URL Shortened</h1>
			<div class="box">
				<p>
					<a href="/{$page.params.slug}" target="_blank" rel="noopener noreferrer"
						>{host}/{$page.params.slug}</a
					>
				</p>

				<button
					on:click={() => {
						navigator.clipboard.writeText(`${host}/${$page.params.slug}`);
					}}
					on:click={() =>
						toast.success('Copied to clipboard', {
							position: 'top-center',
							style: 'border: 1px solid black; color: black; font-family: "Inter", sans-serif;'
						})}
				>
					<Icon src={FiClipboard} size="22" />
				</button>
			</div>
			<button id="shorten" on:click={() => goto('/')}
				>Shorten another URL <Icon src={FiArrowRight} size="22" /></button
			>
		{/await}
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&family=JetBrains+Mono:wght@700&display=swap');

	:global(body) {
		margin: 0;
		padding: 0;
	}

	.body-page {
		position: relative;
		display: flex;
		height: 100vh;
		width: 100%;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: #b8dbe4;
	}

	.body-page::before {
		content: '';
		background-image: url('/assets/wavesBg.webp');
		background-size: cover;
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		opacity: 0.2;
	}

	.card {
		display: flex;
		flex-direction: column;
		width: 30%;
		position: relative;
		background: #fff;
		border-radius: 5px;
		padding: 3rem;
		border: black 3px solid;
	}

	.card h1 {
		font-family: 'JetBrains Mono', monospace;
		font-size: 2rem;
		margin: 0;
		text-align: center;
		padding-bottom: 30px;
	}

	.card p {
		font-family: 'Inter', sans-serif;
		font-size: 1.2rem;
		margin: 0;
		text-align: center;
	}

	.card a {
		color: #3bbcdc;
	}

	.card button {
		cursor: pointer;
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		margin-top: 1rem;
		align-self: center;
		font-family: 'Inter', sans-serif;
		align-items: center;
		justify-content: center;
		line-height: 1;
		color: black;
		font-size: 18px;
		border-radius: 0px;
		width: 100%;
		height: 65px;
		font-weight: bold;
		border: 2px solid black;
		transition: 0.3s;
		box-shadow: 5px 5px 0px 0px black;
		background-color: #ffffff;
		border-radius: 10px;
		margin: 2rem auto 0.5rem auto;
	}

	.card button:hover {
		box-shadow: 0 0 black;
		color: #fff;
		background-color: black;
	}

	.box {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border: 2px solid black;
		border-radius: 10px;
		margin: 0px;
		padding: 0px;
	}

	.box p {
		margin: 0;
		padding-left: 0.5rem;
	}

	.box button {
		box-shadow: none;
		width: 100px;
		height: full;
		background-color: black;
		color: white;
		margin: 0px;
		border-radius: 0 7px 7px 0;
	}

	.box button:hover {
		color: black;
		background-color: white;
		border: none;
		border-left: 2px solid black;
		border-right: 2px solid white;
	}

	@media (max-width: 1250px) {
		.card {
			width: 60%;
		}
	}
	@media (max-width: 600px) {
		.card p {
			font-size: 1rem;
		}
		.card h1 {
			font-size: 2rem;
		}

		.box button {
			width: 40px;
		}
	}
</style>
