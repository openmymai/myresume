import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Typed from 'typed.js';

const IndexPage = () => {
  // Typed in hero section
  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'Solution Architect',
        'Software Engineer',
        'Developer'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    };

    typed.current = new Typed(el.current, options)

    return () => {
      typed.current.destroy()
    }
  }, []);
  
  return (
    <div>
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>Sirisak Chantanate</h1>
          <p>
              I'm <span style={{ whiteSpace: 'pre' }} ref={el} />
          </p>
        </div>
      </section>
      <main id="main">
      <section id="about" className="about">
        <div className="container">

          <div className="section-title">
            <h2>About</h2>
            <p>Software Engineer, expertise with ReactJS. Develop large scale solutions with asynchronous event-driven 
              running on microservices. Cloud Solution Architect with experience in both Enterprise and Service Provider. 
              Proven ability to secure cloud deployments and protect sensitive data. Adept at working with senior management 
              to develop and implement security strategy. Cisco Certified CCIE#18148 Routing and Switch with 20+ years experience in networking.</p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <Image 
                src="/img/me.jpeg" 
                className="img-fluid" 
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Solution Architect &amp; Software Engineer &amp; Web Developer.</h3>
              <p className="fst-italic">
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>21 October 1978</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span><a href="https://openmymai.github.io">https://openmymai.github.io</a></span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Chiang Mai, Thailand</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>45</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <p>
                Currently a Solution Area Specialist (Azure) looking for transition into the professional cloud industry as an Cloud Engineer/Software Engineer. 
                I have experience in client-facing positions and have achieved 2 AWS certifications and 1 Azure Certification whilst working full-time.
              </p>
            </div>
          </div>

        </div>
      </section>
      
    
      <section id="resume" className="resume">
        <div className="container">

          <div className="section-title">
            <h2>Resume</h2>
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Sirisak Chantanate</h4>
                <p><em>Currently a Solution Area Specialist (Azure) looking for transition into the professional cloud industry as an Cloud Engineer. I have experience in client-facing positions and have achieved 2 AWS certifications and 1 Azure Certification whilst working full-time.</em></p>
                <ul>
                  <li>Chiang Mai, Thailand</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Bachelor Degree of Engineering, Computer Engineering</h4>
                <h5>1996 - 1999</h5>
                <p><em>Chiang Mai University, Chiang Mai, Thailand</em></p>
                <p>Specialist in Linux Networking and Artificial Intelligence</p>
              </div>

              <h3 className="resume-title">Licenses &amp; Certifications</h3>
              <div className="resume-item">
                <h4>AWS</h4>
                <p>AWS Certified Solution Architect Professional</p>
                <p>AWS Certified Cloud Practitioner</p>
                <p>AWS Migration Ambassador Foundations</p>
              </div>
              <div className="resume-item">
                <h4>Azure</h4>
                <p>Azure Fundamentals</p>
              </div>
              <div className="resume-item">
                <h4>Cisco</h4>
                <p>Cisco Certificate Internetwork Expert (CCIE R&S #18148)</p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Solution Area Specialist</h4>
                <h5>Nov 2022 - Present</h5>
                <p><em>Denave, Kuala Lumpur, MY </em></p>
                <ul>
                  <li>Support Tele Sales to drive large and complex deals with advance workload in SMB.</li>
                  <li>Support SMB Segment to drive Cloud Adoption, Cloud Consumption, Upsell and Cross Sell Cloud Solutions with high propensity customer sets through sell-with partners, and unmanage partners.</li>
                  <li>Supporting partners to drive Azure and Office 365 campaign/programs developed by Microsoft.</li>
                  <li>Supporting partners to drive leads/opportunities from Microsoft engines include Marketing, Tele-sales.</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Technical Presale & Project Manager</h4>
                <h5>Aug 2022 - Nov 2022</h5>
                <p><em>Aware Corporation, Chiang Mai, TH</em></p>
                <ul>
                  <li>Acquire new leads, new opportunities and new projects from corporates and enterprises through pre-sales efforts and activities, customer engagements and sales efforts and activities.</li>
                  <li>Supporting the ability for cloud solutions sales and selling and delivering cloud migration services.</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Software Engineer &amp; Developer</h4>
                <h5>Jan 2018 - Present</h5>
                <p><em>Freelance</em></p>
                <ul>
                  <li>Responsible for the analysis, design, testing, development and maintenance of best in class software experiences.</li>
                  <li>Adept with the agile software development lifecycle and DevOps principles.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="portfolio" className="portfolio section-bg">
        <div className="container">

          <div className="section-title">
            <h2>Portfolio</h2>
            <p></p>
          </div>

          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <Image 
                  src="/img/me.jpeg" 
                  className="img-fluid" 
                  alt=""
                  width={450}
                  height={500}
                />
                <div class="portfolio-links">
                  <a href="/img/me.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bi bi-plus"></i></a>
                  <a href="#" title="More Details"><i className="bi bi-link"></i></a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
    </div>
  )
}

export default IndexPage;