<div align="center">
  <a href="https://github.com/GermanHeim/svelte-shortener">
    <img src="static/favicon.png" alt="Logo" width="100" height="100">
  </a>

  <h1 align="center">Svelte Shortener</h1>

  <p align="center">
    An open-source URL Shortener written in SvelteKit with PocketBase
    <br />
    <a href="https://github.com/GermanHeim/svelte-shortener/issues">Report Bug</a>
    ·
    <a href="https://github.com/GermanHeim/svelte-shortener/issues">Request Feature</a>
  </p>
</div>
<p align="center">Work in progress</p>
<br />

### Table of Contents
  <ol>
    <li>
      <a href="#demo">Demo</a>
    </li>
    <li>
      <a href="#tech-stack">Tech Stack</a>
    </li>
    <li>
        <a href="#deployment">Deployment</a>
        <ul>
            <li><a href="#prerequisites">Prerequisites</a>
            </li>
            <li><a href="#deploy">Deploy</a></li>
      </ul>
    </li>
    <li><a href="#pocketbase-schema">PocketBase Schema</a></li>
    <li><a href="#run-locally">Run Locally</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>


## Demo
![Demo GIF](https://media1.giphy.com/media/t4PxHCFR2A6b0hw9Wo/giphy.gif?cid=790b76114c582f0c52f3f1f4e2a6b1b85f591f426542a013&rid=giphy.gif&ct=g)

[Live demo](https://demo-svelte-shortener.vercel.app/)

* Email: test@user.com
* Password: testuser123

## Tech Stack
* [SvelteKit](https://kit.svelte.dev/)
* [PocketBase](https://pocketbase.io)

Also uses [svelte-french-toast](https://svelte-french-toast.com/) and [svelte-icons-pack](https://leshak.github.io/svelte-icons-pack/).

## Deployment
### Prerequisites
To setup your own instance of Svelte Shortener you will need a PocketBase deployment. If you don't already have one, consider hosting in [Fly.io](https://fly.io) (see [Host for free in Fly.io](https://github.com/pocketbase/pocketbase/discussions/537)) or [PocketHost](https://pockethost.io/).

To configure your PocketBase, you will need to import the [schema](/pocketbase/pb_schema.json) by going to your PocketBase instance, and clicking on `Import collections` inside settings. After this, you will need to create a new verified user. This will be the user you will use to authenticate yourself. 

### Deploy
After getting your database set up, you will need to deploy the actual WebApp. You can do this by clicking the button below, and filling in the required environment variable (your PocketBase URL):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FGermanHeim%2Fsvelte-shortener&env=POCKETBASE_URL&envDescription=Set%20your%20PocketBase%20URL%20(without%20%2F_%2F%20or%20%2Fapi%2F))

You can also deploy it manually by cloning the repo and running `npm run build` and `npm run preview` (or `npm run start`).

## Run Locally

To run Svelte Shortener locally, you will need to clone the repo and install the dependencies:

```bash
# Clone the project
git clone https://github.com/GermanHeim/svelte-shortener

# Go to the project directory
cd svelte-shortener

# Install dependencies
npm install
```

After this, you will need to run the PocketBase instance. To do so, you will need to donwload the executable from [here](https://pocketbase.io/) and move it to the `pocketbase` directory.
You can now run `./pocketbase serve` inside the pocketbase directory. This will start a PocketBase instance in `127.0.0.1:8090`.

Import the [schema](/pocketbase/pb_schema.json) by going to your PocketBase instance, and clicking on `Import collections` inside settings. After this, you will need to create a new verified user. This will be the user you will use to authenticate yourself.

Create an `.env` file in the root directory of the project, and add the following variable:
* `POCKETBASE_URL` - The URL of your PocketBase instance (without `/_/` or `/api/`)

Now go to the root directory of the project and run `npm run dev`. This will start the SvelteKit instance.

## PocketBase Schema

The PocketBase schema is located in the [pocketbase](/pocketbase) folder. You can import it by going to your PocketBase instance, and clicking on `Import collections` inside settings.

It consists of the following collections:
* `users` - Stores the users that are used for authentication
* `links` - Stores the links that are shortened, including the slug to be used and the original URL

The slug field inside the `links` collection is a unique index, so you can't have two links with the same slug. Also, only users that are verified can create links, to avoid anyone else to create links.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [`LICENSE.md`](/LICENSE.md) for more information.

## Acknowledgments

The UI is highly inspired on PocketBase.</br>
The logo was made from the PocketBase's logo, using Feather's link icon.
The background that is used was made by [rawpixel.com](https://rawpixel.com) and it was downloaded from [Freepik](https://www.freepik.com/free-vector/monochrome-abstract-contour-line-illustration_3841780.htm#query=topography&position=10&from_view=keyword).
