import React from 'react';
import { Redirect } from '@docusaurus/router';

function Home() {
  return <Redirect to="/main/intro" />;
}

export default Home;
