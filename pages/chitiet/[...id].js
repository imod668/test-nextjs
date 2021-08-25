import { useRouter } from 'next/router';
import Layout from "../components/layout";
import HomeData from '../data/home.json';


const Chitiet = (props) =>{
	const router = useRouter();
	const params = router.query.id;
	console.log(params);
	//const item = HomeData.find(item => item.id === params);
	return(
		<Layout>
			<h1>{router.query.id}</h1>
			
			<button type="button" onClick={() => router.back()}>Back</button>
		</Layout>
	);
}
export default Chitiet;