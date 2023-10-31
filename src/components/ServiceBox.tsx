import { Link as ReactLink } from 'react-router-dom';
import { Box, Flex, Stack, Text, chakra, Link as ChakraLink, Image } from '@chakra-ui/react';

interface Props {
  title: string;
  price?: number;
  feature: React.ReactNode;
  imgSrc: string;
  imgH: string;
  imgW: string;
}

const brand: string = '#f4c827';

const ServiceBox: React.FC<Props> = (props) => {
  return (
    <Box rounded={['none', 'lg']} shadow={['none', 'md']} bg='white'>
      <Flex direction='column' justify='space-between' p='6' borderBottomWidth='1px'>
        <chakra.p mb={1} fontSize='3xl' fontWeight='semibold' color='gray.900'>
          {props.title}
        </chakra.p>
        <Text mb={2} fontSize='2xl' fontWeight={'bold'} color='gray.800' lineHeight='tight'>
          {props.price && (
            <chakra.span fontSize='2xl' fontWeight='medium' color='gray.600'>
              R$:
            </chakra.span>
          )}
          {props.price ? (
            `${props.price}`
          ) : (
            <chakra.span fontWeight='medium' color='gray.600'>
              Entre em Contato
            </chakra.span>
          )}
          {props.price && (
            <chakra.span fontSize='xl' fontWeight='medium' color='gray.600'>
              ,00
            </chakra.span>
          )}
        </Text>
        <ChakraLink
          as={ReactLink}
          to='/contato'
          w={{ base: 'full', md: 'auto' }}
          display='inline-flex'
          alignItems='center'
          justifyContent='center'
          px={5}
          py={3}
          border='solid transparent'
          fontWeight='bold'
          rounded='md'
          shadow='md'
          bg='gray.900'
          color='white'
          _hover={{
            bg: `${brand}`,
          }}>
          Saiba Mais
        </ChakraLink>
      </Flex>
      <Stack
        direction='column'
        p='6'
        spacing='1'
        flexGrow='1'
        w={'full'}
        alignItems={'start'}
        maxW={'301px'}>
        <Image
          h={props.imgH}
          w={props.imgW}
          fit='cover'
          src={props.imgSrc}
          alt=''
          loading='lazy'
          m='auto'
        />
        {props.feature}
      </Stack>
    </Box>
  );
};

export default ServiceBox;
