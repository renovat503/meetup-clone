import { Box , Image , Button, Container ,Heading, Grid , Badge, FormControl, Input} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa"
import logo from '../assets/logo.png';
import illustration from '../assets/illustration.svg';
import image1 from '../assets/imageOne.jpg';
import image2 from '../assets/imageTwo.jpg';
import image3 from '../assets/imageThree.jpg';

const Banner = () => {
    return ( 
        <>
        <header>
            <Box d="flex" align-items="center" justifyContent="space-between" ml={6} mr={6}>
                <Box><Image boxSize="90px" src={logo}/></Box>
                <Box>
                    <Button pt ={5} pr={3} colorScheme="gray.600" fontSize="sm" variant="link">Log in</Button>
                    <Button  colorScheme="gray.600" fontSize="sm" variant="link">Sign Up</Button>
                </Box>
            </Box>
        </header>

        {/* Main Punch Line*/}

        <Box>
            <Container maxWidth="container.lg">
                <Box d="flex" 
                     alignItems="center"
                     py="20"
                     flexDirection="row">
                    <Box mr="4"> 
                        <Heading>
                            <Box w="100%" fontSize={60} textAlign="left">Celebrating 20 years of real connections on Meetup</Box>
                        </Heading> 
                        <Box w="80%" textAlign="left" fontWeight="medium" mt="4" >
                            Whatever you’re looking to do this year, Meetup can help.
                            For 20 years, people have turned to Meetup to meet people,
                            make friends, find support, grow a business, and explore their interests.
                            Thousands of events are happening every day—join the fun.  
                        </Box>        
                    </Box>
                    <Box w="100%">
                         <Image w="100%" src={illustration} alt = "illustration"/>
                    </Box>
                </Box>
            </Container>
        </Box>


        {/* Three Boxes */}

        <Container maxW="container.lg" mt={10} >
            <Grid  gap ={5} templateColumns="repeat(3, 1fr)" >
                <Box textAlign="left">
                    <Image w="100%" borderRadius="lg" src={image1} alt="imageOne"/>
                    <Button colorScheme="teal" variant = "link" mt = "5">
                        <Box  fontWeight={700} mr="2">Make new friends</Box>
                        <FaArrowRight size={20}/>
                    </Button>
                </Box>
                <Box textAlign="left">
                    <Image w="100%" borderRadius="lg" src={image2} alt="imageOne"/>
                    <Button colorScheme="teal" variant = "link" mt = "5">
                        <Box  fontWeight={700} mr="2">Explorer the outdoors</Box>
                        <FaArrowRight size={20}/>
                    </Button>
                </Box>
                <Box textAlign="left"> 
                    <Image w="100%" borderRadius="lg" src={image3} alt="imageOne"/>
                    <Button colorScheme="teal" variant = "link" mt = "5">
                        <Box  fontWeight={700} mr="2">Connect Over Tech</Box>
                        <FaArrowRight size={20}/>
                    </Button>
                </Box>
            </Grid>
        </Container>

        {/* Pills */}

        <Container maxW="container.lg">
            <Box direction ="row"
                 display="flex"
                 flexWrap="wrap"
                 justifyContent = "space-between"
                 my="10"
                 mt={10}>
                <Badge
                    borderRadius = "3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    textTransform = "normal"
                    color="#ffffff"
                    bg ="teal">

                    Boost your Career
                </Badge>

                <Badge
                    borderRadius = "3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    textTransform = "normal"
                    color="#ffffff"
                    bg ="teal">

                    Find your Zen</Badge>

                    <Badge
                    borderRadius = "3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    textTransform = "normal"
                    color="#ffffff"
                    bg ="teal">

                    Get Moving</Badge>

                    <Badge
                    borderRadius = "3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    textTransform = "normal"
                    color="#ffffff"
                    bg ="teal">

                    Share Language + culture</Badge>

                    <Badge
                    borderRadius = "3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    textTransform = "normal"
                    color="#ffffff"
                    bg ="teal">

                    Read with friends</Badge>

                    <Badge
                    borderRadius = "3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    textTransform = "normal"
                    color="#ffffff"
                    bg ="teal">

                    Write together</Badge>

                    <Badge
                    borderRadius = "3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    textTransform = "normal"
                    color="#ffffff"
                    bg ="teal">

                    Hone your craft</Badge>
                </Box>

                </Container>
                
        
        {/* Last Section*/}

        <Container maxW="container.lg" mt={20}>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Box>
              <Heading as="h3" size="lg" mb="7">
                What do you want to do?
              </Heading>
              <Box d="flex" alignItems="center">
                <Box flexBasis={'50%'} mr="2">
                  <FormControl id="email">
                    <Box pos="relative">
                      <Input
                        pl={'8'}
                        placeholder="Search for 'tennis'"
                        type="text"
                      />
                      <Box pos="absolute" top="3" left="2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="#d9d9d9"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Box>
                    </Box>
                  </FormControl>
                </Box>
                <Box flexBasis="50%" ml="2">
                  <FormControl id="email">
                    <Box pos="relative">
                      <Input
                        pl={'8'}
                        placeholder="Search for 'tennis'"
                        type="text"
                      />
                      <Box pos="absolute" top="3" left="2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="#d9d9d9"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Box>
                    </Box>
                  </FormControl>
                </Box>
              </Box>
              <Button
                _hover={{ opacity: '0.8' }}
                mt="5"
                pt="6"
                pb="6"
                w="100%"
                color="#ffffff"
                bg="pink"
                fontSize="lg"
              >
                <Box fontWeight="black">Search</Box>
              </Button>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb="7">
                See what’s happening
              </Heading>
              <Box direction ="row" >
                <Badge
                    borderRadius = "3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    textTransform = "normal"
                    color="#ffffff"
                    bg ="teal">

                    Starting soon
                </Badge>

                <Badge
                    borderRadius = "3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    textTransform = "normal"
                    color="#ffffff"
                    bg ="teal">

                    Today</Badge>

                    <Badge
                    borderRadius = "3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    textTransform = "normal"
                    color="#ffffff"
                    bg ="teal">

                    Tomorrow</Badge>

                    <Badge
                    borderRadius = "3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    textTransform = "normal"
                    color="#ffffff"
                    bg ="teal">

                    This week</Badge>

                    <Badge
                    borderRadius = "3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    textTransform = "normal"
                    color="#ffffff"
                    bg ="teal">

                    Online</Badge>

                    <Badge
                    borderRadius = "3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    textTransform = "normal"
                    color="#ffffff"
                    bg ="teal">

                    In person</Badge>

                    <Badge
                    borderRadius = "3xl"
                    px={4}
                    py={2}
                    mr="4"
                    mb="4"
                    textTransform = "normal"
                    color="#ffffff"
                    bg ="teal">

                    Trending near you</Badge>
                </Box>
            </Box>
          </Grid>
        </Container>


        </>
     );
}
 
export default Banner;