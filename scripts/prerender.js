/**
 * Post-build prerender step.
 *
 * react-snap turns the client-rendered CRA build into static HTML (crawlers and
 * AI answer engines then see real content, not an empty <div id="root">).
 *
 * react-snap ships a very old bundled Chromium that will not launch on modern
 * machines (Apple Silicon, current Linux), so this wrapper points it at a
 * working Chrome:
 *   1. PUPPETEER_EXECUTABLE_PATH / CHROME_PATH env var, if set
 *   2. the Chrome that the `puppeteer` dev dependency downloads
 *   3. a system Google Chrome install
 *
 * If none is found, prerendering is skipped with a warning and the normal
 * client-rendered build is deployed (the <noscript> block and JSON-LD in
 * public/index.html keep the page usable for crawlers in that case).
 */
const fs = require("fs");

async function resolveChrome() {
  const fromEnv =
    process.env.PUPPETEER_EXECUTABLE_PATH || process.env.CHROME_PATH;
  if (fromEnv && fs.existsSync(fromEnv)) return fromEnv;

  try {
    const puppeteer = require("puppeteer");
    const p = await puppeteer.executablePath();
    if (p && fs.existsSync(p)) return p;
  } catch (e) {
    /* puppeteer not installed - fall through */
  }

  const candidates = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ];
  return candidates.find((c) => fs.existsSync(c)) || null;
}

(async () => {
  const chrome = await resolveChrome();
  if (!chrome) {
    console.warn(
      "\n[prerender] No Chrome executable found - skipping static prerender.\n" +
        "[prerender] Install it with `npx puppeteer browsers install chrome` " +
        "or set PUPPETEER_EXECUTABLE_PATH.\n"
    );
    process.exit(0);
  }

  process.env.PUPPETEER_EXECUTABLE_PATH = chrome;
  console.log(`[prerender] Using Chrome at: ${chrome}`);

  const pkg = require("../package.json");
  const { run } = require("react-snap");

  try {
    await run(pkg.reactSnap || {});
    console.log("[prerender] Static HTML generated.");
  } catch (err) {
    console.warn(
      "\n[prerender] react-snap failed - deploying the client-rendered build " +
        "instead.\n[prerender] Reason:",
      err && err.message ? err.message : err,
      "\n"
    );
    process.exit(0);
  }
})();
