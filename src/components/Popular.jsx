import { Box , Image , Button, Container ,Heading, Grid , Divider} from "@chakra-ui/react";
import lion from '../assets/lion.jpg'
const Popular = () => {
    return ( 
        <>
        <Container maxW="container.lg">
        <Box mt="112" display="flex" justifyContent="space-between">
            <Heading size="lg">Popular groups</Heading>
            <Button variant="link" colorScheme="teal">Explore more groups</Button>
        </Box>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} mt="7">
            <Box border="1px" p="3" borderColor="gray.300" borderRadius="lg" >
                <Box display="flex">
                    <Image src={lion} borderRadius="lg"/>
                    <Box mt="2" ml="5">
                        <Box textAlign="left" fontWeight="500"color="teal">New Group</Box>
                        <Box textAlign="left" fontWeight="500">Melinated Mens Group</Box>
                    </Box>
                </Box>
                <Divider mt="4" orientation='horizontal' />
                <Box mt="2" ml="5">
                        <Box textAlign="left" fontSize="14" fontWeight="500"color="gray">THU, MAY 19 · 5:00 PM MDT</Box>
                        <Box textAlign="left" fontWeight="500">Micro Gathering-After the fact</Box>
                    </Box>
            </Box>
            <Box border="1px" p="3" borderColor="gray.300" borderRadius="lg" >
                <Box display="flex">
                    <Image src={lion} borderRadius="lg"/>
                    <Box mt="2" ml="5">
                        <Box textAlign="left" fontWeight="500"color="teal">New Group</Box>
                        <Box textAlign="left" fontWeight="500">Melinated Mens Group</Box>
                    </Box>
                </Box>
                <Divider mt="4" orientation='horizontal' />
                <Box mt="2" ml="5">
                        <Box textAlign="left" fontSize="14" fontWeight="500"color="gray">THU, MAY 19 · 5:00 PM MDT</Box>
                        <Box textAlign="left" fontWeight="500">Micro Gathering-After the fact</Box>
                    </Box>
            </Box>
            <Box border="1px" p="3" borderColor="gray.300" borderRadius="lg" >
                <Box display="flex">
                    <Image src={lion} borderRadius="lg"/>
                    <Box mt="2" ml="5">
                        <Box textAlign="left" fontWeight="500"color="teal">New Group</Box>
                        <Box textAlign="left" fontWeight="500">Melinated Mens Group</Box>
                    </Box>
                </Box>
                <Divider mt="4" orientation='horizontal' />
                <Box mt="2" ml="5">
                        <Box textAlign="left" fontSize="14" fontWeight="500"color="gray">THU, MAY 19 · 5:00 PM MDT</Box>
                        <Box textAlign="left" fontWeight="500">Micro Gathering-After the fact</Box>
                    </Box>
            </Box>

        </Grid >
        </Container> 
        </>
     );
}
 
export default Popular;