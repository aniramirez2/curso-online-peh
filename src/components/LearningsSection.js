import { React } from 'react';
import { Box, Link, Text } from '@chakra-ui/layout';

export const LearningSection = ({section}) => {
  const getBoxClassNames = (id, markDefs, children) => {
    return markDefs.find(item => item._key === id) ? {'color': markDefs[0].hex} : {'textDecoration': children.marks[0]}
  }
return (
  <Box height={["auto", "auto"]} py={[2, 20]} key={section.sectionType} backgroundColor={section.backgroundColor.hex} color={section.textColor.hex} id={section.sectionType}>
    <Box my={[0 ,10]} fontFamily="oswaldbold" textAlign="center" fontSize={["28px","48px"]} width={["80%", "auto"]} margin="auto" py={5} lineHeight="1.1em">
     {section.lineOne[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineOne[0].markDefs, item)} key={item.text}>{item.text}</span> : item.text)}
    </Box>
    <Box mt={2} justifyContent={["center","space-around"]} display={['block', 'flex']} fontFamily="sfuitextmedium" fontWeight="500">
      {section.titleLineTwo? 
      <Box lineHeight="1.1em" w={["90%","18%"]} fontSize={["14px","24px"]} textAlign={["center", "center"]} mx={5} mb={[6,0]}>
        {section.titleLineTwo[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.titleLineTwo[0].markDefs, item)} key={item.text}>{item.text}</span> : item.text)}
      </Box> : null
      }
      {section.lineThree?
      <Box lineHeight="1.1em" w={["90%","18%"]} fontSize={["14px","24px"]} textAlign={["center", "center"]} mx={5} mb={[6,0]}>
        {section.lineThree[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineThree[0].markDefs, item)} key={item.text}>{item.text}</span> : item.text)}
      </Box>:null
      }
      {section.lineFour?
      <Box lineHeight="1.1em" w={["85%","18%"]} fontSize={["14px","24px"]} textAlign={["center", "center"]} mx={5} mb={[6,0]}>
        {section.lineFour[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineFour[0].markDefs, item)} key={item.text}>{item.text}</span> : item.text)}
      </Box>:null
      }
    </Box>
    {section.image?
    <Box textAlign="center" w={["60%","334px"]} margin="auto" my={2} >
      <Link href={`https://api.whatsapp.com/send?phone=${section.whatsapp}`} target="_blank">
        <img style={{'margin':'auto'}} alt="" src={`https://cdn.sanity.io/images/w9w13qo7/production/${section.image.asset._ref.split('-')[1] + '-' +section.image.asset._ref.split('-')[2]}.png`} />
      </Link>
    </Box>:null
    }
    {section.CtalineOne?
    <Box textAlign="center" my={5} fontFamily="sfuitextheavy" fontWeight={400}>
      <Link href={`https://api.whatsapp.com/send?phone=${section.whatsapp}`} 
        target="_blank" 
        display="block" 
        height="70px" 
        w={["90%","488px"]} 
        borderRadius="5px" 
        margin="auto" 
        boxShadow="#6a6a6a" 
        backgroundColor={section.ctaBackgroundColor.hex} 
        color={section.ctaColor.hex}
        lineHeight="1.5em"
        pt={2}>        
        <Box fontSize={["19px","28px"]} color={section.ctaColor.hex} pt={2} fontFamily="sfuitextheavy">{section.CtalineOne}</Box>        
        <Text color={section.ctaColor.hex} fontFamily="sfuitextregular" fontSize={["12px","16px"]}>{section.CtalineTwo}</Text>
      </Link>
    </Box>:null
    }

    {section.lineFive?
    <Box textAlign="center" fontSize={["12px","18px"]} pb={4} width={["65%","auto"]} margin="auto" fontFamily="Montserrat, sans-serif" fontWeight="bolder">
      {section.lineFive[0]?.children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineFive[0].markDefs, item)} key={item.text}>{item.text}</span> : item.text)}      
    </Box>: null
    }
  </Box>
)
}