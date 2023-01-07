<script>
	import { enhance } from '$app/forms';
	import toast from 'svelte-french-toast';
	let loading = false;
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FiLogIn from 'svelte-icons-pack/fi/FiLogIn';

	const submitLogin = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					await update();
					break;
				case 'error':
					toast.error(result.error.message, {
						position: 'top-center',
						style: 'border: 1px solid black; color: black; font-family: "Inter", sans-serif;'
					});
					break;
				default:
					await update();
			}
			loading = false;
		};
	};
</script>

<div class="body-page">
	<div class="card">
		<h1>Login</h1>
		<form action="?/login" method="POST" use:enhance={submitLogin}>
			<label for="email">Email</label>
			<input
				type="email"
				name="email"
				placeholder="johndoe@gmail.com"
				required
				disabled={loading}
			/>
			<label for="password">Password</label>
			<input
				type="password"
				name="password"
				placeholder="****************"
				required
				disabled={loading}
			/>
			<button type="submit" disabled={loading}>Log in<Icon src={FiLogIn} size="22" /></button>
		</form>
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

	.card h1 {
		font-family: 'JetBrains Mono', monospace;
		font-size: 2.5rem;
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
	}

	.card form input {
		font-size: 1.35rem;
		padding: 0.5rem;
		border: 2.5px solid black;
		border-radius: 10px;
		font-family: 'Inter', sans-serif;
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

	@media (max-width: 1250px) {
		.card {
			width: 60%;
		}

		.card form button {
			width: 100%;
		}

		.card form input {
			font-size: 1.25rem;
		}
	}
</style>
