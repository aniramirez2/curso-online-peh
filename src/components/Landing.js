import { React, useEffect, useState } from 'react';
import api from '../services/api';
import { Box, Flex, Link } from '@chakra-ui/layout';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { CheckIcon } from '@chakra-ui/icons'

export const Landing = () => {
	const [data, setData] = useState([]);
	const { id } = useParams();
	const navigate = useNavigate();

	const getData = async () => {
		try {
			const { data  } = await api.get();
			const sortedData = data.result.sort((a,b) => (a._type > b._type) ? 1 : ((b._type > a._type) ? -1 : 0))
			setData(sortedData);
			console.log("result", sortedData)
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
	 }, [id, navigate]);

	return (
		<div>
			{data.map(section => (
				<>
				{section._type === 'section' ? 
				(
				<Box px={9} pt={10} pb={40} key={section._type} backgroundColor={section.backgroundColor } color={section.textColor} id="section1">
					<Box py={4} textAlign="center" textTransform="uppercase" fontFamily="Montserrat, sans-serif" fontSize="18px">
						<h4>{section.lineOne}</h4>
					</Box>
					<Box w="50%" margin="auto" fontSize="57px" fontFamily="oswaldregular" lineHeight="1.2em" fontWeight="500">
						<h1>
							{section.title[0].children[0].text}
							<span style={{"color": section.title[0].markDefs[0].hex}}>
								{section.title[0].children[1].text}
							</span>
							<span>
								{section.title[0].children[2].text}
							</span>
							<span style={{'textDecoration': 'underline'}}>
								{section.title[0].children[3].text}
							</span>
						</h1>
					</Box>
					<Box textAlign="center" py={4} fontSize="24px" lineHeight="1.1em" fontFamily="sfuitextmedium" fontStyle="italic">
						{section.subtitle}
					</Box>
					<Flex justifyContent="center">
						<Box w="30%">
							<img alt="" src="https://cdn.sanity.io/images/w9w13qo7/production/c2566727187dd127804e8966841cf71d127d7ad6-860x487.png" />
						</Box>
						<Box w="30%" py={20} textAlign="center">
							<span>
								{section.beforeCta[0].children[0].text}
							</span>
							<span style={{"textDecoration": section.beforeCta[0].children[1].marks[0] }}>
								{section.beforeCta[0].children[1].text}
							</span>
							<span>
								{section.beforeCta[0].children[2].text}
							</span>
							<Box py={5} textAlign="center">
								<Link display="block" height="70px" width="488px" borderRadius="5px" margin="auto" boxShadow="#6a6a6a" backgroundColor="#e9bd15fe" >
									<Box py={2}>{section.textCta}</Box>
									<small>*Entrenamiento 100% gratis</small>
								</Link>
							</Box>
							<Box>
								{section.textAfterCta}
							</Box>
						</Box>
					</Flex>
				</Box>
				) : null}
				{section._type === 'section2' ?
				(
				<Box py={20} key={section._type} backgroundColor={section.backgroundColor} color={section.textColor} id="section2">
					<Box pb={10} textAlign="center" fontSize="48px" style={{"textDecoration": section.title[0].children[0].marks[0]}}>
						{section.title[0].children[0].text}
					</Box>
					<Flex pt={10} justifyContent="center">
						<Box w="18%" fontSize="24px" textAlign="center" px={10}>
							{section.step1[0].children[0].text}
						</Box>
						<Box w="18%" fontSize="24px" textAlign="center" px={10}>
							{section.step2[0].children[0].text}
							{section.step2[0].children[1].text}
						</Box>
						<Box w="18%" fontSize="24px" textAlign="center" px={10}>
							{section.step3[0].children[0].text}
						</Box>
					</Flex>
					<Box textAlign="center" w="334px" margin="auto" py={5}>
						<img style={{'margin': 'auto'}} src="https://storage.builderall.com//franquias/2/6203456/editor-html/6885169.png" alt="" />
					</Box>
					<Box textAlign="center" py={5}>
						<Link display="block" color="black" height="70px" width="488px" borderRadius="5px" margin="auto" boxShadow="#6a6a6a" backgroundColor="#e9bd15fe" >
							<Box fontSize="28px">{section.textCta}</Box>
							<small>GRATUITO POR TEMPO LIMITADO</small>
						</Link>
					</Box>
					<Box textAlign="center" fontSize="18px">
						{section.textAfterCta}
					</Box> 
				</Box>
				) : null
				}
				{section._type === 'section3' ?
				(
				<Box py={10} key={section._type} backgroundColor={section.backgroundColor} color={section.textColor} id="section3">
					<Box py={10} textAlign="center" fontSize="48px" lineHeight="1.1em" fontWeight="500">
						{section.title[0].children[0].text}
					</Box>
					<Box textAlign="center">
						{ data.length? data[2].list.map(item => (
							<Flex py={2} key={item._key} justifyContent='center' alignItems="center"><CheckIcon /> <Box fontSize="24px" px={2}>{item.children[0].text}</Box></Flex>
						)) : null
						}
					</Box>
					<Box textAlign="center" my={5}>
						<Link display="block" height="70px" width="488px" borderRadius="5px" margin="auto" boxShadow="#6a6a6a" backgroundColor="#e9bd15fe" >
						<Box fontSize="28px">{section.textCta}</Box>
							<small>*Entrenamiento 100% gratis</small>
						</Link>
					</Box>
					<Box textAlign="center" fontSize="1rem" fontWeight="400">
						{section.textAfterCta}
					</Box>
				</Box>
				) : null
				}
				{section._type === 'section4' ?
				(
				<Box key={section._type} backgroundColor={section.backgroundColor} color={section.textColor} id="section4">
					<Flex justifyContent="center">
						<img src='https://storage.builderall.com//franquias/2/6203456/editor-html/6866463.png' alt="" />
					</Flex>
					<Box textAlign="center" py={4}>
						{section.title[0].children[0].text}
					</Box>
					<Box textAlign="justify" margin="auto" w="50%" color="#a08314fe">
						{section.policy[0].children[0].text}
					</Box>
				</Box>
				):null
				}
			</>
			))}
		</div>
	);
}