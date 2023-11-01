import { useRef, useState } from 'react';

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
  chakra,
} from '@chakra-ui/react';

import { MdPhone, MdEmail, MdLocationOn, MdFacebook, MdOutlinePhone } from 'react-icons/md';
import { BsPerson, BsWhatsapp, BsInstagram } from 'react-icons/bs';

import { GMap } from '../components';

import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);

  // Emailjs
  const sendEmail = (): void => {
    if (form.current)
      emailjs
        .sendForm(
          `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
          `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
          form.current,
          `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`,
        )
        .then(
          () => {
            toast.success('Mensagem enviada com sucesso!');
          },
          () => {
            toast.error('Ocorreu um erro! Tente novamente mais tarde.');
          },
        );
  };

  // Form validation
  const [formData, setFormData] = useState({
    user_name: '',
    user_phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'user_phone' ? formatPhoneNumber(value) : value,
    });
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    // Remove caracteres não numéricos do número de telefone
    const cleaned = phoneNumber.replace(/\D/g, '');

    // Formate o número de telefone (99) 99999-9999
    if (cleaned.length === 11) {
      const part1 = cleaned.slice(0, 2);
      const part2 = cleaned.slice(2, 7);
      const part3 = cleaned.slice(7, 11);
      return `(${part1}) ${part2}-${part3}`;
    }

    return cleaned;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: Record<string, string> = {};

    if (formData.user_name.length < 3) {
      validationErrors.user_name = 'O nome deve ter pelo menos 3 letras';
    }

    if (formData.user_phone.replace(/\D/g, '').length < 11) {
      validationErrors.user_phone = 'Digite o número de telefone completo com DDD';
    }

    if (formData.message.length < 3) {
      validationErrors.message = 'A mensagem deve ter pelo menos 3 letras';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      sendEmail();

      // Limpa o formulário
      setFormData({
        user_name: '',
        user_phone: '',
        message: '',
      });
    }
  };

  // Botão de chamada
  const phoneNumber: string = '+5582994152914';
  const handleCallButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  // Botão de email
  const email: string = 'cfclidercolonia@gmail.com';
  const subject: string = 'Olá%20equípe%20da%20Autoescola%20Líder!';
  const body: string = 'Escreva%20sua%20mensagem...';
  const handleEmailButtonClick = () => {
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const brand: string = '#f4c827';

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <Container bg='gray.50' maxW='full' mt={0} centerContent overflow='hidden' p={5}>
        <Flex w={'full'}>
          <Box bg='white' color='black' borderRadius='lg' p={{ base: 5, md: 5, lg: 16 }} w={'full'}>
            <Box p={4}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={[16, 8]}>
                <Box>
                  <Heading>Entre em Contato</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color='gray.900' maxW='sm' fontSize='md'>
                    Entre em contato conosco para fazer a sua CNH, contratar, tirar dúvidas, marcar
                    aulas, ou simplesmente para nos conhecer melhor. Estamos aqui para ajudar e
                    fazer da sua experiência na Autoescola Lider a melhor possível. Aguardamos o seu
                    contato!
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems='flex-start' color='gray.900'>
                      <Button
                        size='md'
                        height='48px'
                        width='200px'
                        variant='ghost'
                        _hover={{ border: `2px solid ${brand}` }}
                        leftIcon={<MdPhone color={brand} size='24px' />}
                        onClick={handleCallButtonClick}>
                        (82) 99415 2914
                      </Button>

                      <Button
                        size='md'
                        height='48px'
                        width='275px'
                        variant='ghost'
                        _hover={{ border: `2px solid ${brand}` }}
                        leftIcon={<MdEmail color={brand} size='24px' />}
                        onClick={handleEmailButtonClick}>
                        cfclidercolonia@gmail.com
                      </Button>
                      <Button
                        size='md'
                        height='48px'
                        width='245px'
                        variant='ghost'
                        _hover={{ border: `2px solid ${brand}` }}
                        leftIcon={<MdLocationOn color={brand} size='24px' />}>
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
                      _hover={{ bg: `${brand}` }}
                      icon={<MdFacebook size='30px' />}
                      cursor='pointer'
                    />
                    <IconButton
                      aria-label='instagram'
                      variant='ghost'
                      size='lg'
                      isRound={true}
                      _hover={{ bg: `${brand}` }}
                      icon={<BsInstagram size='28px' />}
                      cursor='pointer'
                    />
                    <ChakraLink as={ReactLink} to='https://wa.me/5582994152914'>
                      <IconButton
                        aria-label='whatsapp'
                        variant='ghost'
                        size='lg'
                        isRound={true}
                        _hover={{ bg: `${brand}` }}
                        icon={<BsWhatsapp size='28px' />}
                        cursor='pointer'
                      />
                    </ChakraLink>
                  </HStack>
                </Box>

                <Box bg='white' borderRadius='lg'>
                  <Heading display={{ base: 'block', md: 'none' }}>Envie uma mensagem</Heading>
                  <Box m={8} color='gray.900' fontSize='md'>
                    <form ref={form} onSubmit={handleSubmit}>
                      <VStack spacing={5}>
                        <FormControl id='user_name'>
                          <FormLabel>
                            {errors.user_name ? (
                              <chakra.span color='red.500' fontSize={'md'}>
                                *{' '}
                              </chakra.span>
                            ) : (
                              ''
                            )}
                            Seu nome
                          </FormLabel>
                          <InputGroup borderColor='gray.700'>
                            <InputLeftElement pointerEvents='none'>
                              <BsPerson color='gray.800' />
                            </InputLeftElement>
                            <Input
                              name='user_name'
                              type='text'
                              size='md'
                              placeholder='Nome Completo'
                              focusBorderColor={brand}
                              value={formData.user_name}
                              onChange={handleChange}
                            />
                          </InputGroup>
                          <Text>
                            {errors.user_name && (
                              <chakra.span color='red.500'>{errors.user_name}</chakra.span>
                            )}
                          </Text>
                        </FormControl>
                        <FormControl id='user_phone'>
                          <FormLabel>
                            {errors.user_phone ? (
                              <chakra.span color='red.500' fontSize={'md'}>
                                *{' '}
                              </chakra.span>
                            ) : (
                              ''
                            )}
                            Telefone de contato
                          </FormLabel>
                          <InputGroup borderColor='gray.700'>
                            <InputLeftElement pointerEvents='none'>
                              <MdOutlinePhone color='gray.800' />
                            </InputLeftElement>
                            <Input
                              name='user_phone'
                              size='md'
                              placeholder='(99) 99999-9999'
                              type='text'
                              focusBorderColor={brand}
                              value={formData.user_phone}
                              onChange={handleChange}
                            />
                          </InputGroup>
                          <Text>
                            {errors.user_phone && (
                              <chakra.span color='red.500'>{errors.user_phone}</chakra.span>
                            )}
                          </Text>
                        </FormControl>
                        <FormControl id='message'>
                          <FormLabel>
                            {errors.message ? (
                              <chakra.span color='red.500' fontSize={'md'}>
                                *{' '}
                              </chakra.span>
                            ) : (
                              ''
                            )}
                            Sobre qual serviço você quer saber mais?
                          </FormLabel>
                          <Textarea
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            borderColor='gray.600'
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder='Primeira Habilitação, Reciclagem, Aulas, etc...'
                            focusBorderColor={brand}
                          />
                          <Text>
                            {errors.message && (
                              <chakra.span color='red.500'>{errors.message}</chakra.span>
                            )}
                          </Text>
                        </FormControl>
                        <FormControl float='right'>
                          <Button
                            variant='solid'
                            bg='gray.900'
                            color='white'
                            _hover={{ bg: `${brand}` }}
                            type='submit'>
                            Enviar
                          </Button>
                        </FormControl>
                      </VStack>
                    </form>
                  </Box>
                </Box>

                <GMap />
              </SimpleGrid>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default ContactForm;
