<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FiArrowRight from 'svelte-icons-pack/fi/FiArrowRight';
	let host;
	onMount(() => (host = window.location.origin));
</script>

<div class="body-page">
	<div class="card">
		{#await host}
			<h1>Loading shortened URL...</h1>
		{:then}
			<h1>URL Shortened</h1>
			<p>
				<a href="/{$page.params.slug}" target="_blank" rel="noopener noreferrer"
					>{host}/{$page.params.slug}</a
				>
			</p>
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
		background-image: url('/assets/wavesBg.png');
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
		font-size: 2.5rem;
		margin: 0;
		text-align: center;
	}

	.card p {
		font-family: 'Inter', sans-serif;
		font-size: 1.5rem;
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
		width: 400px;
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

	@media (max-width: 1250px) {
		.card {
			width: 60%;
		}
		#shorten {
			width: 100%;
		}
	}
	@media (max-width: 600px) {
		.card p {
			font-size: 1.25rem;
		}
		.card h1 {
			font-size: 2rem;
		}
	}
</style>
