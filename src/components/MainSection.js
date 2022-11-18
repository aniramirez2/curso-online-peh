import { React } from 'react';
import { Box, Link } from '@chakra-ui/layout';

export const MainSection = ({section}) => {
  
  const getBoxClassNames = (id, markDefs, children) => {
    return markDefs.find(item => item._key === id) ? {'color': markDefs[0].hex} : {'textDecoration': children.marks[0]}
  }

return (
<Box px={9} pt={10} pb={['0', '50px']} key={section.sectionType} backgroundColor={section.backgroundColor.hex } color={section.textColor.hex} id="section1">
  <Box py={4} fontStyle="italic" textAlign="center" textTransform="uppercase" fontFamily="Montserrat, sans-serif" fontSize={["12px","18px"]}>
    {<h4>{section.lineOne[0].children.map(item => item.marks.length ? <Box style={getBoxClassNames(item.marks[0], section.lineOne[0].markDefs, item)} key={item.text}>{item.text}</Box> : item.text)}</h4>}
  </Box>
  <Box w={["95%", "70%"]} margin="auto" fontSize={["27px", "57px"]} fontFamily="oswaldregular" textAlign="center">
    <h1 style={{lineHeight:"1.2em", fontWeight:"500"}}>
      {section.titleLineTwo[0].children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.titleLineTwo[0].markDefs, item)} key={item.text}>{item.text}</span> : item.text)}
    </h1>
  </Box>
  <Box textAlign="center" mx="auto" w={["77%", "100%"]} py={4} fontSize={["14px","24px"]} lineHeight="1.1em" fontFamily="sfuitextmedium" fontStyle="italic" fontWeight="500">
    {section.lineThree[0].children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineThree[0].markDefs, item)} key={item.text}>{item.text}</span> : item.text)}
  </Box>
  <Box justifyContent="center" display={['inline', 'flex']}>
    <Box w={["100%", "35%"]} pt={0} px={4}>
      <Link href={`https://api.whatsapp.com/send?phone=${section.whatsapp}`} target="_blank">
        <img style={{border: '10px solid black', borderRadius: '10px'}} alt="" src={`https://cdn.sanity.io/images/w9w13qo7/production/${section.image.asset._ref.split('-')[1] + '-' +section.image.asset._ref.split('-')[2]}.png`} />
      </Link>
    </Box>
    <Box w={["95%","40%"]} py={[5, 20]} textAlign="center" fontFamily="sfuitextheavy" fontWeight={500} color="black">
      <Box fontSize={["14px","24px"]} lineHeight="1.1em">
        {section.lineFour[0].children.map(item => item.marks.length ? <span style={getBoxClassNames(item.marks[0], section.lineFour[0].markDefs, item)} key={item.text}>{item.text}</span> : item.text)}
      </Box>
      <Box py={5} textAlign="center">
        <Link href={`https://api.whatsapp.com/send?phone=${section.whatsapp}`} target="_blank" display="block" height="70px" width={["100%","488px"]} borderRadius="5px" margin="auto" backgroundColor={section.ctaBackgroundColor.hex} >
          <Box pt={4} lineHeight="1.1em" fontSize={["19px","28px"]} pb={0} textTransform="uppercase" fontFamily="sfuitextheavy">{section.CtalineOne}</Box>
          <Box fontSize={["12px","16px"]} fontFamily="sfuitextregular">{section.CtalineTwo}</Box>
        </Link>
      </Box>
      <Box fontSize={["12px", "18px"]} fontFamily="Montserrat, sans-serif" fontStyle="italic" fontWeight={700}>
        {section.lineFive[0].children.map(item => item.marks.length ? <Box style={getBoxClassNames(item.marks[0], section.lineFive[0].markDefs, item)} key={item.text}>{item.text}</Box> : item.text)}
      </Box>
    </Box>
  </Box>
</Box>
)
}