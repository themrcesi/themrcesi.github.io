"use client";

import React, { useState, useEffect, useRef, useCallback } from "react"
import { Shuffle, CalendarCog, Signpost, SlidersHorizontal, Settings, Star, MonitorCog, ChartNoAxesCombined, ChevronDownIcon, LinkedinIcon, GithubIcon, SendIcon, CloudIcon, DatabaseIcon, ServerIcon, BoxIcon, PlayIcon, TerminalIcon, DownloadIcon, GraduationCapIcon, ExternalLinkIcon, UserIcon, UsersIcon, BrainIcon, LightbulbIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { ReactTyped } from "react-typed";
import toast, { Toaster } from "react-hot-toast"
import Head from "next/head";


export default function Home() {
  const [currentTitle, setCurrentTitle] = useState(0)
  const titles = ["Data Scientist", "MSc Cloud Data Engineering and Data Science",  "MSc Artificial Intelligence"]
  const aboutRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    const form = e.target as HTMLFormElement;
    await fetch(form.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // Clear the form fields
    setFormData({
      name: "",
      email: "",
      message: ""
    })
    toast.success("Message sent successfully!", {
      style: {
        background: "#333",
        color: "#fff",
      },
      iconTheme: {
        primary: "#22c55e",
        secondary: "#fff",
      },
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }
  interface Skill {
    name: string;
    level: 'Basic' | 'Intermediate' | 'Advanced';
    icon: JSX.Element;
  }
  const skills: Skill[] = [
    { name: "Python", icon: <TerminalIcon className="h-6 w-6" />, level: "Advanced" },
    { name: "Cloud (AWS & GCP)", icon: <CloudIcon className="h-6 w-6" />, level: "Intermediate" },
    { name: "ETL orchestration (Airflow & Prefect)", icon: <DatabaseIcon className="h-6 w-6" />, level: "Advanced" },
    { name: "SQL", icon: <ServerIcon className="h-6 w-6" />, level: "Advanced" },
    { name: "Docker", icon: <BoxIcon className="h-6 w-6" />, level: "Advanced" },
    { name: "Streamlit", icon: <PlayIcon className="h-6 w-6" />, level: "Intermediate" },
    { name: "Terraform", icon: <SlidersHorizontal className="h-6 w-6" />, level: "Intermediate" },
    { name: "CI/CD (GitHub Actions)", icon: <GithubIcon className="h-6 w-6" />, level: "Basic" },
    { name: "Data Analysis & Visualization", icon: <ChartNoAxesCombined className="h-6 w-6" />, level: "Intermediate" },
    { name: "PySpark", icon: <Star className="h-6 w-6" />, level: "Basic" },
    { name: "Machine Learning (scikit-learn, Keras)", icon: <Settings className="h-6 w-6" />, level: "Intermediate" },
    { name: "MLOps (MLflow)", icon: <MonitorCog className="h-6 w-6" />, level: "Basic" },
  ]

  const softSkills = [
    { name: "Communication", icon: <UserIcon className="h-6 w-6" /> },
    { name: "Adaptability", icon: <Shuffle className="h-6 w-6" /> },
    { name: "Teamwork", icon: <UsersIcon className="h-6 w-6" /> },
    { name: "Problem Solving & Analytical Thinking", icon: <BrainIcon className="h-6 w-6" /> },
    { name: "Project & Time Management", icon: <CalendarCog className="h-6 w-6" /> },
    { name: "Leadership", icon: <Signpost className="h-6 w-6" /> },
  ]

  const experience = [
    { 
      position: "Data Scientist", 
      company: "Gauss & Neumann", 
      website: "https://gauss-neumann.com/", 
      startDate: "Aug 2021", 
      endDate: "Present", 
      description: "- Leverage data science techniques to extract valuable insights, enabling the formulation of data-informed marketing strategies that significantly improve campaign performance\n\n- Create and maintain ETL pipelines with Apache Airflow, ensuring seamless data integration and flow across multiple platforms and processes (APIs, BigQuery, S3, GCS, etc)\n\n- Design and maintain dynamic dashboards using Apache Superset, Looker Studio, and Google Sheets for internal and external reporting\n\n- Design and conduct experimentations using both frequentist and Bayesian methodologies, including A/B tests, pre/post tests, and geo-split tests. Utilize causal analysis to drive continuous improvements in campaign outcomes\n\n- Develop & optimize internal Python libraries to enhance operational efficiency\n\n- Use APIs from platforms like Google Ads, Bing Ads, and Google Analytics to continuously monitor and optimize campaign performance\n\n- Daily email reporting and weekly meetings with key stakeholders, including the CMO and the VP of Marketing and Analytics, ensuring alignment on goals and strategies\n\nTech stack: Python, Airflow, SQL, Docker, BigQuery & GCP, Google Ads & Google Analytics APIs"
    },
    { 
      position: "Software Engineer Intern", 
      company: "Dail Software", 
      website: "https://www.dail.es/", 
      startDate: "Apr 2021", 
      endDate: "Jun 2021", 
      description: "During my master&apos;s degree, I completed an internship at Dail Software while preparing my master&apos;s thesis. This role provided me with hands-on experience in Natural Language Processing (NLP) techniques and the development of chatbots and recommender systems for various clients.\n\n- Applied NLP techniques to real-world projects\n\n- Developed chatbots and recommender systems tailored to client needs\n\n- Gained proficiency in Python, Rasa, Gensim, and NLTK\n\nTech stack: Python, Rasa, Gensim, NLTK, Docker" 
    },
    { 
      position: "Research Intern", 
      company: "Biomedichal Informatics Group (Polytechnic University of Madrid)", 
      website: "http://gib.fi.upm.es/", 
      startDate: "Sep 2020", 
      endDate: "Sep 2020 2020", 
      description: "I conducted an internship during the first month of my master&apos;s degree within the Biomedical Research Group. This experience provided valuable insights into medical data integration and helped shape my career interests.\n\n-  Learned about medical data integration tools using terminologies such as LOINC, ICD-10, and SNOMED\n\n- Gained exposure to the complexities of biomedical data\n\n- Realized a stronger interest in natural language processing, leading to a career shift\n\nTech stack: Python, Tableau" 
    },
    { 
      position: "Undergraduate Research Intern", 
      company: "UNIMODE Research Group (University of Oviedo)", 
      website: "https://unimode.grupos.uniovi.es/", 
      startDate: "Sep 2019", 
      endDate: "Oct 2019", 
      description: "During my undergraduate degree, I completed a research-focused internship in collaboration with two professors from the Computability and Artificial Intelligence department. This role set the foundation for my Final Degree Project.\n\n- Conducted a comprehensive bibliography review about partially ordered sets\n\n- Analyzed and optimized various algorithms\n\n- Developed new algorithms based on different techniques including sorting algorithms, simulated annealing, and linear programming\n\n- Applied these tasks to the aggregation of partially ordered sets" 
    },
  ]

  const education = [
    { degree: "MSc in Cloud Data Engineering & Data Science", institution: "University of Castile-La Mancha ", website: "https://www.cidaen.es/", year: "2023-2024", icon: <GraduationCapIcon className="h-12 w-12" /> },
    { degree: "MSc in Artificial Intelligence", institution: "Polytechnic University of Madrid", website: "https://muia.dia.fi.upm.es/en/", year: "2020-2021", icon: <GraduationCapIcon className="h-12 w-12" /> },
    { degree: "BSc in Computer Science", institution: "University of Oviedo", website: "https://ingenieriainformatica.uniovi.es/infoacademica/grado", year: "2016-2020", icon: <GraduationCapIcon className="h-12 w-12" /> },
  ]

  const projects = [
    { name: "Wallapop Data Extraction & Data Visualization Pipeline", description: "Developed a scalable, serverless data pipeline and visualization app using AWS, Prefect, and Streamlit to extract and analyze data from the Wallapop API. Automated infrastructure deployment with Terraform and integrated CI/CD pipelines with GitHub Actions for efficient updates and management.", url: "https://github.com/themrcesi/cidaen2324-tfm", image: "/cidaen-tfm.png"},
    { name: "Assessing ChatGPT's Performance in the Spanish MIR Exam Using Python Automation", description: "This project evaluates ChatGPT's ability to pass the Spanish MIR exam by automating exam reading with Python and integrating the OpenAI API with Streamlit. The goal is to compare its performance with that of human candidates and explore the potential of AI in medical education.", url: "https://chatgpt-mir.streamlit.app/", image: "/chatgpt-mir.png"},
    { name: "Multilingual Document Retrieval Using Universal Networking Language as an Interlingua", description: "This project analyzes existing methods for addressing multilinguality in document retrieval systems, proposing a novel model that leverages the Universal Networking Language (UNL) as an interlingua. Implemented using Python, the model demonstrates effective results in cross-lingual searches from English to Spanish, provided high-quality dictionaries are used.", url: "https://github.com/themrcesi/tfm", image: "/upm-tfm.png"},
    { name: "Development of Aggregation Methods of Partially Ordered Sets", description: "Partially ordered sets are collections in which elements are not totally ordered, introducing uncertainty in their structure. This project focuses on developing new aggregation algorithms for these sets, implemented in C#. The algorithms aim to improve the processing and interpretation of partially ordered data, contributing to advancements in computational methods for uncertain data structures.", url: "https://digibuo.uniovi.es/dspace/bitstream/handle/10651/62005/TFG_CesarGarciaCabeza.pdf?sequence=6&isAllowed=y", image: "/uniovi-tfg.png"},
  ]

  const SkillLevel = ({ level }: {level: 'Basic' | 'Intermediate' | 'Advanced'}) => {
    const levels: { [key in 'Basic' | 'Intermediate' | 'Advanced']: number } = {
      "Basic": 1,
      "Intermediate": 2,
      "Advanced": 3
    }
    const dots = []
    for (let i = 0; i < 3; i++) {
      dots.push(
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${i < levels[level] ? 'bg-green-400' : 'bg-gray-600'}`}
        ></div>
      )
    }
    return <div className="flex space-x-1">{dots}</div>
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Toaster position="bottom-right" />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-gray-800 shadow-md z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">César García Cabeza</h1>
          {/* <Button variant="outline" className="rounded-full border-gray-300 text-gray-300 hover:bg-gray-700">
            Download CV
            <DownloadIcon className="ml-2 h-4 w-4" />
          </Button> */}
        </div>
      </header>

      {/* Header/Landing Section */}
      <header className="h-screen flex flex-col items-center justify-center text-center p-4 pt-16 bg-gradient-to-b from-gray-800 to-gray-900">
        <h1 className="text-4xl md:text-4xl font-bold mb-4 text-gray-100">
          👋 Hello, I&apos;m César García Cabeza
        </h1>
        <div className="text-3xl font-bold mb-8 h-20">
          <ReactTyped
            strings={titles}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <Button onClick={scrollToAbout} className="rounded-full bg-gray-700 hover:bg-gray-600 text-gray-100">
          Learn More
          <ChevronDownIcon className="ml-2 h-4 w-4" />
        </Button>
      </header>

      {/* About Me Section */}
      <section ref={aboutRef} className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className='space-y-4'>
              <p className="text-lg leading-relaxed text-gray-300">
                With a foundation in Computer Software Engineering, sparked by a deep love for video games, I initially embarked on a journey in software development. However, during the transformative deep learning boom, my career trajectory shifted toward data science and artificial intelligence. This new direction inspired me to pursue two Master’s degrees—one in Artificial Intelligence and another in Cloud Data Science & Data Engineering. My academic curiosity also led me to begin a PhD in Information Technologies, where I focused on leveraging AI techniques to automate systematic literature reviews. Despite the allure of academia, I ultimately chose to return to industry to apply my skills in real-world, practical settings.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Today, I work as a Data Scientist at a leading SEM agency, where I harness the power of data to drive impactful, data-informed marketing strategies. My passion lies at the intersection of software engineering and data science/engineering, where I explore how these fields can revolutionize industries.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Looking ahead, I aspire to lead a data team, fostering growth and collaboration to achieve collective success. As a versatile and curious professional, I continually seek out new technologies and challenges, embodying a T-shaped skill set that bridges multiple domains. My relentless drive to learn and achieve means that when I set my sights on a goal, I don’t stop until it’s accomplished.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Technical Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between space-x-2 bg-gray-700 rounded-lg p-3 shadow-md">
                    <div className="flex items-center space-x-2">
                      {skill.icon}
                      <span className="font-medium text-gray-200">{skill.name}</span>
                    </div>
                    <SkillLevel level={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Soft Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-8">
            {softSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center text-center">
                <div className="bg-gray-700 rounded-full p-4 mb-4">
                  {skill.icon}
                </div>
                <span className="font-medium text-gray-200">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Experience</h2>
          <div className="relative">
            {experience.map((job, index) => (
              <Card key={index} className="mb-8 ml-4 p-6 rounded-lg shadow-md relative before:content-[''] before:absolute before:left-[-20px] before:top-1/2 before:w-4 before:h-4 before:bg-gray-600 before:rounded-full hover:shadow-lg transition-shadow bg-gray-700 border-gray-600">
                <div className="text-sm text-gray-400 mb-2">{job.startDate} - {job.endDate}</div>
                <h3 className="text-xl font-semibold mb-1 text-gray-100">{job.position}</h3>
                <Link href={job.website} target="_blank" rel="noopener noreferrer" className="text-gray-300 mb-2 flex items-center hover:underline">
                  {job.company}
                  <ExternalLinkIcon className="ml-2 h-4 w-4" />
                </Link>
                <div className="text-gray-300 markdown-content">
                  <ReactMarkdown>{job.description}</ReactMarkdown>
                </div>
              </Card>
            ))}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-600"></div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <Link href={edu.website} key={index} target="_blank" rel="noopener noreferrer">
                <Card className="p-6 flex flex-col h-full items-center text-center hover:shadow-lg transition-shadow bg-gray-700 border-gray-600">
                  {edu.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-100">{edu.degree}</h3>
                  <p className="text-gray-300 flex items-center">
                    {edu.institution}
                    <ExternalLinkIcon className="ml-2 h-4 w-4" />
                  </p>
                  <p className="text-gray-400 mt-2 mt-auto">{edu.year}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects/Blog Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <Link key={i} href={project.url} target="_blank">
                <Card key={i} className="flex flex-col h-full rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 bg-gray-700 border-gray-600">
                  <img src={project.image} alt={`Project ${i}`} className="w-full h-48 object-cover" />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-gray-100">{project.name}</h3>
                    <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                    <Button variant="outline" className="w-full border-gray-500 text-gray-300 hover:bg-gray-600 mt-auto self-start">Read More</Button>
                  </div>
                  
                </Card>
              </Link>
              
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Contact</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4" action="https://formspree.io/f/xvgpvppq" method="POST" onSubmit={handleSubmit}>
              <Input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleInputChange} className="w-full rounded-md bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400" />
              <Input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} className="w-full rounded-md bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400" />
              <Textarea placeholder="Message" name="message" value={formData.message} onChange={handleInputChange} className="w-full rounded-md bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400" />
              <Button type="submit" className="w-full rounded-md bg-gray-700 hover:bg-gray-600 text-gray-100">
                Send Message
                <SendIcon className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <div className="flex justify-center space-x-4 mt-8">
              <a target="_blank" href="https://www.linkedin.com/in/cesargarciacabeza/" className="text-gray-400 hover:text-gray-200 transition-colors">
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a target="_blank" href="https://github.com/themrcesi" className="text-gray-400 hover:text-gray-200 transition-colors">
                <GithubIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} César García Cabeza. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}