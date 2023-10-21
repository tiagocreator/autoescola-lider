import { ReactNode } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Box, Container, SimpleGrid, Stack, Text, Link as ChakraLink } from '@chakra-ui/react';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight='medium' fontSize={'xl'} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  const bg = 'white';

  return (
    <Box bg={bg} color='brand.500' shadow='dark-lg'>
      <Container
        as={Stack}
        maxW={'full'}
        py={10}
        px={{
          base: 2,
          sm: 4,
        }}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }} spacing={8}>
          <Stack spacing={10}>
            <Box fontSize='xl' fontWeight='medium'>
              <ChakraLink as={ReactLink} to='/'>
                Autoescola Lider
              </ChakraLink>
            </Box>
            <Text
              fontSize={{
                sm: 'sm',
                md: 'md',
              }}>
              © 2023 Autoescola Lider. Todos os direitos reservados
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Sobre</ListHeader>
            <ChakraLink as={ReactLink} to='/'>
              Página Inicial
            </ChakraLink>
            <ChakraLink as={ReactLink} to='/sobre'>
              Quem Somos
            </ChakraLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Empresa</ListHeader>
            <ChakraLink as={ReactLink} to='/servicos'>
              Serviços
            </ChakraLink>
            <ChakraLink as={ReactLink} to='/avaliacoes'>
              Testemunhas
            </ChakraLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Redes Sociais</ListHeader>
            <Box as='a' href={'#'}>
              Instagram
            </Box>
            <Box as='a' href={'#'}>
              Facebook
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
