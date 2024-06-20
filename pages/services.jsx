import React from 'react'
import SEO from './seo'
import Color from '../components/utils/page.colors.util'
import colors from '../content/index/_colors.json'
import Image from 'next/image'
import Container from '../components/structure/container';
import BadgesBlock from '../components/blocks/about.badges.block'
// Section scss
import about from '../styles/sections/index/about.module.scss'
import Section from '../components/structure/section'
import SectionTitle from '../components/blocks/section.title.block'
import { isDesktop } from '../components/helperhooks'

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": [
      "Website Development",
      "Full-Stack Web Application Development",
      "UI/UX Design",
      "SEO Optimizations",
      "Hosting Services",
      "Brand Strategy",
      "Digital Marketing"
    ],
    "provider": {
      "@type": "Person",
      "name": "Mohit Harge"
    },
    "areaServed": "Global",
    "description": "Explore the range of web development services offered by Mohit Harge, including website development, full-stack web application development, UI/UX design, SEO optimizations, hosting services, brand strategy, and digital marketing.",
    "url": "https://mohitharge.vercel.app/services"
  };
  return (
    <>
      <SEO 
      title="Services - Mohit Harge"
      description="Explore the range of web development services offered by Mohit Harge, including website development, full-stack web application development, UI/UX design, SEO optimizations, hosting services, brand strategy, and digital marketing."
      keywords="Web Development Services, Full-Stack Development, UI/UX Design, SEO Optimizations, Hosting Services, Brand Strategy, Digital Marketing, Mohit Harge"
      author="Mohit Harge"
      image="https://mohitharge.vercel.app/services-image.jpg"
      url="https://mohitharge.vercel.app/services"
      structuredData={structuredData}
    />
      {/* <BentoGridThirdDemo /> */}
      <Section classProp={about.section}>	
        <Container spacing={['verticalXXXLrg']}>
          <SectionTitle
            title="Services - Mohit Harge"
            // preTitle="Synopsis"
            id="aboutme"
            subTitle="Discover the web development services offered by Mohit Harge, including responsive design, full-stack development, and UI/UX design."
          />
          <section className={about.content}>
            <div className={about.copy2} >
            <BadgesBlock
              page="services"
                title="Website Development"
                containerClass={about.container2}
                list={websiteDevelopment} 
                fullContainer="fullContainer"
                block="methods" 
                icon="laptop-code"
                copy="Transform your online presence with a fully customized website. I specialize in creating responsive, user-friendly websites that look great on all devices. Whether you need a simple informational site or a complex e-commerce platform, I have the skills to bring your vision to life."
                // invertedColor="invertedColor"
                headerIcon={`${about.icon}`}
              />
              <BadgesBlock
                page="services" 
                title="Web Application Development (Full Stack)" 
                containerClass={about.container2}
                list={webApplication} 
                fullContainer="fullContainer"
                block="methods" 
                icon="cubes"
                copy="From front-end to back-end, I provide complete web application development services. I develop robust, scalable web applications that enhance user engagement and drive business growth."
                // invertedColor="invertedColor"
                headerIcon={`${about.icon}`}
              />
              <BadgesBlock
                page="services" 
                title="UI/UX and Web Design (Figma)" 
                containerClass={about.container2}
                list={uiuxDesign} 
                fullContainer="fullContainer"
                block="methods" 
                icon="file-lines"
                copy="Elevate your digital experience with intuitive UI/UX design. Using Figma, I design visually appealing interfaces that offer seamless navigation and enhance user satisfaction."
                // invertedColor="invertedColor"
                headerIcon={`${about.icon}`}
              />
              <BadgesBlock
                page="services" 
                title="SEO Optimizations & Hosting Services" 
                containerClass={about.container2}
                list={seoOptimizations} 
                fullContainer="fullContainer"
                block="methods" 
                icon="sitemap"
                copy="Improve your website's visibility and performance with my SEO optimization and hosting services. I handle everything from domain setup to deployments, ensuring your site is fast, secure, and ranks well on search engines."
                // invertedColor="invertedColor"
                headerIcon={`${about.icon}`}
              />
              <BadgesBlock
                page="services" 
                title="Brand Strategy and Planning" 
                containerClass={about.container2}
                list={brandStrategy} 
                fullContainer="fullContainer"
                block="methods" 
                icon="book"
                copy="Strengthen your brand with strategic planning and innovative solutions. I help define your brand’s voice, positioning, and market strategy to ensure it resonates with your target audience."
                // invertedColor="invertedColor"
                headerIcon={`${about.icon}`}
              />
              <BadgesBlock
                page="services" 
                title="Digital Marketing" 
                containerClass={about.container2}
                list={digitalMarketing} 
                fullContainer="fullContainer"
                block="methods" 
                icon="tablet"
                copy="Drive traffic and boost your online presence with tailored digital marketing strategies. I offer a range of services, including social media marketing, content creation, and paid advertising, to help you reach and engage your audience effectively."
                invertedColor="invertedColor"
                headerIcon={`${about.icon}`}
              />
            </div>
          </section>	
          <p>By choosing my services, you are assured of professional and dedicated support tailored to your unique needs. Let&apos;s work together to achieve your digital goals and make a significant impact online. Contact me today to get started!</p>
        </Container>
      </Section>
      <div style={{ minHeight: "calc(100vh - 200px)", paddingTop:"6rem", width:"90%", margin:"0 auto", borderTop:"2px solid", textAlign:"center" }}>
        <Color colors={colors} />
        <p>This page is being updated with detailed information and will be available soon.</p> <br />
        <h1>Get Started with Our Services</h1>
        <p>To help us understand your needs better and provide you with the best possible service, please fill out the questionnaire for the specific service you are interested in.</p>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"2rem"}}>
          <div style={isDesktop ? {padding:"0 2rem"} : {}}>
            <Image style={{cursor:"pointer"}} onClick={ ()=> window.open("https://forms.gle/g2h8S9gVxNr2MToz5", "_blank")} height={200} width={645} src="/img/questionnaire.png" alt="questionnaire" />
          </div>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe94vsVtazvKEVogk389OnOBjgGJ8qbi_dWu0lRpPFSqMPcYg/viewform?embedded=true" width={isDesktop ? "900" : "390"} height={isDesktop ? "3400" : "3600"} frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </div>
    </>
  )
}

