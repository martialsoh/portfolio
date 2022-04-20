import React from "react";
import "./ResumeStyle.css";
import '../../App.css';
import Footer from '../Footer/Footer';
import { motion } from "framer-motion";


function Resume() {
  return (

    <>

      <div className="resume">
        <motion.div className='text_title'
          initial={{y: 100, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.7}}
        >
          <h1 className="text__title">My Resume</h1>
          <h5 className="text__title">This page tells the best, most up to date story about me and my career. However, if you need</h5>
          <h5 className="text__title">a plain resume in a standard format, feel free to reach out to me for the most recent version</h5>
        </motion.div>   
      </div>

       
      <div className="resumeBox">
        <strong>PROFESSIONAL SUMMARY</strong>
        <ul>
          <li>  Over six (5+) years of IT experience as a DevOps Engineer in automating, building, deploying, and releasing of code from one environment to another environment.</li>
          <li>  Experience in Jenkins by installing, configuring, and maintaining for purposes of continuous integration (CI) and for end-to-end automation for all build and deployment of Jenkins CI pipelines.</li>
          <li>	Working knowledge of branching and merging code lines in the GIT and resolved all the conflicts raised during merges.</li>
          <li>	Expertise in executing of XML, Ant scripts, shell scripts, Perl scripts and Java scripts.</li>
          <li>	Experience with Amazon AWS cloud creating EC2, VPC, S3, RDS, ELB, Auto scaling, security groups</li>
          <li>	Experienced in creating Docker container and docker consoles for managing the application life cycle</li>
          <li>	Creating custom Docker images using docker file for easier replication of DEV and QA environments in local machine.</li>
          <li>	Performed and deployed builds for various environments like QA, integration, UAT and productions</li>
          <li>	Good analytical and problem-solving skill and efficient in working closely with teams or independently to ensure high quality and timely delivery of builds and releases.</li>    
        </ul>
        <strong>TECHNICAL SKILLS</strong>
        <ul> 
          <li><p>Provisioning:</p> Terraform, CloudFormation</li>
          <li><p>Cloud Technology:</p> AWS, Docker</li>
          <li><p>Web server:</p> Apache Tomcat, Nginx</li>
          <li><p>Virtualization:</p> VMware,  Docker, Kubernetes</li>
          <li><p>Database:</p> SQL Server, MySQL, PostgreSQL, DB2</li>
          <li><p>Language:</p> C/C++, Python, Java, HTML, CSS</li>
          <li><p>CI-CD Tools:</p> Jenkins, Git</li>
          <li><p>CM Tool:</p> Ansible</li>
          <li><p>Frameworks:</p> Django, react</li>
          <li><p>Operating Systems:</p> Operating Systems: Windows server, RHEL, UNIX, Centos, Ubuntu </li>    
        </ul>
        <strong>EDUCATION</strong>
        <ul>
          <li> Bachelor's in Computer & Electrical Engineering - Texas Tech University, Lubbock,TX</li>
        </ul>
      </div> 
      <Footer />

    </>
  );
}

export default Resume;