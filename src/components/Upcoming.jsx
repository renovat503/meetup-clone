import { Box, Heading , Container , Button ,Image , Badge, Center} from "@chakra-ui/react";
import smile from '../assets/smile.jpg';
import mind from '../assets/mind.jpg';
import vase from '../assets/vase.jpg';
import chart from '../assets/chart.jpg';
import avatarone from '../assets/avatarone.jpg';
import avatartwo from '../assets/avatartwo.jpg';
import { HiVideoCamera } from "react-icons/hi";
import { MdOutlineIosShare } from "react-icons/md";
const Upcoming = () => {
    return ( 
        <>
        <Container maxW="container.lg" mt={20}>
            <Box display="Flex" justifyContent="space-between">
                <Heading size="lg">Upcoming online events</Heading>
                <Button colorScheme='teal' variant='link'>Explore more events</Button>
            </Box>

            {/* Cards Section */}
            <Box display="flex" justifyContent="center">
                <Box mt="9" mr={4} maxW="23%">
                    <Badge  mt="2" borderRadius="md" display="flex" ml="2"colorScheme='green' position="absolute"><HiVideoCamera size={17}/><Box ml="1">Online event</Box></Badge>
                    <Image src={smile} borderRadius="xl" alt="smile"/>
                    <Box fontWeight="600" color="gray.500"textAlign ="left" mt="2">THU, MAY 19 · 5:00 PM MDT</Box>
                    <Box fontWeight="650" textAlign ="left" mt="1" >Want to be happier and more confident ?</Box>
                    <Box fontSize="12"color="gray.400"textAlign ="left" mt="1">Self-confidence NY NJ Meetup...</Box> 
                    <Box mt="3" display="flex" justifyContent="space-between">
                        <Box display="flex">
                            <Image border='2px' borderColor='white' zIndex={3} src={avatarone} borderRadius="50%" alt="avatat one"/>
                            <Image border='2px' borderColor='white'zIndex={2} ml="-5"src={avatartwo} borderRadius="50%" alt="avatat two"/>
                            <Image border='2px' borderColor='white'zIndex={1} ml="-5"src={avatarone} borderRadius="50%" alt="avatat one"/>
                            <Box ml="1" mt="1" fontSize="14" color="gray">439</Box>
                        </Box>
                        <MdOutlineIosShare size="20" color="gray"/>
                    </Box>  
                </Box>
                <Box mt="9" mr={4}maxW="23%">
                    <Badge  mt="2" borderRadius="md" display="flex" ml="2"colorScheme='green' position="absolute"><HiVideoCamera size={17}/><Box ml="1">Online event</Box></Badge>
                    <Image src={vase} borderRadius="xl" alt="vase"/>
                    <Box fontWeight="600" color="gray.500"textAlign ="left" mt="2">THU, MAY 19 · 5:00 PM MDT</Box>
                    <Box fontWeight="650" textAlign ="left" mt="1" >Want to be happier and more confident ?</Box>
                    <Box fontSize="12"color="gray.400"textAlign ="left" mt="1">Self-confidence NY NJ Meetup...</Box>
                    <Box mt="3" display="flex" justifyContent="space-between">
                        <Box display="flex">
                            <Image border='2px' borderColor='white' zIndex={3} src={avatarone} borderRadius="50%" alt="avatat one"/>
                            <Image border='2px' borderColor='white'zIndex={2} ml="-5"src={avatartwo} borderRadius="50%" alt="avatat two"/>
                            <Image border='2px' borderColor='white'zIndex={1} ml="-5"src={avatarone} borderRadius="50%" alt="avatat one"/>
                            <Box ml="1" mt="1" fontSize="14" color="gray">439</Box>
                        </Box>
                        <MdOutlineIosShare size="20" color="gray"/>
                    </Box>   
                </Box>
                <Box mt="9"mr={4} maxW="23%">
                    <Badge  mt="2" borderRadius="md" display="flex" ml="2"colorScheme='green' position="absolute"><HiVideoCamera size={17}/><Box ml="1">Online event</Box></Badge>
                    <Image src={mind} borderRadius="xl" alt="mind"/>
                    <Box fontWeight="600" color="gray.500"textAlign ="left" mt="2">THU, MAY 19 · 5:00 PM MDT</Box>
                    <Box fontWeight="650" textAlign ="left" mt="1" >Want to be happier and more confident ?</Box>
                    <Box fontSize="12"color="gray.400"textAlign ="left" mt="1">Self-confidence NY NJ Meetup...</Box> 
                    <Box mt="3" display="flex" justifyContent="space-between">
                        <Box display="flex">
                            <Image border='2px' borderColor='white' zIndex={3} src={avatarone} borderRadius="50%" alt="avatat one"/>
                            <Image border='2px' borderColor='white'zIndex={2} ml="-5"src={avatartwo} borderRadius="50%" alt="avatat two"/>
                            <Image border='2px' borderColor='white'zIndex={1} ml="-5"src={avatarone} borderRadius="50%" alt="avatat one"/>
                            <Box ml="1" mt="1" fontSize="14" color="gray">439</Box>
                        </Box>
                        <MdOutlineIosShare size="20" color="gray"/>
                    </Box>  
                </Box>
                <Box mt="9" maxW="23%">
                    <Badge  mt="2" borderRadius="md" display="flex" ml="2"colorScheme='green' position="absolute"><HiVideoCamera size={17}/><Box ml="1">Online event</Box></Badge>
                    <Image src={chart} borderRadius="xl" alt="chart"/>
                    <Box fontWeight="600" color="gray.500"textAlign ="left" mt="2">THU, MAY 19 · 5:00 PM MDT</Box>
                    <Box fontWeight="650" textAlign ="left" mt="1" >Want to be happier and more confident ?</Box>
                    <Box fontSize="12"color="gray.400"textAlign ="left" mt="1">Self-confidence NY NJ Meetup...</Box>   
                    <Box mt="3" display="flex" justifyContent="space-between">
                        <Box display="flex">
                            <Image border='2px' borderColor='white' zIndex={3} src={avatarone} borderRadius="50%" alt="avatat one"/>
                            <Image border='2px' borderColor='white'zIndex={2} ml="-5"src={avatartwo} borderRadius="50%" alt="avatat two"/>
                            <Image border='2px' borderColor='white'zIndex={1} ml="-5"src={avatarone} borderRadius="50%" alt="avatat one"/>
                            <Box ml="1" mt="1" fontSize="14" color="gray">439</Box>
                        </Box>
                        <MdOutlineIosShare size="20" color="gray"/>
                    </Box>
                </Box>

            </Box>
        </Container>
        </>
     );
}
 
export default Upcoming;