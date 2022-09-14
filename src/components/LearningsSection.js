import { React } from 'react';
import { Box, Flex, Link } from '@chakra-ui/layout';

export const LearningSection = ({section}) => {
  const getBoxClassNames = (id, markDefs, children) => {
    return markDefs.find(item => item._key === id) ? {'color': markDefs[0].hex} : {'textDecoration': children.marks[0]}
  }
return (
  <Box py={20} key={section.sectionType} backgroundColor={section.backgroundColor.hex} color={section.textColor.hex} id={section.sectionType}>
    <Box pb={10} textAlign="center" fontSize="48px">
     {section.lineOne[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineOne[0].markDefs, item)}>{item.text}</span> : item.text)}
    </Box>
    <Flex pt={10} justifyContent="center">
      {section.titleLineTwo? 
      <Box w="18%" fontSize="24px" textAlign="center" px={10}>
        {section.titleLineTwo[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.titleLineTwo[0].markDefs, item)}>{item.text}</span> : item.text)}
      </Box> : null
      }
      {section.lineThree?
      <Box w="18%" fontSize="24px" textAlign="center" px={10}>
        {section.lineThree[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineThree[0].markDefs, item)}>{item.text}</span> : item.text)}
      </Box>:null
      }
      {section.lineFour?
      <Box w="18%" fontSize="24px" textAlign="center" px={10}>
        {section.lineFour[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineFour[0].markDefs, item)}>{item.text}</span> : item.text)}
      </Box>:null
      }
    </Flex>
    {section.image?
    <Box textAlign="center" w="334px" margin="auto" py={5}>
      <img style={{'margin':'auto'}} alt="" src={`https://cdn.sanity.io/images/w9w13qo7/production/${section.image.asset._ref.split('-')[1] + '-' +section.image.asset._ref.split('-')[2]}.png`} />
    </Box>:null
    }
    <Box textAlign="center" py={5}>
      <Link display="block" color="black" height="70px" width="488px" borderRadius="5px" margin="auto" boxShadow="#6a6a6a" backgroundColor={section.ctaBackgroundColor.hex} >
        {section.lineFour?
        <Box fontSize="28px" color={section.ctaColor.hex}>{section.CtalineOne}</Box>:null
        }
        <small color={section.ctaColor.hex}>{section.CtalineTwo}</small>
      </Link>
    </Box>

    {section.lineFive?
    <Box textAlign="center" fontSize="18px">
        {section.lineFive[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineFive[0].markDefs, item)}>{item.text}</span> : item.text)} : null
      
    </Box>: null
    }
  </Box>
)
}