import React from 'react';
import Link from 'next/link';
//import Image from 'next/image';
import Head from 'next/head';
import Layout from "./components/layout";
import Datatweaks from './data/tweaks.json';

function Tweaks () {
    return (
	<Layout>
		<Head><title>Tweaks Page</title></Head>
        <div className="projects-mini">
		
		{ Datatweaks.map( (item, index) => (
            <div className="project mini" key={index}>
                <div className="infobox">
                    <div className="head">
                        <img src={item.icon} width="64" height="64" alt={item.title} />
                        <div className="text">
                            <span className="tag">{item.date}</span>
                            <h1>{item.title}</h1>
                        </div>
                    </div>
                    <p>{item.desc}</p>
                    <div className="btns">
                        <Link href={item.url}><a className="navbtn download">Download</a></Link>
                    </div>
                </div>
            </div>
			))}
        </div>
	 </Layout>
    );
}

export default Tweaks;