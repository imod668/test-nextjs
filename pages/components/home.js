import Link from 'next/link';
import Head from 'next/head';
import DataHome from '../data/home.json';

export default function Home(){
	
	return (
		<div className="projects">
		<Head><title>Home Page</title></Head>
		
		{ DataHome.map( (item, index) => (
			<div className="project" key={index}>
				<div className="img fill" style={{ backgroundImage: `url(${item.bgImage})` }}></div>
				<div className="infobox">
					<div className="head">
						<div className="text">
							<span className="tag">{item.date}</span>
							<h1>{item.title}</h1>
						</div>
					</div>
					<p>{item.desc}</p>
					<div className="btns">
						<Link href="/chitiet/[id]/[name]" as={`/chitiet/${item.id}/${item.title}`}>
							<a className="navbtn">Chi tiết</a>
						</Link>
					</div>
				</div>
			</div>
			))}
		</div>
	)
}