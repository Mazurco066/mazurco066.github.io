import React from 'react';
import Layout from '../src/components/Layout';
import { ThemeProvider } from 'styled-components';

import light from '../src/styles/themes/light';

export function wrapRootElement({ element, props }) {
  return (
    <ThemeProvider theme={light}>
      <Layout {...props}>
        {element}
      </Layout>
    </ThemeProvider>
  );
};