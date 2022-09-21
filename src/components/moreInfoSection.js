import { React } from 'react';
import { Box, Link } from '@chakra-ui/layout';
import { CheckIcon } from '@chakra-ui/icons'

export const MoreInfoSection = ({section}) => {
  const getBoxClassNames = (id, markDefs, children) => {
    return markDefs.find(item => item._key === id) ? {'color': markDefs[0].hex} : {'textDecoration': children.marks[0]}
  }
return (
  <Box py={[5,8]} height={["100vh", "auto"]} key={section.sectionType} backgroundColor={section.backgroundColor.hex} color={section.textColor.hex} id={section.sectionType}>
    <Box py={[5,10]} textAlign="center" fontSize={["28px", "48px"]} lineHeight="1.1em" fontWeight="500">
      {section.lineOne[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineOne[0].markDefs, item)}>{item.text}</span> : item.text)}
    </Box>
    <Box textAlign="center" w={["95%", "50%"]} margin="auto" mb={5}>
      {
      section.titleLineTwo?.map((item, index) => item.children[0].marks.length ? 
      <Box style={getBoxClassNames(item.children[0].marks[0], section.titleLineTwo[index].markDefs, item.children[0])}>{item.children[0].text}</Box> : 
      <Box my={2} mx={3} textAlign="left"><CheckIcon mr={2}></CheckIcon>{item.children[0].text}</Box>)
      }
    </Box>
    <Box textAlign="center" my={5}>
      <Link href={`https://api.whatsapp.com/send?phone=${section.whatsapp}`} target="_blank" display="block" height="70px" width={["95%","488px"]} borderRadius="5px" margin="auto" boxShadow="#6a6a6a" backgroundColor={section.ctaBackgroundColor.hex} >
      <Box fontSize={["16px","22px"]} pt={3} color={section.ctaColor.hex}>{section.CtalineOne}</Box>
        <small color={section.ctaColor.hex}>{section.CtalineTwo}</small>
      </Link>
    </Box>
    <Box textAlign="center" fontSize="1rem" fontWeight="400">
      {section.lineThree[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineThree[0].markDefs, item)}>{item.text}</span> : item.text)}
    </Box>
  </Box>
)
}