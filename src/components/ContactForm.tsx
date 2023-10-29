import { Link as ReactLink } from 'react-router-dom';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  SimpleGrid,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdFacebook, MdOutlinePhone } from 'react-icons/md';
import { BsPerson, BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { GMap } from '../components';

const ContactForm = () => {
  return (
    <Container bg='#EDF3F8' maxW='full' mt={0} centerContent overflow='hidden' p={5}>
      <Flex w={'full'}>
        <Box bg='white' color='black' borderRadius='lg' p={{ base: 5, md: 5, lg: 16 }} w={'full'}>
          <Box p={4}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={[16, 8]}>
              <Box>
                <Heading>Entre em Contato</Heading>
                <Text mt={{ sm: 3, md: 3, lg: 5 }} color='gray.900' maxW='sm'>
                  Entre em contato conosco para fazer a sua CNH, contratar, tirar dúvidas, marcar
                  aulas, ou simplesmente para nos conhecer melhor. Estamos aqui para ajudar e fazer
                  da sua experiência na Autoescola Lider a melhor possível. Aguardamos o seu
                  contato!
                </Text>
                <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                  <VStack pl={0} spacing={3} alignItems='flex-start' color='black'>
                    <Button
                      size='md'
                      height='48px'
                      width='200px'
                      variant='ghost'
                      _hover={{ border: '2px solid #1C6FEB' }}
                      leftIcon={<MdPhone color='#1970F1' size='20px' />}>
                      (82) 9 9415 2914
                    </Button>
                    <Button
                      size='md'
                      height='48px'
                      width='200px'
                      variant='ghost'
                      _hover={{ border: '2px solid #1C6FEB' }}
                      leftIcon={<MdEmail color='#1970F1' size='20px' />}>
                      hello@abc.com
                    </Button>
                    <Button
                      size='md'
                      height='48px'
                      width='250px'
                      variant='ghost'
                      _hover={{ border: '2px solid #1C6FEB' }}
                      leftIcon={<MdLocationOn color='#1970F1' size='20px' />}>
                      Colônia Leopoldina, AL
                    </Button>
                  </VStack>
                </Box>
                <Heading>Redes Sociais</Heading>
                <HStack mt={{ lg: 10, md: 10 }} spacing={5} px={5} alignItems='flex-start'>
                  <IconButton
                    aria-label='facebook'
                    variant='ghost'
                    size='lg'
                    isRound={true}
                    _hover={{ bg: '#0D74FF' }}
                    icon={<MdFacebook size='30px' />}
                    cursor='pointer'
                  />
                  <IconButton
                    aria-label='instagram'
                    variant='ghost'
                    size='lg'
                    isRound={true}
                    _hover={{ bg: '#0D74FF' }}
                    icon={<BsInstagram size='28px' />}
                    cursor='pointer'
                  />
                  <ChakraLink as={ReactLink} to='https://wa.me/5582994152914'>
                    <IconButton
                      aria-label='whatsapp'
                      variant='ghost'
                      size='lg'
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsWhatsapp size='28px' />}
                      cursor='pointer'
                    />
                  </ChakraLink>
                </HStack>
              </Box>

              <Box bg='white' borderRadius='lg'>
                <Box m={8} color='#0B0E3F'>
                  <VStack spacing={5}>
                    <FormControl id='name'>
                      <FormLabel>Seu nome</FormLabel>
                      <InputGroup borderColor='#E0E1E7'>
                        <InputLeftElement pointerEvents='none'>
                          <BsPerson color='gray.800' />
                        </InputLeftElement>
                        <Input type='text' size='md' />
                      </InputGroup>
                    </FormControl>
                    <FormControl id='name'>
                      <FormLabel>Telefone de contato</FormLabel>
                      <InputGroup borderColor='#E0E1E7'>
                        <InputLeftElement pointerEvents='none'>
                          <MdOutlinePhone color='gray.800' />
                        </InputLeftElement>
                        <Input type='text' size='md' />
                      </InputGroup>
                    </FormControl>
                    <FormControl id='name'>
                      <FormLabel>Sobre qual serviço você quer sber mais?</FormLabel>
                      <Textarea
                        borderColor='gray.300'
                        _hover={{
                          borderRadius: 'gray.300',
                        }}
                        placeholder='Primeira Habilitação, Reciclagem, Aulas, etc...'
                      />
                    </FormControl>
                    <FormControl id='name' float='right'>
                      <Button variant='solid' bg='#0D74FF' color='white' _hover={{}}>
                        Enviar
                      </Button>
                    </FormControl>
                  </VStack>
                </Box>
              </Box>

              <GMap />
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default ContactForm;
