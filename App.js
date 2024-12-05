import './App.css';
import X_xacker from './images/Screenshot 2024-11-13 050041.png'
import Diyor from './images/Diyor.webp'
import Islom from './images/Islom.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function App() {
    return (
        <div className="App">
            <header class="header">
                <a href="#home" class="logo">Mirsaid__
                    <span>X</span>__Xaker</a>

                <i class='bx bx-menu' id="menu-icon"></i>

                <nav class="navbar">
                    <a href="#home" class="active">Home</a>
                    <a href="#education">Education</a>
                    <a href="#services">Services</a>
                    <a href="#testimonials">Testimonials</a>

                </nav>
            </header>
            <section class="home" id="home">
                <div class="home-content">
                    <h1>Hi, It's <span>Mirsaid</span></h1>
                    <h3 class="text-animation">I'm a Mirsaid <span>
                    </span></h3>
                    <p>Salom mening ismim Baxodirov Mirsaid yoshim 15 da. Men xozirda Dasturlash kursiga boryapman. Dasturlash kursida men juda ko'p narsani o'rgandim, masalan saytlar yaratishni sayt yuritish kabi bilimlarga ega bo'ldim. Bunga JALOLIDDIN ustozim sababchidirlar.</p>

                    <div class="social-icons">
                        <a target="_blank" href="https://www.linkedin.com/feed/"> <FaLinkedin />
                        </a>
                        <a target="_blank" href="https://github.com/"> <FaGithub />
                        </a>
                        <a target="_blank" href="https://www.instagram.com/?next=%2F"> <FaInstagramSquare />
                        </a>
                        <a target="_blank" href="https://x.com/"> <FaTwitter />
                        </a>
                    </div>

                    <div class="btn-group">
                        <a href="#" class="btn">Hire</a>
                        <a href="#contact" class="btn">Contact</a>
                    </div>
                </div>
                <div class="home-img">
                    <img src={X_xacker} alt="" />
                </div>
            </section>
            <section class="education" id="education">
                <h2 class="heading">Education</h2>

                <div class="timeline_items">
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2021</div>
                    </div>
                    <div class="timeline-content">
                        <h3>High School</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, a sapiente recusandae cumque rem dignissimos natus deleniti debitis accusantium voluptatum.</p>



                    </div>




                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2022</div>
                    </div>
                    <div class="timeline-content">
                        <h3>University</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, a sapiente recusandae cumque rem dignissimos natus deleniti debitis accusantium voluptatum.</p>


                    </div>


                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2023</div>
                    </div>
                    <div class="timeline-content">
                        <h3>Internship</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, a sapiente recusandae cumque rem dignissimos natus deleniti debitis accusantium voluptatum.</p>

                    </div>


                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2024</div>
                    </div>
                    <div class="timeline-content">
                        <h3>Job 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, a sapiente recusandae cumque rem dignissimos natus deleniti debitis accusantium voluptatum.</p>


                    </div>



                </div>
            </section>
            <section class="services" id="services">
                <h2 class="heading">Services</h2>

                <div class="services-container">
                    <div class="service-box">
                        <div class="service-info">
                            <h4>UI Design</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, repellendus. Commodi rem ad, quam sunt quidem excepturi, similique voluptatum soluta corporis earum in eveniet consequuntur quos voluptate obcaecati accusantium et.</p>
                        </div>
                    </div>

                    <div class="service-box">
                        <div class="service-info">
                            <h4>Frontend Development</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, repellendus. Commodi rem ad, quam sunt quidem excepturi, similique voluptatum soluta corporis earum in eveniet consequuntur quos voluptate obcaecati accusantium et.</p>
                        </div>
                    </div>

                    <div class="service-box">
                        <div class="service-info">
                            <h4>Backend Development</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, repellendus. Commodi rem ad, quam sunt quidem excepturi, similique voluptatum soluta corporis earum in eveniet consequuntur quos voluptate obcaecati accusantium et.</p>
                        </div>
                    </div>

                    <div class="service-box">
                        <div class="service-info">
                            <h4>Testing </h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, repellendus. Commodi rem ad, quam sunt quidem excepturi, similique voluptatum soluta corporis earum in eveniet consequuntur quos voluptate obcaecati accusantium et.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="testimonials" id="testimonials">
                <div class="testimonials-box">
                    <h2 class="heading">Testimonials</h2>



                    <div class="wrapper">
                        <div class="testimonials-item">
                            <img src={Diyor} alt="" />
                            <h2>Islom</h2>
                            <div class="rating">
                                <i class='bx bxs-star'
                                    id="star"></i>
                                <i class='bx bxs-star'
                                    id="star"></i>
                                <i class='bx bxs-star'
                                    id="star"></i>
                                <i class='bx bxs-star'
                                    id="star"></i>
                                <i class='bx bxs-star'
                                    id="star"></i>

                            </div>
                            <p>"This is my friend Islam. He is 17 years old. Islam is currently attending the Dog class with me. Islam knows as much as I do. Sometimes I ask for help"</p>
                        </div>

                        <div class="testimonials-item">
                            <img src={Islom} alt="" />
                            <h2>Diyor</h2>
                            <div class="rating">
                                <i class='bx bxs-star'
                                    id="star"></i>
                                <i class='bx bxs-star'
                                    id="star"></i>
                                <i class='bx bxs-star'
                                    id="star"></i>
                                <i class='bx bxs-star'
                                    id="star"></i>
                                <i class='bx bxs-star'
                                    id="star"></i>
                            </div>
                            <p>"This will be my friend Diyar. He is 15 years old. Diyar is currently attending the Dog class with me. Diyar also knows a lot. But not like me. Sometimes he asks me for help"</p>
                        </div>

                        <div class="testimonials-item">
                            <img src={Diyor} alt="" />
                            <h2>Abdurahmon</h2>
                            <div class="rating">
                                <i class='bx bxs-star'
                                    id="star"></i>
                                <i class='bx bxs-star'
                                    id="star"></i>
                                <i class='bx bxs-star'
                                    id="star"></i>
                                <i class='bx bxs-star'
                                    id="star"></i>
                                <i class='bx bxs-star'
                                    id="star"></i>
                            </div>
                            <p>"This is my friend Abdurrahman. He is 15 years old. Abdurakhman is currently attending the Dog course with me. Abdura also knows a lot. But not mine. Sometimes he asks me for help"</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="footer">
                <div class="social">
                    <a target="_blank" href="https://www.linkedin.com/feed/"> <FaLinkedin /> </a>
                    <a target="_blank" href="https://github.com/"> <FaGithub /> </a>
                    <a target="_blank" href="https://www.instagram.com/"> <FaInstagramSquare /> </a>
                    <a target="_blank" href="https://x.com/"> <FaTwitter /> </a>
                </div>

                <ul class="list">
                    <li>
                        <a href="#">FAQ</a>
                    </li>

                    <li>
                        <a href="#">Services</a>
                    </li>

                    <li>
                        <a href="#">About Me</a>
                    </li>

                    <li>
                        <a href="#">Testimonials</a>
                    </li>
                </ul>

            </footer>
        </div>
    );
}

export default App;
