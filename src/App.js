import { Text, Flex, Heading } from '@chakra-ui/layout';

function App() {


	return (
		<div className="App">
			<header className="App-header">
				<Flex justifyContent="center" py={8}>
						<Heading size="4xl" py={8}>
							Error
						</Heading>
				</Flex>
				<Flex justifyContent="center" py={8}>
					<Heading size="4xl" py={8}>
						4 0 4
					</Heading>
				</Flex>
				<Flex justifyContent="center" py={8}>
					<Text fontSize="lg" py={8}>
						No encontramos el identificador de tu compra
					</Text>
				</Flex>
			</header>
		</div>
	);
}

export default App;
