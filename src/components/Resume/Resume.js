import React from "react";
import "./ResumeStyle.css";
import '../../App.css';
import Footer from '../Footer/Footer';


function Resume() {
  return (

    <>

      <div className="resume">
          <h1>My Resume</h1>     
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
          <li><p>Frameworks:</p> Django, Vue.js, react</li>
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