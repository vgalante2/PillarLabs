import path from 'path';
import { fileURLToPath } from 'url';

// Get the __dirname equivalent in ES module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}