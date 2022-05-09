import { Box , Image ,  Container , Grid } from "@chakra-ui/react";
import ione from '../assets/Screen1.jpg';
import itwo from '../assets/Screen2.jpg';
import apple from '../assets/apple.svg';
import android from '../assets/android.svg';
import square from '../assets/square.png';

const Connected = () => {
    return ( 
        <>
        <Container maxW="container.lg">
            <Grid mt="40"templateColumns='repeat(3, 1fr)' gap={20}>
                <Box>
                    <Image src={ione}/>
                </Box>
                <Box>
                    <Box display="flex" justifyContent="center">
                        <Image w={100}src={square}/>
                    </Box>
                    <Box mt="20"fontSize="20"fontWeight="700">Stay connected.</Box>
                    <Box fontSize="20"fontWeight="700">Download the app.</Box>
                    <Box mt="2"display="flex" justifyContent="space-between" >
                        <Image src={apple}/>
                        <Image src={android}/>
                    </Box>

                </Box>
                <Box>
                    <Image src={itwo}/>
                </Box>
            </Grid>
        </Container>
        </>
     );
}
 
export default Connected;