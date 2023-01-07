<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FiHome from 'svelte-icons-pack/fi/FiHome';
</script>

{#if $page}
	<div class="body-page">
		<div class="card">
			<h2>{$page.status}: {$page.error.message}</h2>
			<p>Something went wrong.</p>
			<button on:click={() => goto('/')}>Go Home <Icon src={FiHome} size="22" /></button>
		</div>
	</div>
{/if}

<style>
	@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap');

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
		opacity: 0.1;
	}

	.card {
		position: relative;
		background: #fff;
		border-radius: 5px;
		padding: 3rem;
		border: black 3px solid;
	}

	.card h2 {
		font-family: 'JetBrains Mono', monospace;
		font-size: 3rem;
		margin: 0;
		text-align: center;
	}

	.card p {
		font-family: 'JetBrains Mono', monospace;
		font-size: 1.5rem;
		margin: 0;
		padding-top: 10px;
		text-align: center;
	}
	.card button {
		cursor: pointer;
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
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

	@media (max-width: 600px) {
		.card {
			width: 90%;
			margin: 50px;
		}
	}
</style>
