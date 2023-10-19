import { Link as ReactLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  VStack,
  useDisclosure,
  chakra,
} from '@chakra-ui/react';

import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const bg = 'white';
  const mobileNav = useDisclosure();

  return (
    <chakra.header
      bg={bg}
      w='full'
      px={{
        base: 2,
        sm: 4,
      }}
      py={6}
      shadow='md'
      position='relative'
      zIndex={1}>
      <Flex alignItems='center' justifyContent='space-between' mx='auto'>
        <Flex>
          <ChakraLink
            as={ReactLink}
            to='/'
            title='Página Inicial'
            display='flex'
            alignItems='center'>
            {/* <Logo /> */}
          </ChakraLink>
          <ChakraLink as={ReactLink} to='/'>
            <chakra.h1 fontSize='xl' fontWeight='medium' ml='2'>
              Autoescola Lider
            </chakra.h1>
          </ChakraLink>
        </Flex>
        <HStack display='flex' alignItems='center' spacing={1}>
          <HStack
            spacing={1}
            mr={1}
            color='brand.500'
            display={{
              base: 'none',
              md: 'inline-flex',
            }}>
            <ChakraLink as={ReactLink} to='/'>
              <Button variant='ghost'>Página Inicial</Button>
            </ChakraLink>
            <ChakraLink as={ReactLink} to='/sobre'>
              <Button variant='ghost'>Quem Somos</Button>
            </ChakraLink>
            <ChakraLink as={ReactLink} to='/servicos'>
              <Button variant='ghost'>Serviços</Button>
            </ChakraLink>
            <ChakraLink as={ReactLink} to='/avaliacoes'>
              <Button variant='ghost'>Testemunhas</Button>
            </ChakraLink>
            <ChakraLink as={ReactLink} to='/contato'>
              <Button variant='ghost'>Contato</Button>
            </ChakraLink>
          </HStack>
          <Box
            display={{
              base: 'inline-flex',
              md: 'none',
            }}>
            <IconButton
              display={{
                base: 'flex',
                md: 'none',
              }}
              aria-label='abrir menu'
              fontSize='20px'
              color='gray.800'
              variant='ghost'
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              pos='absolute'
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? 'flex' : 'none'}
              flexDirection='column'
              p={2}
              pb={4}
              m={2}
              bg={bg}
              spacing={3}
              rounded='sm'
              shadow='sm'>
              <CloseButton aria-label='fechar menu' onClick={mobileNav.onClose} />

              <ChakraLink as={ReactLink} to='/'>
                <Button w='full' variant='ghost'>
                  Página Inicial
                </Button>
              </ChakraLink>
              <ChakraLink as={ReactLink} to='sobre'>
                <Button w='full' variant='ghost'>
                  Quem Somos
                </Button>
              </ChakraLink>
              <ChakraLink as={ReactLink} to='servicos'>
                <Button w='full' variant='ghost'>
                  Serviços
                </Button>
              </ChakraLink>
              <ChakraLink as={ReactLink} to='avaliacoes'>
                <Button w='full' variant='ghost'>
                  Testemunhas
                </Button>
              </ChakraLink>
              <ChakraLink as={ReactLink} to='contato'>
                <Button w='full' variant='ghost'>
                  Contato
                </Button>
              </ChakraLink>
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </chakra.header>
  );
};

export default Navbar;
