// title of my project
const generateTitle = titleText => {
    return `
    # ${titleText}
    `;
};
// Description,
const generateDescription = descrText => {
    return `
    ## Description
    ${descrText}
    `;
};
// Table of Contents,
const generateToc = () => {
    return `
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    `;
};
// Installation,
const generateInstallation = instaText => {
    return `
    ## Installation
    ${instaText}
    `;
};
// Usage,
const generateUsage = usageText => {
    return `
    ## Usage
    ${usageText}
    `;
};
// License,
const generateLicense = licenText => {
    return `
    ## License
    ${licenText}
    `;
};
// Contribution,
const generateContribution = contrText => {
    return `
    ## Contribution Guidelines
    ${contrText}
    `;
};
// Tests,
const generateTests = testsText => {
    return `
    ## Tests
    ${testsText}
    `;
};
// Questions
const generateQuestions = () => {
    return `
    ## Questions
    Please direct your questions by email
    
    `;
};

// export function to generate entire page
module.exports = templateData => {
    // destructure page data by section
    const { title, descr, insta, usage, licen, contr, tests, ...header } = templateData;
  
    return `
# ${generateTitle(title)}

## Description 
${generateDescription(descr)}

## Table of Contents (Optional)
${generateToc()}


## Installation
${generateInstallation(insta)}

## Usage 
${generateUsage(usage)}

## Credits
credited

## License
${generateLicense(licen)}
---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


## Contributing
${generateContribution(contr)}

## Tests
${generateTests(tests)}

## Questions
${generateQuestions()}
    `;
  };
  