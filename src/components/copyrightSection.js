import { React } from 'react';
import { Box, Flex } from '@chakra-ui/layout';

export const CopyrightSection = ({section}) => {
  const getBoxClassNames = (id, markDefs, children) => {
    return markDefs.find(item => item._key === id) ? {'color': markDefs[0].hex} : {'textDecoration': children.marks[0]}
  }
return (
  <Box key={section.sectionType} backgroundColor={section.backgroundColor} color={section.textColor} id={section.sectionType}>
    <Flex justifyContent="center">
      <img style={{'margin':'auto'}} alt="" src={`https://cdn.sanity.io/images/w9w13qo7/production/${section.image.asset._ref.split('-')[1] + '-' +section.image.asset._ref.split('-')[2]}.png`} />
    </Flex>
    <Box textAlign="center" py={4}>
      {section.lineOne[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineOne[0].markDefs, item)}>{item.text}</span> : item.text)}
    </Box>
    <Box textAlign="justify" margin="auto" w="50%">
      {section.titleLineTwo[0].children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.titleLineTwo[0].markDefs, item)}>{item.text}</span> : item.text)}
    </Box>
  </Box>
)
}