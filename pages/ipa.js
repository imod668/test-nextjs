import React from 'react';
import Head from 'next/head';
import Layout from "./components/layout";

function Tabs () {

  return (
		<Layout>
      <Head><title>IPA Page</title></Head>

      <div className="app-card">
        <div className="content-block">
          <h4>Ipa Ios Old Version</h4>
        </div>
        <div className="list-block">

            <div className="item-content">
              <div className="item-media">
                <img className="app-icon" src="/assets/images/unc0ver.png" />
              </div>
              <div className="item-inner">
                <div className="item-title-row">
                  <div className="item-title">Unc0ver_3.5.6</div>
                  <a href="https://" target="new" className="install">GET</a>
                </div>
                <div className="item-subtitle">JB ios 11.0-12.2(-A12).</div>
              </div>
            </div>

            <div className="item-content">
              <div className="item-media">
                <img className="app-icon" src="/assets/images/Chimera.png" />
              </div>
              <div className="item-inner">
                <div className="item-title-row">
                  <div className="item-title">Chimera v1.3.8</div>
                  <a href="https://" target="new" className="install">GET</a>
                </div>
                <div className="item-subtitle">JB ios 12.0-12.1.2 all Device!</div>
              </div>
            </div>

        </div>

        <br />
      </div>

		</Layout>
    );
}
export default Tabs;