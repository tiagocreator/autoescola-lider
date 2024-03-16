import { Link as ReactLink } from 'react-router-dom';
import { chakra, Box, Image, Link as ChakraLink, Flex, HStack, VStack } from '@chakra-ui/react';

import { Feature } from '../components';

import { priceData } from '../priceData';

const motorcycleCategory: string = require('../assets/img/motorcycle-cat.webp');
const carCategory: string = require('../assets/img/car-cat.webp');
const dualCategory: string = require('../assets/img/dual-cat.webp');

const Categories = () => {
  const brand: string = '#065D93';

  return (
    <Flex bg='gray.50' p={5} w='full' justifyContent='center' alignItems='center'>
      <Box w='full' pt={6} pb={3}>
        <Flex
          direction={{
            base: 'column',
            md: 'row',
          }}
          justifyContent='center'
          mb={{
            base: 6,
            sm: 0,
          }}>
          {/* A */}
          <Flex
            flex={{
              sm: 1,
              lg: 'initial',
            }}
            w={{
              lg: 2.3 / 7,
            }}
            rounded='lg'
            borderTopRightRadius={0}
            borderBottomLeftRadius='lg'
            bg='white'
            my={6}
            direction='column'>
            <VStack
              spacing={1}
              justifyContent='center'
              p={8}
              textAlign='center'
              w='full'
              shadow='xl'>
              <chakra.span fontSize='3xl' fontWeight='bold'>
                Categoria A
                <chakra.p alignSelf='center' fontSize='3xl' color='gray.600'>
                  {priceData.catA.price}
                </chakra.p>
              </chakra.span>
              <HStack spacing={3}>
                <chakra.span fontWeight='bold' fontSize='4xl' textShadow='1px 0 currentcolor'>
                  {priceData.catA.divided}
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize='sm'
              spacing={8}
              h='full'
              bg='gray.100'
              borderBottomLeftRadius='lg'
              p={3}>
              <VStack spacing={4} w='full' direction='column' alignItems='start'>
                <Image
                  h='90%'
                  w='auto'
                  fit='cover'
                  src={motorcycleCategory}
                  alt=''
                  loading='lazy'
                  m='auto'
                />
                <chakra.p fontSize='2xl' m='auto' textShadow='1px 0 currentcolor'>
                  Liberdade Sobre Duas Rodas
                </chakra.p>
                <Feature>Motocicletas, motonetas e ciclomotores</Feature>
                <Feature>Domine as habilidades de pilotagem</Feature>
                <Feature>Aprenda com instrutores experientes</Feature>
              </VStack>
              <Box w='full' ml={3} display='inline-flex' rounded='md' shadow='md'>
                <ChakraLink
                  as={ReactLink}
                  to='/contato'
                  w='full'
                  display='inline-flex'
                  alignItems='center'
                  justifyContent='center'
                  px={5}
                  py={3}
                  fontSize='md'
                  border='solid transparent'
                  fontWeight='bold'
                  rounded='md'
                  color='white'
                  bg='gray.900'
                  _hover={{
                    bg: `${brand}`,
                  }}
                  cursor='pointer'>
                  Entre Em Contato{' '}
                </ChakraLink>
              </Box>
            </VStack>
          </Flex>
          {/* AB */}
          <Flex
            flex={{
              base: 1,
              lg: 'initial',
            }}
            w={{
              lg: 2.4 / 7,
            }}
            rounded='lg'
            bg='white'
            mt={{
              base: 4,
              sm: -4,
            }}
            shadow='xl'
            zIndex={30}
            direction='column'>
            <VStack
              spacing={1}
              justifyContent='center'
              p={8}
              textAlign='center'
              w='full'
              shadow='xl'>
              <chakra.span fontSize='3xl' fontWeight='bold'>
                Categoria AB
                <chakra.p alignSelf='center' fontSize='3xl' color='gray.600'>
                  {priceData.catAB.price}
                </chakra.p>
              </chakra.span>
              <HStack spacing={3}>
                <chakra.span fontWeight='bold' fontSize='4xl' textShadow='1px 0 currentcolor'>
                  {priceData.catAB.divided}
                </chakra.span>
              </HStack>
            </VStack>
            <VStack fontSize='sm' h='full' roundedBottom='lg' spacing={8} bg='gray.100' p={12}>
              <VStack spacing={4} w='full' direction='column' alignItems='start'>
                <Image
                  h='80%'
                  w='auto'
                  fit='cover'
                  src={dualCategory}
                  alt=''
                  loading='lazy'
                  m='auto'
                />
                <chakra.p fontSize='2xl' m='auto' textShadow='1px 0 currentcolor'>
                  Versatilidade no Trânsito
                </chakra.p>
                <Feature>A melhor escolha com descontos especiais</Feature>
                <Feature>Aprenda a pilotar motos e dirigir carros com segurança</Feature>
                <Feature>Prepare-se para a liberdade de escolha no trânsito</Feature>
              </VStack>
              <Box display='inline-flex' rounded='md' shadow='md' w='full'>
                <ChakraLink
                  as={ReactLink}
                  to='/contato'
                  w='full'
                  display='inline-flex'
                  alignItems='center'
                  justifyContent='center'
                  px={5}
                  py={3}
                  border='solid transparent'
                  fontWeight='bold'
                  fontSize='md'
                  rounded='md'
                  color='white'
                  bg='gray.900'
                  _hover={{
                    bg: `${brand}`,
                  }}
                  cursor='pointer'>
                  Entre Em Contato
                </ChakraLink>
              </Box>
            </VStack>
          </Flex>
          {/* B */}
          <Flex
            flex={{
              sm: 1,
              lg: 'initial',
            }}
            w={{
              lg: 2.3 / 7,
            }}
            roundedTop='lg'
            borderBottomRightRadius='lg'
            borderTopLeftRadius={0}
            bg='white'
            my={6}
            direction='column'>
            <VStack
              spacing={1}
              justifyContent='center'
              p={8}
              textAlign='center'
              w='full'
              shadow='xl'>
              <chakra.span fontSize='3xl' fontWeight='bold'>
                Categoria B
                <chakra.p alignSelf='center' fontSize='3xl' color='gray.600'>
                  {priceData.catB.price}
                </chakra.p>
              </chakra.span>
              <HStack spacing={3}>
                <chakra.span fontWeight='bold' fontSize='4xl' textShadow='1px 0 currentcolor'>
                  {priceData.catB.divided}
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize='sm'
              spacing={8}
              h='full'
              bg='gray.100'
              borderBottomRightRadius='lg'
              p={12}>
              <VStack spacing={4} w='full' direction='column' alignItems='start'>
                <Image
                  height='48%'
                  w='48%'
                  fit='cover'
                  src={carCategory}
                  alt=''
                  loading='lazy'
                  m='auto'
                />
                <chakra.p fontSize='2xl' m='auto' textShadow='1px 0 currentcolor'>
                  Conduza com Confiança
                </chakra.p>
                <Feature>Aprenda as habilidades de direção necessárias</Feature>
                <Feature>Acesso a veículos modernos para sua prática</Feature>
                <Feature>Preparação abrangente para a baliza</Feature>
              </VStack>
              <Box w='full' ml={3} display='inline-flex' rounded='md' shadow='md'>
                <ChakraLink
                  as={ReactLink}
                  to='/contato'
                  w='full'
                  display='inline-flex'
                  alignItems='center'
                  justifyContent='center'
                  px={5}
                  py={3}
                  border='solid transparent'
                  fontWeight='bold'
                  rounded='md'
                  fontSize='md'
                  color='white'
                  bg='gray.900'
                  _hover={{
                    bg: `${brand}`,
                  }}
                  cursor='pointer'>
                  Entre Em Contato
                </ChakraLink>
              </Box>
            </VStack>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Categories;
