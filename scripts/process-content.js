const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const marked = require('marked');
const mkdirp = require('mkdirp');

// Chemin vers les dossiers de contenu et de destination
const PROJECTS_CONTENT_DIR = path.join(__dirname, '../content/projects');
const DATA_DIR = path.join(__dirname, '../public/data');

// Assurer que le répertoire de destination existe
mkdirp.sync(DATA_DIR);

// Traitement des projets
function processProjects() {
  const projectFiles = fs.readdirSync(PROJECTS_CONTENT_DIR).filter(file => file.endsWith('.md'));
  
  const projects = projectFiles.map(file => {
    const filePath = path.join(PROJECTS_CONTENT_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data, content: markdownContent } = matter(content);
    
    return {
      ...data,
      content: marked.parse(markdownContent),
      id: path.basename(file, '.md')
    };
  });
  
  // Trier les projets par ordre de date (du plus récent au plus ancien)
  projects.sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order;
    }
    return new Date(b.date) - new Date(a.date);
  });
  
  // Écrire le fichier JSON
  fs.writeFileSync(
    path.join(DATA_DIR, 'projects.json'), 
    JSON.stringify(projects, null, 2)
  );
  
  console.log(`Processed ${projects.length} projects`);
}

// Exécuter le traitement
processProjects();

console.log('Content processing completed!');