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
        'Network Specialist',
        `CCIE Routing and Switching #18148`
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
                <p><em>Currently a Solution Area Specialist (Azure) looking for transition into the professional cloud industry as an Cloud Engineer/Software Engineer. 
                  I have experience in client-facing positions and have achieved 2 AWS certifications and 1 Azure Certification whilst working full-time.</em></p>
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
                <div className="portfolio-links">
                  <a href="/img/me.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bi bi-plus"></i></a>
                  <a href="#" title="More Details"><i className="bi bi-link"></i></a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section id="services" className="services">
        <div className="container">

          <div className="section-title">
            <h2>Services</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div className="icon"><i className="bi bi-briefcase"></i></div>
              <h4 className="title"><a href="">Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="bi bi-card-checklist"></i></div>
              <h4 className="title"><a href="">Dolor Sitema</a></h4>
              <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i className="bi bi-bar-chart"></i></div>
              <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="bi bi-binoculars"></i></div>
              <h4 className="title"><a href="">Magni Dolores</a></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><i className="bi bi-brightness-high"></i></div>
              <h4 className="title"><a href="">Nemo Enim</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
              <div className="icon"><i className="bi bi-calendar4-week"></i></div>
              <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
              <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>

        </div>
      </section>

      <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row" data-aos="fade-in">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Chiang Mai, Thailand 50000</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+66 12 345 6789</p>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.1334151886986!2d99.02370390581586!3d18.797231177207436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da254676f88ae3%3A0x82d853f3078e7411!2sHillside%20Condo%208!5e0!3m2!1sen!2sth!4v1676881090365!5m2!1sen!2sth" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form className="email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" required />
                </div>
                <div className="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" required />
                </div>
              </div>
              <div className="form-group">
                <label for="name">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" required />
              </div>
              <div className="form-group">
                <label for="name">Message</label>
                <textarea className="form-control" name="message" rows="10" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    </main>
    </div>
  )
}

export default IndexPage;