// export function to generate entire page
module.exports = templateData => {
    // destructure page data by section
    const { title, descr, insta, usage, licen, contr, tests, ...header } = templateData;

    return `
# ${(title)}

## Description 
${(descr)}

## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
${(insta)}

## Usage 
${(usage)}

## License
${(licen)}

## Credits
${header.githubUsername}, ${header.emailAddress}

## Contributing
${(contr)}

## Tests
${(tests)}

## Questions
Please direct your questions to my email
${header.emailAddress}

Made with Fuzzy-Spoon README generator
    `;
};
