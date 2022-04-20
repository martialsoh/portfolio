import React from 'react';
import { useEffect, useState } from 'react';
import './SkillStyle.css';
import images from './data';
// import { SRLWrapper } from 'simple-react-lightbox';



function Skills() {
	const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(
		() => {
			tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
		},
		[tag]
	);

	return (
		<div className="Skills">

            <div className="tag1">
				<div class="skill-wrapper">

					<div class="skill">
						<img class="thumbnail" src="images/team-player.png" alt=""/>
						<div class="skill-preview">
							<h6 class="skill-title">Team-first mindset</h6>
							<p class="skill-intro">I'm dedicated, supportive to team member.</p>
							
						</div>
					</div>
				
					<div class="skill">
						<img class="thumbnail" src="images/time-management1.jpg" alt=""/>
						<div class="skill-preview">
							<h6 class="skill-title">Time Management</h6>
							<p class="skill-intro">I focus on the most important and time-sensitive tasks and limit the amount of.</p>
							
						</div>
					</div>
				
					<div class="skill">
						<img class="thumbnail" src="images/problem-solver.png" alt=""/>
						<div class="skill-preview">
							<h6 class="skill-title">Problem Solvers</h6>
							<p class="skill-intro">I make decisions and resolves issues using logical thinking and analytical skills</p>
							
						</div>
					</div>

					<div class="skill">
						<img class="thumbnail" src="images/book.png" alt=""/>
						<div class="skill-preview">
							<h6 class="skill-title">Continuous improvement</h6>
							<p class="skill-intro">I am always looking for ways to continuously self-improve. </p>	
						</div>
					</div>
				</div>
			</div>
			{/* <div className='tools-intro'>Some of my Skills</div> */}
			<div className='skill-image'>
				<div className="tags">
					<div className='tools-intro'>Some of my Skills</div>
					<TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} /> 
					<TagButton name="DevOps" tagActive={tag === 'DevOps' ? true : false} handleSetTag={setTag} /> 
					<TagButton name="Monitoring/Alerting" tagActive={tag === 'Monitoring/Alerting' ? true : false} handleSetTag={setTag} /> 
					<TagButton name="Webtech" tagActive={tag === 'Webtech' ? true : false} handleSetTag={setTag} />
					<TagButton name="Database" tagActive={tag === 'Database' ? true : false} handleSetTag={setTag} />
					<TagButton name="Code" tagActive={tag === 'Code' ? true : false} handleSetTag={setTag} />
				</div>
				
				<div className="skills-container">
					{filteredImages.map(image => (
						<div key={image.id} className="image-card">
							<a>
								<img className="image" src={`/images/${image.imageName}`} alt="" />
							</a>
						</div>
					))}
				</div>
				
			</div>
			
		</div>
	);
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};

export default Skills;