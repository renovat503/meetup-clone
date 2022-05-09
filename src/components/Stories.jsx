import { Box , Image , Button, Container ,Heading, Grid } from "@chakra-ui/react";
import first from '../assets/first.jpg';
import second from '../assets/second.jpg';
import third from '../assets/third.jpg';
const Stories = () => {
    return ( 
        <>
         {/* Section One*/}

         <Container maxW="container.lg">
            <Box w="100%"alignItems="center" mt="20">
                <Heading size ="lg">Stories from Meetup</Heading>
                <Box justifyContent="center" display="flex">
                    <Box  maxW="450px" fontSize="sm" textAlign="center" fontWeight="sm" mt="4"  >
                    People on Meetup have fostered community, learned new skills, started businesses, and made life-long friends. Learn how.
                    </Box>
                </Box> 
            </Box>
        </Container>

        {/** Section Two */}

        <Container maxW="container.lg" mt={10}>
            <Grid templateColumns="repeat(3,1fr)"gap={9}>
                
                    <Box  alignItems="center">
                        <Box justifyContent="center" display="flex">
                            <Image  src={first} alt ="hands up"/>
                        </Box>
                        <Box fontWeight={700} textAlign="left" mt="4">Three Ways To Make Coworker Friendships While Working From Home</Box>
                        <Box textAlign="left"fontSize="sm"mt="4"color="gray.500"> Work friendships don’t need to fade just because you’re working remotely. Here are three fun ways you can get to know your colleagues.</Box>
                    </Box>
                    <Box  alignItems="center">
                        <Box justifyContent="center" display="flex">
                            <Image src={second} alt ="ticket"/>
                        </Box>
                        <Box fontWeight={700} textAlign="left" mt="4">Five Ways to Feel More Connected</Box>
                        <Box textAlign="left"fontSize="sm"mt="4"color="gray.500">Since Meetup began nearly 20 years ago, we’ve fostered connections between more than 50 million people in 190 countries worldwide. Here are five simple strategies to help you feel more connected and improve your wellbeing.</Box>
                    </Box>
                    <Box  alignItems="center">
                    <Box justifyContent="left" display="flex">
                        <Image  src={third} alt ="join the group"/>
                        </Box>
                        <Box fontWeight={700} mt="4" textAlign="left" >How to live your best social life</Box>
                        <Box textAlign="left"fontSize="sm"mt="4"color="gray.500">Social interaction is a key part of any healthy lifestyle. Discover all different kinds of events that’ll help you maintain a fun and fulfilling social life.</Box>
                    </Box>
            </Grid>
        </Container>
        </>
     );
}
 
export default Stories;