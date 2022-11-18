import { React, useEffect, useState } from 'react';
import api from '../services/api';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { MainSection } from './MainSection';
import { LearningSection } from './LearningsSection';
import { MoreInfoSection } from './moreInfoSection';
import { CopyrightSection } from './copyrightSection';
import axios from 'axios';

export const Landing = () => {
	const [data, setData] = useState([]);
	const [whatsapp, setWhatsapp] = useState('');
	const { id } = useParams();
	const navigate = useNavigate();

	const getData = async () => {
		try {
			const { data  } = await api.get();
			const sections = data.result.find(item => item._id === "da59f881-f087-47b2-8e22-dc7c0b070981").content;
			sections.forEach(element => {				
				element.whatsapp = whatsapp;
			});

			console.log("data", data);
			setData(sections);
		 } catch (error) {
			console.log('error', error);
		 }
	 };

	const validateId = async () => {
		try {
			const { data }  = await axios.get('https://tienda.admhost.site/wp-content/plugins/landingcreator/callback.php', {
				   params: {
				  	pid: id
				   },
				   headers: {
					'Content-Type': 'text/json'
				   }
				});
			setWhatsapp(data._billing_phone);
			return true;
		} catch (error) {
			return false;
		}
	}

	useEffect(() => {
		validateId().then((value) => {
			if (value) {
				getData();
			} else {
				navigate('/')
			}
		})
		 // eslint-disable-next-line
	 }, [whatsapp]);

	return (
		<>
			{data.map(section => (
				<div key={section._key} >
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
			</div>
			))}
		</>
	);
}