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
				<nav className="w-full h-[50px] flex items-start justify-between px-10"><div className="w-[300px] h-full flex items-center justify-between"><img src="/images/logo.ico" className="w-[40px]"/><h1 className="w-[240px] h-full flex items-center justify-center text-white">Monipur Uchcha Vidyalaya and College</h1></div><img src="/images/nav.svg"/><div className="w-[300px] h-full flex items-center justify-between text-white"><EmailIcon/><CallIcon/><YouTubeIcon/><TwitterIcon/><FacebookIcon/></div></nav>
				<div className={styles.body}>
					<div className={styles.left}>
						<img src="/images/image1.svg"/>
					</div>
					<div className={styles.right}>
						<div className={styles.box}>
							<h1 className="w-full h-[40px] flex items-center justify-start px-5 text-white">Latest News</h1>
							<div className={styles.card}><h1>Bangla is still too hard in 2023</h1></div>
						</div>
					</div>
				</div>
				<img src="/images/bottombar.svg" style={{position: "absolute", zIndex: "999", bottom: "0"}}/>
			</div>
			
		</div>
	)
}
export default MUBC;