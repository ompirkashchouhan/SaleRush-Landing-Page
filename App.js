import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, AnimatePresence } from "framer-motion";
import HeroSectionImg from "./assets/images/hero.png";
import CloudLogo from "./assets/images/cloud-Icon.png";
import HuesLogo from "./assets/images/hues-Icon.png";
import GreenishLogo from "./assets/images/greenish-Icon.png";
import AwesomeInterfaceLogo from "./assets/images/menu.png";
import AnalyticsLogo from "./assets/images/analytic-server.png";
import SecurityLogo from "./assets/images/verified.png";
import AnalyticsDataLogo from "./assets/images/analytics-data-section.png";
import CorrectionMarkIcon from "./assets/images/correction-mark.png";
import CustomerSectionImg from "./assets/images/customers-section.png";
import IconBar from "./assets/images/icons-bar.png";
import WebLogo from "./assets/images/web-logo.png";
import ProductInsightsImg from "./assets/images/product-insights.png";
import LastOneSecImg from "./assets/images/last-one-section-image.png";
import SocialIcons from "./assets/images/social-icons.png";
import "./App.css";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [email, setEmail] = useState('');

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { x: 5, color: "#fff" }
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <>
      {/* < < < Navigation Bar > > > */}

      <motion.nav
        className="custom-navbar shadow-sm py-2 px-4 bg-white position-relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="d-flex align-items-center NavContainer  justify-content-between gap-3">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <div className="logo-icon me-2 bg-dark text-white d-flex justify-content-center align-items-center rounded">
              S
            </div>
            <span className="fw-bold fs-5">SaleRush</span>
          </div>

          {/* Toggler */}
          <button
            className="navbar-toggler d-md-none border-0 bg-transparent"
            onClick={toggleNavbar}
          >
            <span className="fs-3">{isOpen ? "✕" : "☰"}</span>
          </button>

          {/* Desktop Menu */}
          <div className="d-none d-md-flex align-items-center gap-3">
            <ul className="nav">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Pages <FontAwesomeIcon icon={faChevronDown} size="sm" />
                </a>
                <ul className="dropdown-menu myNavDropMenu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Page 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Page 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Page 3
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Page 4
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Page 5
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Page 6
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Page 7
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Page 8
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Page 9
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Pricing
                </a>
              </li>
            </ul>
            <button className="btn btn-dark px-3">Sign Up</button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu d-md-none mt-3"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="nav flex-column text-center">
                <li className="nav-item">
                  <a href="#" className="nav-link active">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Blog
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Pages <FontAwesomeIcon icon={faChevronDown} size="sm" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Page 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Page 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Page 3
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Page 4
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Page 5
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Page 6
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Page 7
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Page 8
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Page 9
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mt-2">
                  <button className="btn btn-dark px-3">Sign Up</button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* < < < Hero Section > > > */}

      <section className="w-full px-4 md:px-10 py-20 flex flex-col items-center text-center bg-white">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl"
        >
          <h1 className="MainHeroText">
            Drive Growth with <br />
            <span className="text-gray-500">
              Comprehensive{" "}
              <span className="text-black">
                <span className="SalesTextHero">Sales</span> Data
              </span>
            </span>
          </h1>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 paraHeroSection max-w-xl"
        >
          Gain Deep Insights, Optimize Performance, and Drive Revenue Growth
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <button className="px-6 py-3 btn-free rounded-md bg-black text-white font-medium shadow-md hover:bg-gray-800 transition">
            Get Started for Free
          </button>
          <button className="px-6 py-3 btn-demo rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition">
            Request a Demo
          </button>
        </motion.div>

        {/* Chart/Image - You will replace this src with your actual image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <img src={HeroSectionImg} alt="Sales Chart" className="heroImg" />
        </motion.div>

        <section className="testimonials-section">
          <Container>
            <Row className="g-4">
              {/* Testimonial Card 1 */}
              <Col md={4}>
                <Card className="h-100 testimonial-card">
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p className="testimonial-text">
                        “Simple, straightforward, and <br /> super powerful”
                      </p>
                      <img src={CloudLogo} className="testimonialCardLogos"/>
                    </blockquote>
                  </Card.Body>
                </Card>
              </Col>

              {/* Testimonial Card 2 */}
              <Col md={4}>
                <Card className="h-100 testimonial-card" id="testimonialCard2">
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p className="testimonial-text">
                        “Simply a joy to use, and great <br /> user interface”
                      </p>
                      <img src={HuesLogo} className="testimonialCardLogos"/>
                    </blockquote>
                  </Card.Body>
                </Card>
              </Col>

              {/* Testimonial Card 3 */}
              <Col md={4}>
                <Card className="h-100 testimonial-card">
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p className="testimonial-text">
                        “The best sales analytics tool on <br /> the market”
                      </p>
                      <img src={GreenishLogo} className="testimonialCardLogos"/>
                    </blockquote>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </section>

      {/* < < < Our Advance Feature Section > > > */}

      <section className="discover-section py-5">
      <Container>
        <Row className="align-items-center g-5">
          {/* Left Column - Text Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={fadeInLeft}
            >
              <h2 className="display-5 leadBoth fw-bold mb-4">
                Discover the power of real-time data, <br /> insightful analytics, and intuitive dashboards
              </h2>
              <h2 className="lead leadBoth mb-5">
                Our Sales Overview SaaS is designed to help <br /> you monitor, analyze, and optimize your sales<br />
                performance like never before.
              </h2>
            </motion.div>
            
        
            <Col lg={6}>
              <ul className="advanceFeatureDiv">
                <li>Advance Features</li>
              </ul>
            </Col>

          {/* Right Column - Graphic */}
          <Col lg={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={fadeInRight}
            >
                           <div className="features-wrapper">
                {/* Feature 1 */}
                <motion.div
                  className="feature-item mb-5"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="d-flex align-items-start gap-4">
                    <div className="icon-box">
                      <img src={AwesomeInterfaceLogo} className="AdvanceFeaturesImg"/>
                    </div>
                    <div>
                      <h3 className="h4 fw-bold">Awesome Interface</h3>
                      <p className="mb-0">
                        It combines clean aesthetics with practical usability, ensuring users can navigate and interact.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Feature 2 */}
                <motion.div
                  className="feature-item mb-5"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="d-flex align-items-start gap-4">
                    <div className="icon-box">
                    <img src={AnalyticsLogo} className="AdvanceFeaturesImg"/>
                    </div>
                    <div>
                      <h3 className="h4 fw-bold">Easy Analytics</h3>
                      <p className="mb-0">
                        Cutting-edge encryption technologies and robust protocols, we safeguard your data against cyber threats.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Feature 3 */}
                <motion.div
                  className="feature-item"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="d-flex align-items-start gap-4">
                    <div className="icon-box">
                    <img src={SecurityLogo} className="AdvanceFeaturesImg"/>
                    </div>
                    <div>
                      <h3 className="h4 fw-bold">Strong Security</h3>
                      <p className="mb-0">
                        With cutting-edge encryption technologies and robust protocols, we safeguard your data.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* < < < Analytics Data Section > > > */}

    <section className="boost-section">
      <Container>
        <Row className="align-items-center g-5">
      
          {/* Right Column */}
          <Col lg={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={fadeInRight}
            >
              <div className="sales-metrics">
                <img src={AnalyticsDataLogo}/>
              </div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={fadeInLeft}
            >
              <h2 className="HeadlineBoostSec display fw-bold ">
                <span className="HeadlineSpanBoostSec">Boost revenue</span> with <br /> data-driven decisions
              </h2>
              <p className="paraBoostSection mb-5">
                Get real-time insights, streamline your sales pipeline, and boost your team's productivity 
                with our cutting-edge Sales Overview platform.
              </p>

              <div className="checklist mb-5">
                <div className="firstRowChecklist">
                  <div className="checklistItem"><img src={CorrectionMarkIcon}/> Money</div>
                  <div className="checklistItem"><img src={CorrectionMarkIcon}/> Revenue</div>
                  <div className="checklistItem"><img src={CorrectionMarkIcon}/> Boost Sales</div>
                </div>
                <div className="secondRowChecklist">
                <div className="checklistItem"><img src={CorrectionMarkIcon}/> Sales Analytics</div>
                <div className="checklistItem"><img src={CorrectionMarkIcon}/> Sales Management</div>
                </div>
              </div>

              <button className="px-6 py-3 btnBlueBoostSec btn-free rounded-md bg-black text-white font-medium shadow-md hover:bg-gray-800 transition">
                Get Started for Free
              </button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* < < < Customers Section > > > */}

    <section className="customers_Section">
      <Container>
      <div className="HeadlinesSection">
        <h1 className="HeadlineBoostSec fw-bold ">
          "SaleRush makes it easy to go <br /> as simple or as complex as you <br /> want 
          <span className="HeadlineSpanBoostSec"> Highly recommend!"</span>
        </h1> <br />
        <br /> <h4>- The Lorem</h4>
      </div>
      <div className="customerSecondSec">
        <div className="customerImageSec">
          <img src={CustomerSectionImg} />
        </div>
        <div className="customerListSec">
          <div><img src={CorrectionMarkIcon}/> Track your traffic source</div>
          <div><img src={CorrectionMarkIcon}/> Research social media</div>
          <div><img src={CorrectionMarkIcon}/> Find top source</div>
          <div><img src={CorrectionMarkIcon}/> Make strategy</div>
          <div><img src={CorrectionMarkIcon}/> Find targeted audience</div>
        </div>
      </div>
      </Container>
    </section>

    {/* < < < Toolkit Section> > > */}

    <section className="py-5" style={{ backgroundColor: '#f4f4f4', minHeight: '70vh' }}>
      <Container className="d-flex flex-column justify-content-center h-100">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
            >
              <p className="display text-center toolkitSectionWord fw-bold mb-3" style={{ color: '#2d3436' }}>
                Replace your finance management tool, and more.
              </p>
            </motion.div>


          {/* Right Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="display-6 text-center fw-bold mb-3" style={{ color: '#2d3436' }}>
                Simplify your creative <span className="toolkitSectionWord">toolkit</span>
              </h1>
            </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="toolkitImageSection">
            <img className="webLogo" src={WebLogo}/>
            <img className="iconsAndLogo" src={IconBar}/>
          </div>
        </motion.div>
      </Container>
    </section>

    


    {/* < < < Product Insights Section > > > */}

    <section className="boost-section productInsSection">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={fadeInLeft}
            >
              <h2 className="HeadlineBoostSec display fw-bold ">
              Elevate Your <br /><span className="HeadlineSpanBoostSec">Product</span> Insights <br /> with ease!
              </h2>
              <p className="display-8  mb-5">
                Get real-time insights, streamline your sales pipeline,<br /> and boost your team's productivity 
                with our cutting-<br />edge Sales Overview platform.
              </p>

              <button className="px-6 py-3 btn-free rounded-md bg-black text-white font-medium shadow-md hover:bg-gray-800 transition">
                Get Started for Free
              </button>
            </motion.div>
          </Col>

          {/* Right Column */}
          <Col lg={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={fadeInRight}
            >
              <div className="sales-metrics">
                <img className="productInsightImg" src={ProductInsightsImg}/>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="py-5 px-3 mainCardsSection container">
      <h2 className="text-center fw-bold mb-5">
        Don’t take our <span className="text-muted fw-normal">word</span> for it
      </h2>
      <div className="row g-4">
      <Card className="card_Main">
        <Card.Body>
          <div className="d-flex align-items-center mb-3">
            <div className="rounded-circle bg-secondary" style={{ width: 40, height: 40 }}></div>
            <div className="ms-3">
              <h6 className="mb-0">Ellyse Perry</h6>
              <small className="text-muted">@ellyseperry77</small>
            </div>
          </div>
          <Card.Text>
          This platform has been a game-changer for our sales operations. The comprehensive analytics and customizable reports have streamlined our workflow, saving us countless hours and significantly increasing our productivity.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card_Main">
        <Card.Body>
          <div className="d-flex align-items-center mb-3">
            <div className="rounded-circle bg-secondary" style={{ width: 40, height: 40 }}></div>
            <div className="ms-3">
              <h6 className="mb-0">Alyssa Healy</h6>
              <small className="text-muted">@hh_healy</small>
            </div>
          </div>
          <Card.Text>
          The level of detail and accuracy provided by this SaaS is unparalleled. It has enabled us to track our sales performance with precision and has been instrumental in identifying key areas for improvement and growth.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card_Main">
        <Card.Body>
          <div className="d-flex align-items-center mb-3">
            <div className="rounded-circle bg-secondary" style={{ width: 40, height: 40 }}></div>
            <div className="ms-3">
              <h6 className="mb-0">Mitchell Starc</h6>
              <small className="text-muted">@mstarc65</small>
            </div>
          </div>
          <Card.Text>
          The integration of this Sales Overview SaaS into our daily operations has been seamless. The insights we’ve gained from the platform have been invaluable in enhancing our sales tactics and achieving our targets.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card_Main">
        <Card.Body>
          <div className="d-flex align-items-center mb-3">
            <div className="rounded-circle bg-secondary" style={{ width: 40, height: 40 }}></div>
            <div className="ms-3">
              <h6 className="mb-0">Mitchell Starc</h6>
              <small className="text-muted">@mstarc65</small>
            </div>
          </div>
          <Card.Text>
          Since adopting this Sales Overview SaaS, we’ve seen a marked improvement in our sales strategy and execution. The user-friendly interface and detailed data analytics have provided us with a clear picture of our sales pipeline and growth opportunities.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card_Main">
        <Card.Body>
          <div className="d-flex align-items-center mb-3">
            <div className="rounded-circle bg-secondary" style={{ width: 40, height: 40 }}></div>
            <div className="ms-3">
              <h6 className="mb-0">Alyssa Healy</h6>
              <small className="text-muted">@hh_healy</small>
            </div>
          </div>
          <Card.Text>
          This SaaS has transformed our sales overview process. The ability to generate detailed reports and visualize data trends has given us a significant edge in planning and executing our sales strategies.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card_Main">
        <Card.Body>
          <div className="d-flex align-items-center mb-3">
            <div className="rounded-circle bg-secondary" style={{ width: 40, height: 40 }}></div>
            <div className="ms-3">
              <h6 className="mb-0">Alyssa Healy</h6>
              <small className="text-muted">@hh_healy</small>
            </div>
          </div>
          <Card.Text>
          The real-time data and comprehensive reporting features of this SaaS have provided us with a deep understanding of our sales metrics. It’s an indispensable tool for any sales team looking to drive results.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className="text-center mt-5">
        <Button variant="dark">Show More</Button>
      </div>
    </section>


    <section className="py-5" style={{ backgroundColor: '#f4f4f4', minHeight: '70vh' }}>
      <Container className="d-flex flex-column justify-content-center h-100">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-6 text-center fw-bold mb-3" style={{ color: '#2d3436' }}>
                Enhance <span className="toolkitSectionWord">Sales</span> Performance with <br />
                Intelligent Analytics
              </h1>
            </motion.div>


          {/* Right Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="display text-center toolkitSectionWord fw-bold mb-3" style={{ color: '#2d3436' }}>
                Gain Deep Insights, Optimize Performance and Drive Revenue Growth
              </p>
              <center>

            <button className="px-6 py-3 btnBlueBoostSec btn-free rounded-md bg-black text-white font-medium shadow-md hover:bg-gray-800 transition">
                Get Started for Free
            </button>
              </center>
            </motion.div>


        {/* Social Media Links */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="toolkitImageSection">
            <img className="lastOneSectionImg" src={LastOneSecImg}/>
          </div>
        </motion.div>
      </Container>
    </section>


    <footer className="footer py-5">
      <Container>
        <Row className="g-4">
        <Col md={6} lg={4}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              viewport={{ once: true }}
            >
              <div className="parentSectionImg">
                <div className="imageLogoSection"><img className="footerLogo" src={WebLogo}/> <h5>SaleRush</h5></div>
                <p>Discover the power of data to drive<br />your sales strategy and exceed<br />your targets.</p>
              </div>
            </motion.div>
          </Col>

          {/* Useful Links Column */}
          <Col md={6} lg={2}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              viewport={{ once: true }}
            >

              <h5 className="mb-4">Useful Links</h5>
              <ul className="list-unstyled">
                {['Home', 'About', 'Services', 'Features', 'Pricing'].map((link, index) => (
                  <motion.li
                    key={link}
                    variants={linkVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover="hover"
                    className="mb-2"
                  >
                    <a href="/" className="text-secondary text-decoration-none">{link}</a>
                  </motion.li>
                ))}
              </ul>
              
            </motion.div>
          </Col>

          {/* Company Column */}
          <Col md={6} lg={2}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h5 className="mb-4">Company</h5>
              <ul className="list-unstyled">
                {['Terms & Conditions', 'Privacy Policy', 'Cookie Preferences'].map((link, index) => (
                  <motion.li
                    key={link}
                    variants={linkVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileHover="hover"
                    className="mb-2"
                  >
                    <a href="/" className="text-secondary text-decoration-none">{link}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>

          {/* Newsletter Column */}
          <Col md={12} lg={4}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="newsletter"
            >
              <h5 className="mb-4">Subscribe Newsletter</h5>
              <Form>
                <motion.div className="d-flex">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="inputFooter"
                  />
                  <Button 
                    variant="primary" 
                    className="submitBtnFooter px-4"
                  >
                    Submit
                  </Button>
                </motion.div>
              </Form>
            </motion.div>
          </Col>
          <hr />
        </Row>

        {/* Copyright Section */}
        <Row className="copyrightIconSec">
          <Col className=" mt-5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-secondary mb-0">
                © 2024 Company All rights reserved.
              </p>
            </motion.div>
          </Col>
          <Col>
            <div className="iconsSetSection"><img src={SocialIcons}/>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>

    </>
  );
}





export default App;
