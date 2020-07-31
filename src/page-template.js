module.exports = readmeData => {

  const { name, description, installation, usage, license, contribution, test, link, email, badge} = readmeData;

  return `
  # My Project       
  ${name} 
  
  ## Badge
  ${badge}


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
  
  The project is licensed by ${license}. 
  
  
  
  ## Contributing
  
  ${contribution}
  
  ## Tests
  
  ${test}

  ## Questions

  Please send questions to ${email}, more information can be found at ${link}

  `;
};