const websiteDevelopment = [
  { key: 'palette', name: 'Custom web design tailored to your brand', type: 'fad' },
  { key: 'mobile-alt', name: 'Mobile-first approach ensuring responsiveness', type: 'fad' },
  { key: 'code', name: 'Integration with the latest web technologies', type: 'fad' },
];

const webApplication = [
  { key: 'laptop-code', name: 'Full-stack development using modern frameworks', type: 'fad' },
  { key: 'lock', name: 'Secure and scalable architecture', type: 'fad' },
  { key: 'sync', name: 'Real-time functionality and API integration', type: 'fad' },
];

const uiuxDesign = [
  { key: 'users', name: 'User-centered design approach', type: 'fad' },
  { key: 'project-diagram', name: 'Interactive prototypes and wireframes', type: 'fad' },
  { key: 'paint-brush', name: 'Consistent and engaging visual design', type: 'fad' },
];

const seoOptimizations = [
  { key: 'search', name: 'On-page and off-page SEO', type: 'fad' },
  { key: 'tachometer-alt', name: 'Speed optimization and mobile friendliness', type: 'fad' },
  { key: 'server', name: 'Reliable hosting and domain management', type: 'fad' },
];

const brandStrategy = [
  { key: 'chart-line', name: 'Comprehensive brand analysis', type: 'fad' },
  { key: 'briefcase', name: 'Competitive research and market positioning', type: 'fad' },
  { key: 'bullhorn', name: 'Strategic branding initiatives', type: 'fad' },
];

const digitalMarketing = [
  { key: 'bullseye', name: 'Customized digital marketing plans', type: 'fad' },
  { key: 'thumbs-up', name: 'Social media management and advertising', type: 'fad' },
  { key: 'file-alt', name: 'Content marketing and SEO copywriting', type: 'fad' },
];



export default Services