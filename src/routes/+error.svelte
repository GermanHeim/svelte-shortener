<script>
	import { page } from '$app/stores';
</script>

{#if $page}
	<div class="body-page">
		<div class="card">
			<h2>{$page.status}: {$page.error.message}</h2>
			<p>Something went wrong.</p>
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
		opacity: 0.5;
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

	@media (max-width: 600px) {
		.card {
			width: 90%;
			margin: 50px;
		}
	}
</style>
