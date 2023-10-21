import { Link as ReactLink } from 'react-router-dom';
import { Box, Flex, Icon, Image, Link as ChakraLink, SimpleGrid, chakra } from '@chakra-ui/react';

import { FiExternalLink } from 'react-icons/fi';

const placeholderBg: string = require('../assets/img/orange-bg.jpg');

const Cta = () => {
  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={0}>
      <Flex bg='brand.400'>
        <Image
          src={placeholderBg}
          alt=''
          fit='cover'
          w='full'
          h={{
            base: 64,
            md: 'full',
          }}
          loading='lazy'
        />
      </Flex>
      <Flex
        direction='column'
        alignItems='start'
        justifyContent='center'
        px={{
          base: 4,
          md: 8,
          lg: 20,
        }}
        py={24}
        zIndex={3}>
        <chakra.span
          color='brand.600'
          fontSize='lg'
          textTransform='uppercase'
          fontWeight='extrabold'>
          Seu Sucesso é Nosso Objetivo
        </chakra.span>
        <chakra.h1
          mb={4}
          fontSize={{
            base: '4xl',
            md: '4xl',
            lg: '5xl',
          }}
          fontWeight='bold'
          color='brand.600'
          lineHeight='shorter'
          textShadow='2px 0 currentcolor'>
          Conquiste sua Habilitação
        </chakra.h1>
        <chakra.p
          pr={{
            base: 0,
            lg: 16,
          }}
          mb={4}
          fontSize='lg'
          color='brand.600'
          letterSpacing='wider'>
          A Autoescola Lider oferece horários flexíveis para aulas teóricas e práticas. Adaptamos
          nosso treinamento às suas necessidades, tornando o aprendizado agradável e sem estresse.
          Aprenda a dirigir de forma conveniente e se torne um motorista confiante.
        </chakra.p>
        <Box display='inline-flex' rounded='md' shadow='md'>
          <ChakraLink
            as={ReactLink}
            to='contato'
            mt={2}
            display='inline-flex'
            alignItems='center'
            justifyContent='center'
            px={5}
            py={3}
            border='solid transparent'
            fontWeight='bold'
            w='full'
            rounded='md'
            _light={{
              color: 'black',
            }}
            fontSize='md'
            bg='brand.600'
            _hover={{
              bg: 'brand.700',
            }}>
            Entre em Contato
            <Icon as={FiExternalLink} ml={2} />
          </ChakraLink>
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export default Cta;
