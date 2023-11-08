import { Link as ReactLink } from 'react-router-dom';
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
  Link as ChakraLink,
  Image,
} from '@chakra-ui/react';

import { AiOutlineMenu } from 'react-icons/ai';

const logo: string = require('../assets/img/logo.png');

const Navbar = () => {
  const bg = '#fff';
  const text = 'gray.900';
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
      zIndex={2}>
      <Flex alignItems='center' justifyContent='space-between' mx='auto'>
        <Flex alignItems='center' justifyContent='space-between'>
          <ChakraLink
            as={ReactLink}
            to='/'
            title='Página Inicial'
            display='flex'
            alignItems='center'>
            <Image
              src={logo}
              alt='logo'
              h={{ base: 8, md: 12 }}
              fit='cover'
              loading='lazy'
              m='auto'
            />
          </ChakraLink>
        </Flex>
        <HStack display='flex' alignItems='center' spacing={1}>
          <HStack
            spacing={1}
            mr={1}
            color={text}
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

          {/* Mobile menu */}
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
              fontSize='25px'
              color={text}
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
              <CloseButton aria-label='fechar menu' onClick={mobileNav.onClose} fontSize='18px' />

              <ChakraLink as={ReactLink} to='/'>
                <Button w='full' variant='ghost' onClick={mobileNav.onClose}>
                  Página Inicial
                </Button>
              </ChakraLink>
              <ChakraLink as={ReactLink} to='sobre'>
                <Button w='full' variant='ghost' onClick={mobileNav.onClose}>
                  Quem Somos
                </Button>
              </ChakraLink>
              <ChakraLink as={ReactLink} to='servicos'>
                <Button w='full' variant='ghost' onClick={mobileNav.onClose}>
                  Serviços
                </Button>
              </ChakraLink>
              <ChakraLink as={ReactLink} to='avaliacoes'>
                <Button w='full' variant='ghost' onClick={mobileNav.onClose}>
                  Testemunhas
                </Button>
              </ChakraLink>
              <ChakraLink as={ReactLink} to='contato'>
                <Button w='full' variant='ghost' onClick={mobileNav.onClose}>
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
