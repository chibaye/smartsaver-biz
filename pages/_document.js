import React from 'react'
import Document, {Head, Html, Main, NextScript} from 'next/document'

export default class Doc extends Document {
    render() {
        return <Html className="no-js" lang='en'>
            <Head>
                <link rel='icon' href='/favicon.ico'/>
                <style jsx>{`
                    a.cta_button {
                    -moz-box-sizing: content-box !important;
                    -webkit-box-sizing: content-box !important;
                    box-sizing: content-box !important;
                    vertical-align: middle;
                }

                    .hs-breadcrumb-menu {
                    list-style-type: none;
                    margin: 0px 0px 0px 0px;
                    padding: 0px 0px 0px 0px;
                }

                    .hs-breadcrumb-menu-item {
                    float: left;
                    padding: 10px 0px 10px 10px;
                }

                    .hs-breadcrumb-menu-divider:before {
                    content: "›";
                    padding-left: 10px;
                }

                    .hs-featured-image-link {
                    border: 0;
                }

                    .hs-featured-image {
                    float: right;
                    margin: 0 0 20px 20px;
                    max-width: 50%;
                }

                    @media (max-width: 568px) {
                    .hs-featured-image {
                    float: none;
                    margin: 0;
                    width: 100%;
                    max-width: 100%;
                }
                }

                    .hs-screen-reader-text {
                    clip: rect(1px, 1px, 1px, 1px);
                    height: 1px;
                    overflow: hidden;
                    position: absolute !important;
                    width: 1px;
                }
                `}</style>
            </Head>
            <body className='site-page one-column Home-page hs-content-id-5561508918 hs-site-page page'>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    }
}