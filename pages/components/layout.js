import React from 'react';
import Header from './header';
import Tabs from './tabs';
import Footer from './footer';


function Layout ({children}) {
	
	return (
	  <>
		<Header />
		<Tabs />
		<div id="content">{children}</div>
		<Footer />
	  </>
	);
}
export default Layout;