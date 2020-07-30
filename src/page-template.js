
const generateProjects = projectsArr => {
  return `
    <section>
      <h2>Work</h2>
      <div>
      ${projectsArr
        .filter(({ feature }) => feature)
        .map(({ name, description, languages, link }) => {
          return `
          <div>
            <h3>${name}</h3>
            <h5>${languages.join(', ')}</h5>
            <p>${description}</p>
            <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
        })
        .join('')}

      ${projectsArr
        .filter(({ feature }) => !feature)
        .map(({ name, description, languages, link }) => {
          return `
          <div>
            <h3>${name}</h3>
            <h5>${languages.join(', ')}</h5>
            <p>${description}</p>
            <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
        })
        .join('')}
      </div>
    </section>
  `;
};

module.exports = templateData => {
  // destructure projects and about data from templateData based on their property key names
  const { projects, about, ...header } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>README Generator</title>
    </head>

    <body>
      <header>
        <div>
          <h1>${header.name}</h1>
          <nav>
            <a href="https://github.com/${header.github}">GitHub</a>
          </nav>
        </div>
      </header>

      <main>
        ${generateProjects(projects)}
      </main>

      <footer>
        <h3>&copy; ${new Date().getFullYear()} by ${header.name}</h3>
      </footer>


    </body>
  </html>
  `;
};