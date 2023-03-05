// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  let badge;
  // return badge ? license : "";

  switch (license) {
    case `Apache`:
      badge = `![${license} License](https://img.shields.io/badge/License-Apache_2.0-blue)`;
      break;
    case `MIT`:
      badge = `![${license} License](https://img.shields.io/badge/License-MIT-blue)`;
      break;
    case `Mozilla PL`:
      badge = `![${license} License](https://img.shields.io/badge/License-MPL_2.0-blue)`;
      break;
    case `GPLv3`:
      badge = `![${license} License](https://img.shields.io/badge/License-GPLv3-blue)`;
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  let link;
  // return link ? license : "";

  switch (license) {
    case "Apache":
      link = `[${license}](https://choosealicense.com/licenses/apache-2.0/)`;
      break;
    case "MIT":
      link = `[${license}](https://choosealicense.com/licenses/mit/)`;
      break;
    case "MPL":
      link = `[${license}](https://choosealicense.com/licenses/mpl-2.0/)`;
      break;
    case "GNUPLv3":
      linke = `[${license}](https://choosealicense.com/licenses/gpl-3.0/)`;
      break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   return license ? license : "";
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Deployed Link
  ${data.deployedLink}
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  In order to use this app, ${data.usage}
  ### Credits
  Contributors and/or assets: ${data.credits}
  ### License
  The license I have used for this project: ${renderLicenseLink(data.license)}
  ## Contribute
  If you would like to contribute, ${data.contribute}
`;
}

module.exports = generateMarkdown;
