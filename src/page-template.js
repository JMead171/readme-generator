module.exports = readmeData => {

  const { name, description, installation, usage, license, contribution, test, link, email} = readmeData;

  const MIT = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  const BSD  = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  const GPL = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)"
  const Apache = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

  const badgeArray = readmeData.license.map(function(data) {
    if (data === "MIT") {
      return MIT;
    }
    if (data === "BSD") {
      return BSD;
    }
    if (data === "GPL") {
      return GPL;
    }
    if (data === "Apache") {
      return Apache;
    }
  });
  
  const strBadgeArray = badgeArray.join(" ");
  const strLicense = readmeData.license.join(", ");

  return `
  # My Project       
  ${name} 
  


  ## Badge
  ${strBadgeArray}



  ## Description
  ${description}



  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)

  

  ## Installation
  ${installation}
  

  
  ## Usage 
  ${usage} 
  


  ## License
  The project is licensed by ${strLicense}. 
  

    
  ## Contributing
  ${contribution}
  


  ## Tests
  ${test}


  
  ## Questions
  Please send questions to ${email}, more information can be found at ${link}
  `;
};