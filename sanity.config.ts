import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';
import { deskTool } from 'sanity/desk';
import schemas from './schemas/schema';

export default defineConfig({
  title: 'portfolio',
  projectId: 'cmvslwxy',
  dataset: 'production',
  plugins: [deskTool(), visionTool(), vercelDeployTool()],
  schema: {
    types: schemas,
  },
  tools: prev => {
    if (process.env.NODE_ENV === 'development') {
      return prev;
    }

    return prev.filter(tool => tool.name !== 'vision');
  },
});
