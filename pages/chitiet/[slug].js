import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Layout from "../components/layout";
import HomeData from '../data/home.json';


export default function Chitiet ({desc, date, title, bgImage, href}) {
	const router = useRouter();
	const handleClick = (e) => {
		e.preventDefault();
		router.back();
  }
	return(
		<Layout>
		<Head><title>{title}</title></Head>

			<div className="detail" id="detail">
				<div className="detail_img">
				  <img src={bgImage} alt={title} />
				</div>
				<div className="detail_info">
					<span className="detail_date">{date}</span>
					<h1 className="detail_title">{title}</h1>
					<p className="detail_txt">{desc}</p>
				</div>
			</div>
			<button className="navbtn back" onClick={handleClick}>Back</button>
			
		</Layout>
	);
}

export async function getStaticProps(context) {
  const {params} = context;
  return {
    props: HomeData.find((item) => item.slug === params.slug),
  };
}

export async function getStaticPaths() {
	
  return {
    paths: HomeData.map((item) => ({
		params: {
			slug: item.slug, 
		},
	})),
    fallback: false,
  };
}