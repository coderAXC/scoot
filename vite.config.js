import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default {
  // other config options
  optimizeDeps: {
    include: ["hoist-non-react-statics"],
  },
  esbuild: {
    jsxInject: `import React from 'react';`,
  },
};
