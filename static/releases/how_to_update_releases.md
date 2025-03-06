# Updating the “Releases” timeline

## 1. Add the release notes markdown file

1. Create a new markdown file in `static/releases/`.
2. Use the naming convention `YYYY-NN.md` (for numbered releases) or `YYYY-Sx.md` (for stable snapshots). Example: `2025-11.md`.
3. Write the release notes using regular Markdown. You can use minimal html to format the content.

## 2. Register the release in `updates.json`

1. Open `static/releases/updates.json`.
2. Add a new object to the top of the array (below the upcoming entry) so the newest release appears second. Required fields:
   - `date`:                Short label shown on the timeline cards (for example `Nov 7`).
   - `title`:               Headline for the release card.
   - `file`:                The markdown filename you created above.
   - `tag`:                 GitHub release tag name. When present, it shows a link on the timeline card.
   - `version` (optional):  Use `"latest"` for the rolling deployment or a semantic label like `"2025.S1"` for stable releases.
                            only add the version for the latest release, or stable releases.

## 3. Verify locally

1. Run `yarn start` to launch the docs locally.
2. Navigate to `/main/releases` and confirm:
   - The new release appears in the contents navigation and timeline.
   - The markdown renders correctly.
3. Fix any rendering issues before committing.
