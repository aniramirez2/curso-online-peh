import { useEffect, useState } from 'react';
import api from '../services/api';
import { Box } from '@chakra-ui/layout';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

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
	}, []);

	return (
		<div className="Landing">
			<header className="Landing-header">
				<p>
					Edit <code>src/Landing.js</code> and save to reload.
				</p>
				<a className="Landing-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				{data.map((element) => (
					<Box key={element._id}>{element.name}</Box>
				))}
			</header>
		</div>
	);
}
