import { React } from 'react';
import { Box, Link } from '@chakra-ui/layout';

export const MoreInfoSection = ({section}) => {
  const getBoxClassNames = (id, markDefs, children) => {
    return markDefs.find(item => item._key === id) ? {'color': markDefs[0].hex} : {'textDecoration': children.marks[0]}
  }
return (
  <Box py={10} key={section.sectionType} backgroundColor={section.backgroundColor.hex} color={section.textColor.hex} id={section.sectionType}>
    <Box py={10} textAlign="center" fontSize="48px" lineHeight="1.1em" fontWeight="500">
      {section.lineOne[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineOne[0].markDefs, item)}>{item.text}</span> : item.text)}
    </Box>
    <Box textAlign="center">
      {section.titleLineTwo[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.titleLineTwo[0].markDefs, item)}>{item.text}</span> : item.text)}
    </Box>
    <Box textAlign="center" my={5}>
      <Link display="block" height="70px" width="488px" borderRadius="5px" margin="auto" boxShadow="#6a6a6a" backgroundColor={section.ctaBackgroundColor.hex} >
      <Box fontSize="28px" color={section.ctaColor.hex}>{section.CtalineOne}</Box>
        <small color={section.ctaColor.hex}>{section.CtalineTwo}</small>
      </Link>
    </Box>
    <Box textAlign="center" fontSize="1rem" fontWeight="400">
      {section.lineThree[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineThree[0].markDefs, item)}>{item.text}</span> : item.text)}
    </Box>
  </Box>
)
}