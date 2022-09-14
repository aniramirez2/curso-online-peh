import { React } from 'react';
import { Box, Flex, Link } from '@chakra-ui/layout';

export const MainSection = ({section}) => {
  
  const getBoxClassNames = (id, markDefs, children) => {
    return markDefs.find(item => item._key === id) ? {'color': markDefs[0].hex} : {'textDecoration': children.marks[0]}
  }

return (
<Box px={9} pt={10} pb={30} key={section.sectionType} backgroundColor={section.backgroundColor.hex } color={section.textColor.hex} id="section1">
  <Box py={4} textAlign="center" textTransform="uppercase" fontFamily="Montserrat, sans-serif" fontSize="18px">
    {<h4>{section.lineOne[0].children.map(item => item.marks.length ? <Box style={getBoxClassNames(item.marks[0], section.lineOne[0].markDefs, item)}>{item.text}</Box> : item.text)}</h4>}
  </Box>
  <Box w="70%" margin="auto" fontSize="48px" fontFamily="oswaldregular" lineHeight="1.2em" fontWeight="500">
    <h2>
      {section.titleLineTwo[0].children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.titleLineTwo[0].markDefs, item)}>{item.text}</span> : item.text)}
    </h2>
  </Box>
  <Box textAlign="center" py={4} fontSize="24px" lineHeight="1.1em" fontFamily="sfuitextmedium" fontStyle="italic">
    {section.lineThree[0].children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineThree[0].markDefs, item)}>{item.text}</span> : item.text)}
  </Box>
  <Flex justifyContent="center">
    <Box w="30%">
      <img alt="" src={`https://cdn.sanity.io/images/w9w13qo7/production/${section.image.asset._ref.split('-')[1] + '-' +section.image.asset._ref.split('-')[2]}.png`} />
    </Box>
    <Box w="30%" py={20} textAlign="center">
      <span>
        {section.lineFour[0].children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineFour[0].markDefs, item)}>{item.text}</span> : item.text)}
      </span>
      <Box py={5} textAlign="center">
        <Link display="block" height="70px" width="488px" borderRadius="5px" margin="auto" boxShadow="#6a6a6a" backgroundColor={section.ctaBackgroundColor.hex} >
          <Box py={2}>{section.CtalineOne}</Box>
          <small>{section.CtalineTwo}</small>
        </Link>
      </Box>
      <Box>
        {section.lineFive[0].children.map(item => item.marks.length ? <Box style={getBoxClassNames(item.marks[0], section.lineFive[0].markDefs, item)}>{item.text}</Box> : item.text)}
      </Box>
    </Box>
  </Flex>
</Box>
)
}