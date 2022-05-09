import { Box , Image , Button, Container ,Heading, Grid } from "@chakra-ui/react";
import hands from '../assets/handsUp.svg';
import ticket from '../assets/ticket.svg';
import join from '../assets/joinGroup.svg';
const HowWorks = () => {
    return ( 
        <>

        {/* Section One*/}

        <Container maxW="container.lg">
            <Box w="100%"alignItems="center" mt="20">
                <Heading size ="lg">How Meetup works</Heading>
                <Box justifyContent="center" display="flex">
                    <Box  maxW="450px" fontSize="sm" textAlign="center" fontWeight="sm" mt="4"  >
                        Meet new people who share your interests through online and in-person events.
                        It’s free to create an account. 
                    </Box>
                </Box> 
            </Box>
        </Container>

        {/** Section Two */}

        <Container maxW="container.lg" mt={10}>
            <Grid templateColumns="repeat(3,1fr)"gap={9}>
                
                    <Box  alignItems="center">
                        <Box justifyContent="center" display="flex">
                            <Image  w="60%"src={hands} alt ="hands up"/>
                        </Box>
                        <Box fontWeight={700} textAlign="center" color="teal">Join The group</Box>
                        <Box textAlign="center"fontSize="sm">Do what you love, meet others who love it, find your community. The rest is history!</Box>
                    </Box>
                    <Box  alignItems="center">
                        <Box justifyContent="center" display="flex">
                            <Image w="60%"src={ticket} alt ="ticket"/>
                        </Box>
                        <Box fontWeight={700} textAlign="center" color="teal">Find an event</Box>
                        <Box textAlign="center"fontSize="sm">Events are happening on just about any topic you can think of, from online gaming and photography to yoga and hiking.</Box>
                    </Box>
                    <Box  alignItems="center">
                    <Box justifyContent="center" display="flex">
                        <Image  w="60%"src={join} alt ="join the group"/>
                        </Box>
                        <Box fontWeight={700} textAlign="center" color="teal">Start a group</Box>
                        <Box textAlign="center"fontSize="sm">You don’t have to be an expert to gather people together and explore shared interests.</Box>
                    </Box>
            </Grid>
            <Box mt="20">
            <Button colorScheme='teal' size='md'>
                join Meetup
            </Button>
            </Box>
        </Container>
        
        </>
            
     );
}
 
export default HowWorks ;