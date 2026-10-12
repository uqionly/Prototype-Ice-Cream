# IceCreamHub — A Little Scoop of Happiness

Static storefront prototype built with plain HTML, CSS, and JavaScript. There is no package install or build step. Payments, account, inventory, newsletter signup, and delivery are prototype-only interactions.

## Local development

1. Install Node.js on Windows (no npm packages are needed).
2. In this project folder, run:

   ```powershell
   node dev-server.js
   ```

3. Open the canonical local URL: <http://localhost:8000>.
4. Stop the server with Ctrl+C.

This dependency-free static server serves the project root on port **8000**, bound to the local PC only by default. No install step or environment variables are required. Use `node dev-server.js --port=8080` to select another port.

## Second developer setup

1. Clone the shared repository URL supplied by the repository owner:

   ```powershell
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Run `node dev-server.js` and open <http://localhost:8000>.
3. Before starting work, run `git pull --ff-only`.
4. Work on a named branch (`git switch -c feature/short-description`), inspect changes with `git status` and `git diff`, then commit and push your branch:

   ```powershell
   git add -A
   git commit -m "Describe the change"
   git push -u origin feature/short-description
   ```
5. Share changes through a pull request or agree on a branch before merging. Do not force-push shared branches. Pull before continuing after another developer merges.

This folder now has a local Git repository on branch `main`; it has no remote or commits yet. Create an empty private/shared repository in your chosen Git host, then connect and publish the existing project:

```powershell
git add .
git commit -m "Initial IceCreamHub prototype"
git remote add origin <repository-url>
git push -u origin main
```

If another developer has already created the repository, clone that repository into a separate folder instead of initializing and pushing a competing history. Keep credentials in your Git provider's credential manager; never commit secrets or local `.env` files.

## Optional same-network preview

The development server can listen on all interfaces of the host computer:

```powershell
node dev-server.js --host=0.0.0.0
```

On the host PC, find its private IPv4 address with `ipconfig` (look under the active Wi-Fi or Ethernet adapter). On the second PC connected to the same trusted private network, visit `http://<host-private-ipv4>:8000` (for example, `http://192.168.1.20:8000`). Port is **8000**. If Windows Firewall prompts, allow Node.js only on **Private networks**; do not enable a Public-network rule or router port forwarding. Stop the server when finished.

## Shared client preview (static hosting)

The project is directly deployable as a static site: publish the repository root, with `index.html` as the entry page. No build command, environment variables, server functions, or secret keys are required. A suitable option is GitHub Pages for a repository already hosted on GitHub: open repository **Settings → Pages**, select deployment from the `main` branch and `/ (root)`, save, then wait for the Pages deployment workflow to complete. The repository's Pages settings will show the resulting preview URL; test that URL and its product interactions before sharing it. Other static hosts can use the same root directory and no build command.

This is separate from local development and from production. A successful static preview only makes this prototype available at a shareable URL; it does not connect real purchasing, payment, stock, accounts, or delivery. Deployment requires repository/hosting account access. No deployment has been performed or URL created in this workspace.
