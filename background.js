// Filter requests to known persistentcookie/supercookie scripts
const FILTERED_DOMAINS = [
  "*://persistentcookiefactory.example.cookie.net/*",
  "*://supercookiefactory.example.cookie.net/*"
];

///Please NOTE: This BETA is is just the placeholder.  Not an actual functioning code. That is proprioetary at this time until I fix some pesky bugs.

browser.webRequest.onBeforeRequest.addListener(
  () => ({ cancel: true }),
  { urls: FILTERED_DOMAINS },
  ["filtering"]
);