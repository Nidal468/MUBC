import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Upload, Login, Logout} from '../components/main'
import styles from '../styles/mubc.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallIcon from '@mui/icons-material/Call';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const MUBC: NextPage = () =>{
	return(
		<div className={styles.container}>
		 <Head>
        <title>Monipur Uchcha Vidyalaya and College</title>
        <link rel="icon" href="/images/logo.ico" />
      </Head>
			<img src="/images/bg.svg" className={styles.image}/>
			<div className={styles.hero}>
				<nav className="w-full h-[8vh] flex items-start justify-between px-[3vh]"><div className="w-[30vh] h-full flex items-center justify-between"><img src="/images/logo.ico" className="w-[4vh]"/><h1 className="w-[24vh] h-full flex items-center justify-center text-white text-[1.8vh]">Monipur Uchcha Vidyalaya and College</h1></div><img src="/images/nav.svg" className="w-[80vh]"/><div className="w-[30vh] h-full flex items-center justify-between text-white" id={styles.tags}><i className="fi fi-rr-envelope"></i><i className="fi fi-rr-phone-call"></i><i className="fi fi-brands-twitter"></i><i className="fi fi-brands-youtube"></i><i className="fi fi-brands-facebook"></i></div></nav>
				<div className={styles.body}>
					<div className={styles.right}>
						<div className={styles.box} style={{display: 'none'}}>
							<h1 className="w-full h-[40px] flex items-center justify-start px-5 text-white">Menu</h1>
							<div className={styles.card}><h1>Home</h1><i className="fi fi-rr-angle-small-right"></i></div>
							<div className={styles.card}><h1>Home</h1><i className="fi fi-rr-angle-small-right"></i></div>
							<div className={styles.card}><h1>Home</h1><i className="fi fi-rr-angle-small-right"></i></div>
							<div className={styles.card}><h1>Home</h1><i className="fi fi-rr-angle-small-right"></i></div>
						</div>
						<img src="/images/bar.svg"/>
					</div>
					<div className={styles.left}>
						<img src="/images/image1.svg"/>
						<h1>Latest News</h1>
						<div className={styles.images}>
						<img src="/images/card1.svg"/>
						<img src="/images/card1.svg"/>
						<img src="/images/card1.svg"/>
						<img src="/images/card1.svg"/>
						<img src="/images/card1.svg"/>
						<img src="/images/card1.svg"/>
						<img src="/images/card1.svg"/>
						<img src="/images/card1.svg"/>
						</div>
					</div>
				</div>
				<img src="/images/bottombar.svg" style={{position: "absolute", zIndex: "999", bottom: "0"}}/>
			</div>
		</div>
	)
}
export default MUBC;