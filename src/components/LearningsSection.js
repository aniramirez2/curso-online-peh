import { React } from 'react';
import { Box, Link } from '@chakra-ui/layout';

export const LearningSection = ({section}) => {
  const getBoxClassNames = (id, markDefs, children) => {
    return markDefs.find(item => item._key === id) ? {'color': markDefs[0].hex} : {'textDecoration': children.marks[0]}
  }
return (
  <Box height={["105vh", "auto"]} py={[0, 20]} key={section.sectionType} backgroundColor={section.backgroundColor.hex} color={section.textColor.hex} id={section.sectionType}>
    <Box my={[8 ,10]} textAlign="center" fontSize={["28px","48px"]}>
     {section.lineOne[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineOne[0].markDefs, item)}>{item.text}</span> : item.text)}
    </Box>
    <Box mt={10} justifyContent={["left","center"]} display={['inline', 'flex']}>
      {section.titleLineTwo? 
      <Box w={["90%","18%"]} fontSize="24px" textAlign={["left", "center"]} mx={10}>
        {section.titleLineTwo[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.titleLineTwo[0].markDefs, item)}>{item.text}</span> : item.text)}
      </Box> : null
      }
      {section.lineThree?
      <Box w={["90%","18%"]} fontSize="24px" textAlign={["left", "center"]} mx={10}>
        {section.lineThree[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineThree[0].markDefs, item)}>{item.text}</span> : item.text)}
      </Box>:null
      }
      {section.lineFour?
      <Box w={["90%","18%"]} fontSize="24px" textAlign={["left", "center"]} mx={10}>
        {section.lineFour[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineFour[0].markDefs, item)}>{item.text}</span> : item.text)}
      </Box>:null
      }
    </Box>
    {section.image?
    <Box textAlign="center" w={["95%","334px"]} margin="auto" my={5}>
      <Link href={`https://api.whatsapp.com/send?phone=${section.whatsapp}`} target="_blank">
        <img style={{'margin':'auto'}} alt="" src={`https://cdn.sanity.io/images/w9w13qo7/production/${section.image.asset._ref.split('-')[1] + '-' +section.image.asset._ref.split('-')[2]}.png`} />
      </Link>
    </Box>:null
    }
    {section.CtalineOne?
    <Box textAlign="center" my={5}>
      <Link href={`https://api.whatsapp.com/send?phone=${section.whatsapp}`} 
        target="_blank" 
        display="block" 
        height="70px" 
        w={["95%","488px"]} 
        borderRadius="5px" 
        margin="auto" 
        boxShadow="#6a6a6a" 
        backgroundColor={section.ctaBackgroundColor.hex} 
        color={section.ctaColor.hex}>        
        <Box fontSize={["16px","28px"]} color={section.ctaColor.hex} pt={2}>{section.CtalineOne}</Box>        
        <small color={section.ctaColor.hex}>{section.CtalineTwo}</small>
      </Link>
    </Box>:null
    }

    {section.lineFive?
    <Box textAlign="center" fontSize="18px" mb={8}>
        {section.lineFive[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineFive[0].markDefs, item)}>{item.text}</span> : item.text)}
      
    </Box>: null
    }
  </Box>
)
}