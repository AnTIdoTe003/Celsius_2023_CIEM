import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box,Heading } from '@chakra-ui/react'
import '../styles/faqs.scss'
import React from 'react'

const FAQs = () => {
  return (
    <div className='faq_wrapper' id='faqs'>
        <Heading as={'h1'} fontSize={'5rem'} textAlign={'center'}>FAQs</Heading>
    <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontFamily={'poppins'}>
         1. What is Celsius?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontFamily={'poppins'}>
    Celsius, the annual festivity of CIEM and CISM is one of the biggest events that you would not want to miss. Various competitions are held ranging from tech to sports, dance to fashion shows, to instill new skills in the competitors. Buckle up your seatbelts as we head towards another year of Celsius.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontFamily={'poppins'}>
        2. What is the dates of tech fest, sports fest and cultural fest of celsius
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontFamily={'poppins'}>
    The date is Tech Fest is 27th and 28 th March 
    Sports fest - 23rd - 31st March and Cultural fest on 7th and 8th April 2023.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontFamily={'poppins'}>
        3. Will everyone get certificate of participation.
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontFamily={'poppins'}>
    Yes everyone will get a participation certificate.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</div>
  )
}

export default FAQs