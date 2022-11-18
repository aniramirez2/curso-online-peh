import { React } from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react'

export const CopyrightSection = ({section}) => {
  const getBoxClassNames = (id, markDefs, children) => {
    return markDefs.find(item => item._key === id) ? {'color': markDefs[0].hex} : {'textDecoration': children.marks[0]}
  }
return (
  <Box height={["auto", "auto"]} pb={4} key={section.sectionType} backgroundColor={section.backgroundColor.hex} color={section.textColor.hex} id={section.sectionType}>
    <Flex justifyContent="center" pt={4}>
      <Image width={["70%","40%"]} style={{'margin':'auto'}} alt="" src={`https://cdn.sanity.io/images/w9w13qo7/production/${section.image.asset._ref.split('-')[1] + '-' +section.image.asset._ref.split('-')[2]}.png`} />
    </Flex>
    <Box textAlign="center" py={4} lineHeight="1" fontSize={["13px","18px"]} margin="auto" w={["80%","70%"]} fontFamily="poppinsmedium">
      {section.lineOne[0]?.children.map(item => item.marks.length ? <span key={item.text} style={getBoxClassNames(item.marks[0], section.lineOne[0].markDefs, item)}>{item.text}</span> : item.text)}
    </Box>
    <Box textAlign="justify" margin="auto" w={["85%","70%"]} mb={5} flexWrap="wrap" fontSize={["10px", "12px"]} fontFamily="oswaldregular">
      {section.titleLineTwo[0].children.map(item => item.marks.length ? <span key={item.text} style={getBoxClassNames(item.marks[0], section.titleLineTwo[0].markDefs, item)}>{item.text}</span> : item.text)}
    </Box>
  </Box>
)
}