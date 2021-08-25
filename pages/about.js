import Head from 'next/head';
import Layout from "./components/layout";

function About () {
    return (
		<Layout>
			<Head><title>About Page</title></Head>
            <div className="card_about">
                <div className="user-image"></div>
                <div className="content">
                    <h3 className="name">If you have any questions, you can contact me via messenger below!</h3>
                    <p className="username">Hope you like what I do!</p>
                    <p className="details">⇣</p>
                    <a href="https://m.me/MrthuanJB" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} fill="#4361e8" viewBox="0 0 24 24">
							<path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z" />
						</svg>
                    </a>
                </div>
            </div>
		</Layout>
    );
}
export default About;