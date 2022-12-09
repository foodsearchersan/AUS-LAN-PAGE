import React from 'react'
import '../css/Temp.css'
import '../css/AllOn6.css'
import { TiTick } from 'react-icons/ti'
import InternationalPatientsVideo from '../Assests/Tourism/International_Patients.mp4';
import drPrem from '../Assests/drPrem.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// ------tourisum imgaes------------
// ----------Food---------
import food1 from '../Assests/Tourism/Food/food1.jpg'
import food2 from '../Assests/Tourism/Food/food2.jpg'
import food3 from '../Assests/Tourism/Food/food3.png'
import food4 from '../Assests/Tourism/Food/food4.jpg'
import food5 from '../Assests/Tourism/Food/food5.jpg'
import food6 from '../Assests/Tourism/Food/food6.jpg'
//---------historical--------------
import his1 from '../Assests/Tourism/Historical Buidings/his1.jpg'
import his2 from '../Assests/Tourism/Historical Buidings/his2.jpg'
import his3 from '../Assests/Tourism/Historical Buidings/his3.jpg'

import his5 from '../Assests/Tourism/Historical Buidings/his5.jpg'
//---------- religion------------
import rel1 from '../Assests/Tourism/Religious Places/rel1.png'
import rel2 from '../Assests/Tourism/Religious Places/rel2.jpg'
import rel3 from '../Assests/Tourism/Religious Places/rel3.jpg'
//----------shop------------
import shop1 from '../Assests/Tourism/Shopping/shop1.jpg'
import shop2 from '../Assests/Tourism/Shopping/shop2.jpg'
import shop3 from '../Assests/Tourism/Shopping/shop3.jpg'
import shop4 from '../Assests/Tourism/Shopping/shop4.jpg'
import shop5 from '../Assests/Tourism/Shopping/shop5.jpg'
//----------things to do-------------
import things1 from '../Assests/Tourism/Things to do/things1.jpg'
import things2 from '../Assests/Tourism/Things to do/things2.jpg'
import things3 from '../Assests/Tourism/Things to do/things3.jpg'
import things4 from '../Assests/Tourism/Things to do/things4.jpg'
import things5 from '../Assests/Tourism/Things to do/things5.jpg'

