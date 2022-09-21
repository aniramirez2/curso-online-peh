import { React, useEffect, useState } from 'react';
import api from '../services/api';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { MainSection } from './MainSection';
import { LearningSection } from './LearningsSection';
import { MoreInfoSection } from './moreInfoSection';
import { CopyrightSection } from './copyrightSection';

export const Landing = () => {
	const [data, setData] = useState([]);
	const { id } = useParams();
	const navigate = useNavigate();

	const getData = async () => {
		try {
			const { data  } = await api.get();
			const sections = data.result.find(item => item._id === "da59f881-f087-47b2-8e22-dc7c0b070981").content;
			sections.forEach(element => {				
				element.whatsapp = id;
			});
			setData(sections);
		 } catch (error) {
			console.log('error', error);
		 }
	 };

	useEffect(() => {
		if (id) {
			getData();
		 } else {
			navigate('/')
		 }
		 // eslint-disable-next-line
	 }, []);

	return (
		<>
			{data.map(section => (
				<>
				{section.sectionType === 'main' ? 
				(
				<MainSection key={section._key} section={section}/>
				) : null}
				{section.sectionType === 'learnings' ?
				(
				<LearningSection key={section._key} section={section} />
				) : null
				}
				{section.sectionType === 'moreInfo' ?
				(
				<MoreInfoSection key={section._key} section={section}/>
				) : null
				}
				{section.sectionType === 'copyright' ?
				(
				<CopyrightSection key={section._key} section={section} />
				):null
				}
			</>
			))}
		</>
	);
}