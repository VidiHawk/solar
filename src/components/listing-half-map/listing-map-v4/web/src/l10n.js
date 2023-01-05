import browserLanguage from "in-browser-language";

/* List of supported languages in the OpenInfraMap layer.
 * This should be kept up to date with the list in tegola/layers.yml.
 */
const layer_supported_languages = [
  "en",
  "es",
  "de",
  "fr",
  "hi",
  "ur",
  "zh",
  "ru",
  "pt",
  "ja",
];

/* List of name tags to check, in order */
const temp_list = ["en"];

const local_name_tags = temp_list
  .filter((code) => layer_supported_languages.includes(code))
  .map((code) => `name_${code}`)
  .concat(["name"]);

// const local_name_tags = browserLanguage
//   .list()
//   .filter(code => layer_supported_languages.includes(code))
//   .map(code => `name_${code}`)
//   .concat(['name']);

export { layer_supported_languages, local_name_tags };
