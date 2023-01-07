<script>
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FiLink from 'svelte-icons-pack/fi/FiLink';
</script>

<div class="body-page">
	<div class="card">
		<img src="/favicon.png" alt="Svelte Shortener" id="logo" />
		<h1>Svelte Shortener</h1>
		<p>Shorten your links</p>
		<form action="?/shorten" method="POST">
			<label for="redirect">Link to shorten</label>
			<input type="text" name="redirect" id="redirect" placeholder="example.com" required />
			<label for="slug">Slug (optional)</label>
			<input type="text" name="slug" id="slug" minlength="2" placeholder="slug" />
			<button type="submit">Shorten <Icon src={FiLink} size="22" /></button>
		</form>
		<div class="tech">
			<p>Built with</p>
			<div class="tech-images">
				<a href="https://svelte.dev">
					<img src="/assets/svelte.svg" alt="Svelte" />
				</a>
				<a href="https://pocketbase.io">
					<img src="/assets/pocketbase.svg" alt="Pocketbase" />
				</a>
			</div>
		</div>
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
		/* Image by rawpixel.com on Freepik */
		background-image: url('/assets/wavesBg.webp');
		background-size: cover;
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		opacity: 0.1;
	}
	.card {
		width: 30%;
		position: relative;
		background: #fff;
		border-radius: 5px;
		padding: 3rem;
		border: black 3px solid;
	}
	#logo {
		width: 80px;
		height: 80px;
		display: block;
		margin: 0 auto;
		padding-bottom: 20px;
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

	.card form {
		display: flex;
		flex-direction: column;
		font-family: 'Inter', sans-serif;
	}

	.card form label {
		font-family: 'Inter', sans-serif;
		font-size: 1.5rem;
		margin: 0.5rem 0;
		padding-top: 25px;
		align-self: center;
	}

	.card form input {
		font-size: 1.35rem;
		padding: 0.5rem;
		border: 2.5px solid black;
		border-radius: 10px;
		font-family: 'Inter', sans-serif;
		width: 400px;
		align-self: center;
	}

	.card form button {
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

	.card form button:hover {
		box-shadow: 0 0 black;
		color: #fff;
		background-color: black;
	}

	.card form button:inactive {
		background: #eee;
	}

	.tech {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 50px;
	}

	img {
		width: 25px;
	}

	.tech-images {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding-top: 20px;
		gap: 50px;
	}

	@media (max-width: 1250px) {
		.card {
			width: 60%;
		}

		.card form button {
			width: 100%;
		}

		.card form input {
			width: 100%;
		}
	}

	/* On mobile, make the text smaller and the image too */
	@media (max-width: 800px) {
		.card form button {
			width: 100%;
		}

		.card form input {
			width: 100%;
		}

		.card h1 {
			font-size: 2rem;
		}

		.card p {
			font-size: 1.1rem;
		}

		.card form label {
			font-size: 1.25rem;
		}

		.card form input {
			font-size: 1rem;
		}

		.card form button {
			font-size: 1.25rem;
		}

		.tech-images {
			gap: 20px;
			padding-top: 5px;
		}

		#logo {
			width: 50px;
			height: 50px;
		}
	}
</style>
