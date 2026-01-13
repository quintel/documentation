// Release badge data - used by EnvBadge.js and UpcomingFeature.js
// Maps version tags to production/staging dates for dynamic badge rendering
const releases = {
  "2025.12": {
    production: "2025-12-12",
  },
  "2025.10": {
    production: "2025-10-02",
  },
  "2025.09": {
    production: "2025-09-04",
  },
  "2025.08": {
    production: "2025-08-07",
  },
  "2025.07": {
    production: "2025-07-03",
  },
  "2025.06": {
    production: "2025-06-03",
  },
  "2025.05": {
    production: "2025-05-01",
  },
  "2025.03": {
    production: "2025-03-06",
  },
  "2025.02": {
    production: "2025-02-24",
  },
  "2024.09": {
    production: "2024-09-03",
    staging: "2024-08-20",
  },
  "2023.12": {
    production: "2023-12-05",
    staging: "2023-11-07",
  },
  "2023.06": {
    production: "2023-06-06",
    staging: "2023-05-04",
  },
  "2023.02": {
    production: "2023-02-07",
    staging: "2023-01-10",
  },
  "2023.01": {
    production: "2023-01-10",
    staging: "2022-12-06",
  },
  "2022.08": {
    production: "2022-08-02",
    staging: "2022-07-05",
  },
  "2022.07": {
    production: "2022-07-05",
    staging: "2022-06-09",
  },
  "2022.06": {
    production: "2022-06-09",
    staging: "2022-05-03",
  },
  "2022.05": {
    production: "2022-05-03",
    staging: "2022-04-05",
  },
  "2022.04": {
    production: "2022-04-05",
    staging: "2022-03-02",
  },
  "2022.02": {
    production: "2022-02-01",
  },
};

// Main releases timeline data
export const mainReleases = [
  {
    date: "Feb 5, 2026",
    title: "Next Release",
    file: "upcoming.md",
    version: "upcoming",
    tag: null,
  },
  {
    date: "Dec 12, 2025",
    title: "December 2025",
    file: "2025-12.md",
    version: "latest",
    tag: "2025.12",
  },
  {
    date: "Nov 13, 2025",
    title: "November 2025",
    file: "2025-11.md",
    tag: "2025.11",
  },
  {
    date: "Oct 2, 2025",
    title: "October 2025",
    file: "2025-10.md",
    tag: "2025.10",
  },
  {
    date: "Sep 4, 2025",
    title: "September 2025",
    file: "2025-09.md",
    tag: "2025.09",
  },
  {
    date: "Aug 7, 2025",
    title: "August 2025",
    file: "2025-08.md",
    tag: "2025.08",
  },
  {
    date: "Jul 3, 2025",
    title: "July 2025",
    file: "2025-07.md",
    tag: "2025.07",
  },
  {
    date: "Jun 3, 2025",
    title: "June 2025",
    file: "2025-06.md",
    tag: "2025.06",
  },
  {
    date: "May 1, 2025",
    title: "May 2025",
    file: "2025-05.md",
    tag: "2025.05",
  },
  {
    date: "Apr 3, 2025",
    version: "stable.2025.01",
    title: "Stable 2025",
    file: "2025-s1.md",
    tag: "stable.2025.01",
  },
  {
    date: "Mar 6, 2025",
    title: "March 2025",
    file: "2025-03.md",
    tag: "2025.03",
  },
  {
    date: "Feb 24, 2025",
    title: "February 2025",
    file: "2025-02.md",
    tag: "2025.02",
  },
];

// API changelog timeline data
export const apiChangelog = [
  {
    date: "Feb 5, 2026",
    title: "Scenario interpolation",
    file: "2026-01.md",
    tag: "2026.01",
  },
  {
    date: "Dec 11, 2025",
    title: "Managing collections",
    file: "2025-12.md",
    tag: "2025.12",
  },
  {
    date: "Feb 24, 2025",
    title: "Stable versions and saved scenario users",
    file: "2025-02.md",
    tag: "2025.02",
  },
  {
    date: "Sep 3, 2024",
    title: "Scenario recoupling",
    file: "2024-09.md",
    tag: "2024.09",
  },
  {
    date: "Dec 5, 2023",
    title: "Heat networks",
    file: "2023-12.md",
    tag: "2023.12",
  },
  {
    date: "Jun 6, 2023",
    title: "Scenario couplings and disabled inputs",
    file: "2023-06.md",
    tag: "2023.06",
  },
  {
    date: "Feb 7, 2023",
    title: "Forecast storage order",
    file: "2023-02.md",
    tag: "2023.02",
  },
  {
    date: "Jan 10, 2023",
    title: "Authentication and saved scenarios",
    file: "2023-01.md",
    tag: "2023.01",
  },
  {
    date: "May 3, 2022",
    title: "Protected attribute split",
    file: "2022-05.md",
    tag: "2022.05",
  },
  {
    date: "Apr 5, 2022",
    title: "Scenario metadata",
    file: "2022-04.md",
    tag: "2022.04",
  },
  {
    date: "Feb 1, 2022",
    title: "Protected scenarios and disabled inputs",
    file: "2022-02.md",
    tag: "2022.02",
  },
];


export default releases;
