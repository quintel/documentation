# Updating Releases and API Changelog

## Overview

Release data is now centrally managed in `/data/releases.js`. This file contains:
- **Badge data**: Production/staging dates used by `ReleaseBadge` and `UpcomingFeature` components
- **Main releases**: Timeline data for `/main/releases` page
- **API changelog**: Timeline data for `/api/changelog` page

## Updating Main Releases

### 1. Add the release notes markdown file

1. Create a new markdown file in `static/releases/`.
2. Use the naming convention `YYYY-NN.md` (for numbered releases) or `YYYY-Sx.md` (for stable snapshots). Example: `2025-11.md`.
3. Write the release notes using regular Markdown. You can use minimal HTML to format the content.

### 2. Register the release in `/data/releases.js`

1. Open `/data/releases.js`.
2. **Add badge data** to the `releases` object (top section):
   ```js
   "2025.11": {
     production: "2025-11-06",  // ISO date format
     staging: "2025-10-23",      // Optional: staging date
   },
   ```
3. **Add timeline entry** to the `mainReleases` array (middle section):
   ```js
   {
     date: "Nov 6 2025",              // Display format
     title: "November 2025",
     file: "2025-11.md",              // Markdown filename
     version: "latest",               // Optional: "latest", "upcoming", or stable version
     tag: "2025.11",                  // GitHub release tag
   },
   ```
   Add the new entry at the top of the array (below upcoming) so it appears first.

### 3. Verify locally

1. Run `yarn start` to launch the docs locally.
2. Navigate to `/main/releases` and confirm:
   - The new release appears in the contents navigation and timeline.
   - The markdown renders correctly.
   - Release badges throughout the docs show the correct status.
3. Fix any rendering issues before committing.

## Updating API Changelog

### 1. Add the changelog markdown file

1. Create a new markdown file in `static/api-changelog/`.
2. Use the naming convention `YYYY-NN.md`. Example: `2025-11.md`.
3. Write the changelog entry using regular Markdown.

### 2. Register the changelog in `/data/releases.js`

1. Open `/data/releases.js`.
2. **Add badge data** to the `releases` object (if not already present).
3. **Add changelog entry** to the `apiChangelog` array (bottom section):
   ```js
   {
     date: "Nov 6, 2025",             // Display format with comma
     title: "Short description",
     file: "2025-11.md",              // Markdown filename
     tag: "2025.11",                  // Version tag
   },
   ```
   Add the new entry at the top of the array so it appears first.

### 3. Verify locally

1. Run `yarn start` to launch the docs locally.
2. Navigate to `/api/changelog` and confirm the new entry appears correctly.

## Notes

- **Date formats**: Use ISO format (`YYYY-MM-DD`) in the `releases` object for date calculations. Use display format in timeline arrays.
- **Version tags**: Must match between `releases` object keys and `tag` fields in timeline arrays.
- **Markdown files**: Still stored in `/static/releases/` and `/static/api-changelog/` respectively.
- **Badge components**: Automatically pick up changes from the `releases` object without additional updates.
