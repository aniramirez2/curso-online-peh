import { useEffect, useState } from 'react';
import api from '../services/api';
import { Box, Flex } from '@chakra-ui/layout';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react'

export const Landing = ({params}) => {
	const [data, setData] = useState([]);
	const { id } = useParams();
	const navigate = useNavigate();

	const getData = async () => {
		try {
			const { data } = await api.get();
			console.log("result", data);
			setData(data.result);
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
		<div className="Landing">
			<Box backgroundColor={data[3].backgroundColor} color={data[3].textColor} id="section1">
				<Box textAlign="center">
					{data[3].lineOne}
				</Box>
				<Box w="50%" margin="auto">
					<h1>
						{data[3].title[0].children[0].text}
						<span color={'#'+data[3].title[0].children[1].marks[1]}>
							{data[3].title[0].children[1].text}
						</span>
						<span>
							{data[3].title[0].children[2].text}
						</span>
						<span style={{'textDecoration': 'underline'}}>
							{data[3].title[0].children[3].text}
						</span>
					</h1>
				</Box>
				<Box textAlign="center">
					{data[3].subtitle}
				</Box>
				<Flex justifyContent="center">
					<Box w="30%">
						<img alt="" src="https://cdn.sanity.io/images/w9w13qo7/production/c2566727187dd127804e8966841cf71d127d7ad6-860x487.png" />
					</Box>
					<Box w="30%">
						<span>
							{data[3].beforeCta[0].children[0].text}
						</span>
						<span>
							{data[3].beforeCta[0].children[1].text}
						</span>
						<span>
							{data[3].beforeCta[0].children[2].text}
						</span>
						<Button>
							{data[3].textCta}
							<p>*Entrenamiento 100% gratis</p>
						</Button>
						<Box>
							{data[3].textAfterCta}
						</Box>
					</Box>
				</Flex>
			</Box>
			<Box backgroundColor={data[1].backgroundColor} color={data[1].textColor} id="section2">
				<Box textAlign="center">
					{data[1].title[0].children[0].text}
				</Box>
				<Flex justifyContent="center">
					<Box w="30%">
						{data[1].step1[0].children[0].text}
					</Box>
					<Box w="30%">
						{data[1].step2[0].children[0].text}
						{data[1].step2[0].children[1].text}
					</Box>
					<Box w="30%">
						{data[1].step3[0].children[0].text}
					</Box>
				</Flex>
				<Box textAlign="center">
					<img style={{'margin': 'auto'}} src="https://storage.builderall.com//franquias/2/6203456/editor-html/6885169.png" alt="" />
				</Box>
				<Box textAlign="center">
					<Button textAlign="center" margin="auto">
						{data[1].textCta}
						<p>GRATUITO POR TEMPO LIMITADO</p>
					</Button>
				</Box>
				<Box textAlign="center">
					{data[1].textAfterCta}
				</Box> 
			</Box>
			<Box backgroundColor={data[2].backgroundColor} color={data[2].textColor} id="section3">
				<Box textAlign="center">
					{data[2].title[0].children[0].text}
				</Box>
				<Box textAlign="center">
					<ul>
					{data[2].list.map(item => (
						<li key={item._key}>{item.children[0].text}</li>
					))}
					</ul>
				</Box>
				<Box textAlign="center">
					<Button>
						{data[2].textCta}
						<p>*Entrenamiento 100% gratis</p>
					</Button>
				</Box>
				<Box textAlign="center">
					{data[1].textAfterCta}
				</Box>
			</Box>
			<Box backgroundColor={data[0].backgroundColor} color={data[0].textColor} id="section4">
				<Flex justifyContent="center">
					<img src='https://storage.builderall.com//franquias/2/6203456/editor-html/6866463.png' alt="" />
				</Flex>
				<Box textAlign="center">
					{data[0].title[0].children[0].text}
				</Box>
				<Box textAlign="center">
					{data[0].policy[0].children[0].text}
				</Box>
			</Box>
		</div>
	);
}