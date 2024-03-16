import { Link as ReactLink } from 'react-router-dom';
import { Box, Flex, Icon, Image, Link as ChakraLink, SimpleGrid, chakra } from '@chakra-ui/react';

import { FiExternalLink } from 'react-icons/fi';

const ctaBg: string = require('../assets/img/cta-bg.webp');

const Cta = () => {
  const brand: string = '#f4c827';

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={0}>
      <Flex bg='white'>
        <Image
          src={ctaBg}
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
          color='gray.800'
          fontSize='lg'
          textTransform='uppercase'
          fontWeight='extrabold'>
          Destaque em Formação de Condutores
        </chakra.span>
        <chakra.h1
          mb={4}
          fontSize={{
            base: '4xl',
            md: '4xl',
            lg: '5xl',
          }}
          fontWeight='bold'
          color='gray.900'
          lineHeight='shorter'
          textShadow='2px 0 currentcolor'>
          Somos a Número 1
        </chakra.h1>
        <chakra.p
          pr={{
            base: 0,
            lg: 16,
          }}
          mb={4}
          fontSize={{
            sm: 'lg',
            md: 'xl',
          }}
          color='gray.800'>
          A Autoescola Lider oferece horários flexíveis para aulas teóricas e práticas. Adaptamos
          nosso treinamento às suas necessidades, tornando o aprendizado agradável e sem estresse.
          Aprenda a dirigir de forma conveniente, vença a baliza e se torne um motorista confiante.
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
            fontSize='md'
            color='gray.900'
            bg='gray.100'
            _hover={{
              color: `${brand}`,
            }}>
            Converse Conosco
            <Icon as={FiExternalLink} ml={2} />
          </ChakraLink>
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export default Cta;
