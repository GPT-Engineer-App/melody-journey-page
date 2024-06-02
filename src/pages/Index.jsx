import { Container, VStack, Heading, Text, Button, HStack, Box, Image, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            The Rocking Band
          </Heading>
          <Text fontSize="xl">Join us on our epic tour across the country!</Text>
        </Box>

        <Box>
          <Image src="https://images.unsplash.com/photo-1474692295473-66ba4d54e0d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMHBlcmZvcm1pbmclMjBsaXZlfGVufDB8fHx8MTcxNzMzNTE3OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Rock Band Performing Live" borderRadius="md" />
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Upcoming Tour Dates
          </Heading>
          <VStack spacing={4}>
            <Box>
              <Text fontSize="md">New York, NY - Madison Square Garden - July 20, 2023</Text>
            </Box>
            <Box>
              <Text fontSize="md">Los Angeles, CA - The Forum - July 25, 2023</Text>
            </Box>
            <Box>
              <Text fontSize="md">Chicago, IL - United Center - July 30, 2023</Text>
            </Box>
          </VStack>
        </Box>

        <Box textAlign="center">
          <Button colorScheme="teal" size="lg">
            Buy Tickets
          </Button>
        </Box>

        <HStack spacing={4} justify="center">
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
