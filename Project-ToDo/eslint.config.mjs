import globals from 'globals';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import jest from 'eslint-plugin-jest';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.jest
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      }
    },
    plugins: {
      react: react,
      jest: jest
    },
    rules: {
      'react/prop-types': 'off',
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'error'
    },
  }
];