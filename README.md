# NEXT LEVEL ACADEMY — Public Website (V15 development build)

A responsive public learning website built with Next.js 15, React 19 and TypeScript.

## Included
- Public home page and nine beginner learning paths
- 45 chapter lessons with explanations, key points, examples, practical activities and self-check questions
- Typing Lab with eight challenge modes, timer, WPM, accuracy, error and score tracking
- Browser-local best scores (per device and browser)
- HTML/CSS editor with sandboxed live preview and three starter templates
- Python playground powered by Pyodide (first run requires an internet connection)
- Sample quiz, FAQ, About and Contact sections
- Responsive layouts and mobile navigation

## Intentionally postponed
Student login, registration, dashboard, admin panel and database are not part of this first public release.

## Run locally
1. Install Node.js 20 or later.
2. Extract the ZIP.
3. Run `npm install`.
4. Run `npm run dev` and open the local URL shown in the terminal.
5. Run `npm run build` to verify a production build.

## Important notes
- Best scores are saved only in the current browser on the current device; they do not sync.
- Hindi typing depends on the device's input method and font support. The site does not convert Kruti Dev and Mangal automatically.
- Python runs through Pyodide and needs internet access to load its runtime the first time.
- The HTML/CSS preview uses a sandboxed iframe.

## V15 changes
- Fixed a TypeScript error in the typing score bonus calculation: the newly calculated error total is now defined before the clean-round bonus is evaluated.
- Preserved the V14 typing statistics and mobile navigation accessibility improvements.
- Rechecked in-page navigation targets and source syntax.

## Validation status
- TypeScript/TSX transpilation syntax check: passed.
- In-page navigation target check: passed.
- ZIP integrity check: passed.
- `npm install` could not complete in this environment because the package registry request timed out. Therefore a Next.js production build has not been verified. This is a development build, not a confirmed production release.

## V16 verification support
- The ZIP now extracts directly to the project root (no extra enclosing folder).
- Added `npm run typecheck` for a full TypeScript check after dependencies are installed.
- Added a GitHub Actions workflow at `.github/workflows/verify.yml`. After the project is uploaded to a GitHub repository, it installs dependencies, runs TypeScript checks and attempts a production build on GitHub's hosted runner.
- This environment could not complete `npm install` because the package registry request timed out. Therefore, the production build is still **not verified here**. The workflow is included to perform that check in GitHub Actions once uploaded.
