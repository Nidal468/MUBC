import {Head, Html, Main, NextScript} from 'next/document';

export default function Document(){
	return(
		<Html>
			<Head>
        <meta name="description" content="created by Fate" />
				<link href="https://fonts.cdnfonts.com/css/sf-pro-display?styles=98774,98773,98770" rel="stylesheet"/>
        <link rel="icon" href="/logo.ico" />
				<link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css'/>
			<link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css'/><link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&family=Poppins:wght@300;400;500;600;700&family=Raleway:wght@100;200;400;500;600&family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>  
				</Head>
			<body>
				<Main/>
				<NextScript/>
			</body>
		</Html>
	)
}