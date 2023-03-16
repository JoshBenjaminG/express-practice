import sass from 'sass';
import { writeFileSync } from 'fs';

// Compile the Sass file to CSS
const result = sass.renderSync({ file: './styles.scss' });

// Save the compiled CSS to a file
writeFileSync('./styles.css', result.css);
