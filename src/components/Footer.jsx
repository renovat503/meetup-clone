import { Box , Image , Button, Container ,Heading, Grid ,Divider} from "@chakra-ui/react";
import apple from '../assets/apple.svg';
import android from '../assets/android.svg';
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";


const Footer = () => {
    return ( 
        <>
        <Container display="flex" justifyContent="center" bg="gray.800" maxW="container.xxl"p="2">
            <Box w="1000px">
                <Box maxW="lg"display="flex" mt="2">
                    <Box fontWeight="500"mt="2"color="white">Create your own Meetup group.</Box>
                    <Button color="white" ml="10"colorScheme='white' variant='outline'>
                        Get started
                    </Button>
                </Box>
                <Divider mt="5" color="gray.100" orientation='horizontal' />
                <Box>
                <Grid templateColumns='repeat(3, 1fr)' gap={6}> 
                    <Box color="white" textAlign="left" mt="4">
                        <Box fontWeight="600">Your Account</Box>
                        <Box color="gray.400">Sign up</Box>
                        <Box color="gray.400">Log in </Box>
                        <Box color="gray.400">Help</Box>
                    </Box>
                    <Box color="white" textAlign="left"mt="4">
                    <Box fontWeight="600">Discover</Box>
                        <Box color="gray.400">Groups</Box>
                        <Box color="gray.400">Calendar</Box>
                        <Box color="gray.400">Topics</Box>
                        <Box color="gray.400">Cities</Box>
                        <Box color="gray.400">Online Events</Box>
                        <Box color="gray.400">Local Guides</Box>
                    </Box>
                    <Box color="white" textAlign="left"mt="4">
                    <Box fontWeight="600">Meetup</Box>
                        <Box color="gray.400">About</Box>
                        <Box color="gray.400">Blog </Box>
                        <Box color="gray.400">Meetup Pro</Box>
                        <Box color="gray.400">Careers</Box>
                        <Box color="gray.400">Apps</Box>
                    </Box>
                </Grid>
                <Box mt="6" w="100%"  display="flex" justifyContent="space-between">
                    <Box fontWeight="500"color="white">
                        <Box textAlign="left">Follow us</Box>
                        <Box display="flex">
                          <Box mr="8" mt="2"><TiSocialTwitter size="20" /></Box>
                          <Box mr="8"mt="2"><TiSocialYoutube size="20"/></Box>
                          <Box mr="8"mt="2"><TiSocialInstagram size="20"/></Box>
                          <Box mr="8"mt="2"><TiSocialFacebook size="20"/></Box>
                        </Box>
                    </Box>
                    <Box display="flex">
                        <Image mr="3"src={apple}/>
                        <Image src={android}/>
                </Box>
                </Box>
                <Box color="white" mt="12" display="flex">
                    <Box fontWeight="600" mr="10">© 2022 Meetup clone</Box>
                    <Box fontWeight="400" mr="10" color="gray.500">Terms of Service</Box>
                    <Box fontWeight="400" mr="10" color="gray.500">Privacy Policy</Box>
                    <Box fontWeight="400" mr="10" color="gray.500">Cookie Policy</Box>
                    <Box fontWeight="400" color="gray.500">Help</Box>

                </Box>
                </Box>
            </Box>
        </Container>
        </>
     );
}
 
export default Footer;