function Temp() {
    return (
        <div>
            {/* doctor image */}
            <div className="all_on_6_des_title doctor_name_title" data-aos="fade-up">
                <h1>Dr. Prem Alex Lawrence</h1>
                <p></p>
            </div>

            <div className='docto_img_main_cont'>
                <div className='docto_img_cont'>

                    <div>
                        <img src={drPrem} data-aos="fade-up"/>
                    </div>
                    <div data-aos="fade-up">
                         <p data-aos="fade-up" >With more than 15 years of experience in performing dental miracles Dr Prem is a luminiarry, a certified Diplomate and a Fellow of the International Congress of Oral Implantologistst. He has performed more than 6000+ successful dental implants. His unrivaled clinical expertise offers a tailored and laser-focused approach to treatment.</p>
                         <p data-aos="fade-up" >The International Congress of Oral Implantologists has recognised him as a Diplomat and Fellow. Additionally, he is also a licensed laser specialist. He was nominated for  “Outstanding Dentist of the Year in India- under 45 Years" in 2015 and as "Implantologist in India" by Famdent. Dr Prem is a celebrated member of Indian Dental Association, International Congress of Oral Implants and Indian Society of Periodontology.</p>
                         <p data-aos="fade-up" ></p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="all_on_6_des_title doctor_name_title doctor_name_title11" data-aos="fade-up">
                <h1>Why Choose Us</h1>
                <p></p>
            </div>

            <div className='why_video_cont'>
                <div>
                    <video src={InternationalPatientsVideo} style={{ width: "100%", height: "100%" }} autoPlay loop controls muted ></video>
                </div>
            </div>

            {/* know more about cont*/}
            <div className='know_more'>
                <div>
                    <a href='#'>Know more about our<br></br> implant treatments</a>
                    <a href='#'>All-On-4<br></br>implants</a>
                    <a href='#'>All-On-6<br></br> implants</a>
                </div>
            </div>

            {/* vlog */}
            <div className="all_on_6_des_title doctor_name_title doctor_name_title11" data-aos="fade-up">
                <h1>LearnMore</h1>
                <p></p>
            </div>
            <div className='vlogn_cont'>
                <div>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GTRQsa3jpXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

              {/* Discover Chennai */}
              <div className="all_on_6_des_title doctor_name_title" data-aos="fade-up">
                <h1>Discover Chennai</h1>
                <p></p>
            </div>

            <div className='discover_cont'>
                <div className='discover_main_cont'>
                    <div className='discover_main_cont_one'>
                        <div className='discover_main_cont_one1'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide><img src={food3} /></SwiperSlide>
                                <SwiperSlide><img src={food4} /></SwiperSlide>
                                <SwiperSlide><img src={food1} /></SwiperSlide>
                                <SwiperSlide><img src={food6} /></SwiperSlide>
                                <SwiperSlide><img src={food2} /></SwiperSlide>
                                <SwiperSlide><img src={food5} /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='discover_main_cont_one2'>
                            <p>Food</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div className='discover_main_cont_one'>
                        <div className='discover_main_cont_one1'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide><img src={his1} /></SwiperSlide>
                                <SwiperSlide><img src={his2} /></SwiperSlide>
                                <SwiperSlide><img src={his3} /></SwiperSlide>
                                
                                <SwiperSlide><img src={his5} /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='discover_main_cont_one2'>
                            <p>Historical Buidings</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div className='discover_main_cont_one'>
                        <div className='discover_main_cont_one1'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide><img src={rel1} /></SwiperSlide>
                                <SwiperSlide><img src={rel2} /></SwiperSlide>
                                <SwiperSlide><img src={rel3} /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='discover_main_cont_one2'>
                            <p>Religious Places</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>


                    <div className='discover_main_cont_one'>
                        <div className='discover_main_cont_one1'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide><img src={shop1} /></SwiperSlide>
                                <SwiperSlide><img src={shop2} /></SwiperSlide>
                                <SwiperSlide><img src={shop3} /></SwiperSlide>
                                <SwiperSlide><img src={shop4} /></SwiperSlide>
                                <SwiperSlide><img src={shop5} /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='discover_main_cont_one2'>
                            <p>Shopping</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>


                    <div className='discover_main_cont_one'>
                        <div className='discover_main_cont_one1'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide><img src={things1} /></SwiperSlide>
                                <SwiperSlide><img src={things2} /></SwiperSlide>
                                <SwiperSlide><img src={things3} /></SwiperSlide>
                                {/* <SwiperSlide><img src={things4} /></SwiperSlide> */}
                                <SwiperSlide><img src={things5} /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='discover_main_cont_one2'>
                            <p>Things to do</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* video consultation*/}
            <div className='video_consult_cont'>

            </div>


            {/*FAQ*/}
            <div className='on6_div33_cont'>
                <div className='on6_div3_cont'>

                    <div className="all_on_6_des_title" data-aos="fade-up">
                        <h1>Who needs an All-On-6 implant?</h1>
                        <p></p>
                    </div>

                    <div className='on6_div3_main_cont'>
                        <div className='on6_div3_main_cont_2'>
                            <ul>
                                <li data-aos="fade-up">
                                    <TiTick className="on6_tick_icon" />
                                    <div>
                                        If you are young, lose all your teeth and have adequate bone, with All-On-6 you can have your entire set of teeth again.
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <TiTick className="on6_tick_icon" />
                                    <div>
                                        We prescribe All-On-6 implants for patients who have an entire arch of missing teeth or who have partial tooth loss. All patients will receive a complete arch dental implant to replace their missing teeth. The All-On-6 approach is recommended as a reliable, long-term replacement for conventional dentures.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default Temp