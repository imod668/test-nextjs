import React from 'react';
import Header from './header';
import Tabs from './tabs';
import Footer from './footer';


function Layout(props){
	return (
	  <>
		<Header />
		<Tabs />
		<div id="content">
		  {props.children}
		</div>
		<Footer />
	  </>
	);
}
export default Layout;