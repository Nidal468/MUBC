import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {Upload} from '../components/main'
import styles from '../styles/home.module.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

const Home: NextPage = () => {
	const [text] = useTypewriter({
    words: ['Welcome to Monipur Uchcha Vidyalaya and College', 'The bext choice for your children', 'We have more then 40000 student'],
    loop: 0
  })
	return(
		<div className={styles.container}>
			<Head>
        <title>Monipur Uchcha Vidyalaya and College</title>
        <link rel="icon" href="/images/logo.ico" />
      </Head>
			<div className={styles.hero}>
				<nav className={styles.nav}><div className="w-[40vh] h-full flex items-center justify-between"><img src="/images/logo.ico" className="w-[15%]"/><h1 className="w-[80%] text-[2vh]">Monipur Uchcha Vidyalaya and College</h1></div>
					<input type="text" placeholder="Student Id"/>
					<div className={styles.links}>
						<Link href="#"><a>Home</a></Link>
						<Link href="#about"><a>About Us</a></Link>
						<Link href="#"><a>Benefits</a></Link>
						<Link href="#"><a>Routine</a></Link>
						<Link href="#"><a>Contact Us</a></Link>
					</div>
				</nav>
				<div className="w-full h-full flex items-center justify-between" style={{padding: "0px 4vh"}}>
					<div className="w-[45%] h-[60%] flex items-start justify-start px-[2vh] flex-col">
						<h1 className="text-[6vh] w-full h-[20vh]">{text}<Cursor/></h1>
						<p className="text-[2vh]">Monipur Uccha Viddalya and College (MUBC) is one of the most renowned institutes in the country. The school often ranks among the top of the passing rate in the board exams such as Secondary School Certificate (SSC), Junior School Certificate (JSC), and always ranks first in Primary Education Certificate (PSC).</p>
						<div className="w-[45vh] h-[10vh] flex items-center justify-between">
							<button type="button" className={styles.button}>Routine</button>
							<button type="button" className={styles.button}>Benefits</button>
						</div>
					</div>
					<div className="w-[40%] h-[100%]"><img src="/images/studying.svg" className="w-full"/></div>
				</div>
			</div>
			<div className="w-full h-[30vh] flex items-center justify-center" style={{background: "#3d3d3d", padding: "0px 5vh"}}>
					<h1 className="text-white text-[4vh]"><strong style={{fontStyle: "italic"}}>“Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying ‘I will try again tomorrow’.”</strong>– Mary Anne Radmacher</h1>
			</div>
			<div className={styles.about} id="about">
				<div className="w-[45%] h-[70%] flex flex-col items-start justify-between pl-[10vh]">
					<h1 style={{width: "15vh", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3vh", borderLeft: "1px solid red"}}>About Us</h1>
					<p className="text-[2vh]">In 2007, 2008, and 2009, the school was ranked third, and in 2010 and 2011 the school ranked sixth and seventh respectively and was ranked eighth in the 2012 SSC examination under the Dhaka Education Board. From 2011 to 2019 this school was ranked first in the PEC Examination.<br/><br/>The school secured the second position in terms of securing the highest number of first divisions in the primary terminal examinations across the country in 2010.[6] A total of 1,516 students achieved first division from Viqarunnisa Noon School and College while 1,126 from Monipur High School & College and 962 from Ideal School and College.</p>
				</div>
				<Swiper
        spaceBetween={30}
        effect={"fade"}
				centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
				loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className={styles.swiper}
      >
					<SwiperSlide><img src="/images/teachers.jpg"/></SwiperSlide>
					<SwiperSlide><img src="/images/monipur 2.jpg"/></SwiperSlide>
					<SwiperSlide><img src="/images/monipur 3.jpg"/></SwiperSlide>
				</Swiper>
			</div>
			<div className={styles.about} id="about">
					<Swiper
        spaceBetween={30}
        effect={"fade"}
				centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
				loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className={styles.swiper}
      >
					<SwiperSlide><img src="/images/teachers.jpg"/></SwiperSlide>
					<SwiperSlide><img src="/images/monipur 2.jpg"/></SwiperSlide>
					<SwiperSlide><img src="/images/monipur 3.jpg"/></SwiperSlide>
				</Swiper>
				<div className="w-[45%] h-[70%] flex flex-col items-start justify-between pr-[10vh]">
					<p className="text-[2vh]">652 students scored 80% mark called A+ (or GPA 5.0) in 2008 and 556 students achieved the same in 2009, placing the school in the top three in Bangladesh's GPA 5 based schools ranking.The school has achieved second place in the evaluation examination of class Eight held under the Department of Secondary and Higher Education.<br/><br/>Following demands to enroll more students, the school authorities opened three more branches in Dhaka city, while the main campus at Monipur continues to operate. Monipur High School opened its college section in 2012 with about 52 students. The college section is situated at the Rupnagar branch (Branch-1) with its own dedicated campus. Which means there are now five school campuses and one college branch.</p>
				</div>
			</div>
			<div className={styles.routine}>
			<img src="/images/logo.ico"/>
				<h1>Welcome to Monipur Uchcha Vidyalaya and College</h1>
				<h2>Developed by Saleh</h2>
			</div>
		</div>
	)
}
export default Home;