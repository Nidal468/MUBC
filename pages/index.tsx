import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Upload, Login, Logout} from '../components/main'
import styles from '../styles/home.module.css'
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

const Home: NextPage = () => {
	const [text] = useTypewriter({
    words: ['Welcome to Monipur Uchcha Vidyalaya and College', 'Currently more then 40000 students study here', 'Please contact us if you want your children to study here'],
    loop: 0
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Monipur Uchcha Vidyalaya and College</title>
        <link rel="icon" href="/images/logo.ico" />
      </Head>
			<main className={styles.body}>
				<section className={styles.section1}>
					<nav className={styles.nav}>
						<div className={styles.navInfo}>
							<div className='w-60 h-full flex items-center  justify-between'><img src='/images/logo.ico'/><h1 className='text-white w-40'>Monipur Uchcha Vidyalaya and College</h1></div>
								<div className={styles.contact}>
									<div className="w-[20vw] h-full flex items-center justify-between">
									<EmailIcon fontSize="large"/>
									<CallIcon fontSize="large"/>
									<FacebookIcon fontSize="large"/>
									<TwitterIcon fontSize="large"/>
									<YouTubeIcon fontSize="large"/>
									</div>
									<div className="w-[18vw] h-full flex items-center justify-between"><Login/><Logout/>
										<div className={styles.user}><h1>N</h1></div>
									</div>
									
							</div>
							
						</div>
						<div className={styles.links}>
								<h4>HOME</h4>
								<h4>ABOUT MUBC</h4>
								<h4>ACADEMIC</h4>
								<h4>ADMISSION</h4>
								<h4>ADMINISTRATION</h4>
								<h4>FACILITIES</h4>
								<h4>COLLEGE CAMPUS</h4>
								<h4>GALLERY</h4>
								<h4>CONTACT</h4>
						</div>
					</nav>
					<div className={styles.hero}>
						<div className={styles.info}>
							<h1>{text}<Cursor cursorColor="#fff"/></h1>
							<p>In 2007, 2008, and 2009, the school was ranked third, and in 2010 and 2011 the school ranked sixth and seventh respectively and was ranked eighth in the 2012 SSC examination under the Dhaka Education Board. From 2011 to 2019 this school was ranked first in the PEC Examination.</p>
							<div className="w-[25vw] h-[2vw] flex items-center justify-between"><div className={styles.button}>College Campus</div><div className={styles.button}>Academic</div></div>
						</div>
						<Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
				autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
				loop={true}
				centeredSlides={true}
        modules={[EffectFade, Autoplay]}
        className={styles.mySwiper}
      ><SwiperSlide><img src="/images/teachers.jpg" /></SwiperSlide>
				<SwiperSlide><img src="/images/monipur 2.jpg" /></SwiperSlide>
				<SwiperSlide><img src="/images/monipur 3.jpg" /></SwiperSlide>
						</Swiper>
					</div>
				</section>
				<section className={styles.section2}>
					<div></div>
				</section>
			</main>
    </div>
  )
}

export default Home