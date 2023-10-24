import { Link as ReactLink } from 'react-router-dom';
import {
  Box,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  chakra,
  Link as ChakraLink,
  Image,
} from '@chakra-ui/react';
import { Feature } from '../components';

const motorcycleCategory: string = require('../assets/img/motorcycle-cat.png');
const carCategory: string = require('../assets/img/car-cat.png');
const dualCategory: string = require('../assets/img/dual-cat.png');
const addCategory: string = require('../assets/img/add-cat.png');
const privateLessons: string = require('../assets/img/private-lessons.png');
const recycle: string = require('../assets/img/recycle.png');

interface Props {
  title: string;
  price?: number;
  feature: React.ReactNode;
  imgSrc: string;
  imgH: string;
  imgW: string;
}

const ServiceBox: React.FC<Props> = (props) => {
  return (
    <Box rounded={['none', 'lg']} shadow={['none', 'md']} bg='white'>
      <Flex
        direction='column'
        justify='space-between'
        p='6'
        borderBottomWidth='1px'
        color='gray.200'>
        <chakra.p mb={1} fontSize='3xl' fontWeight='semibold' color='gray.900'>
          {props.title}
        </chakra.p>
        <Text mb={2} fontSize='2xl' fontWeight={'bold'} color='gray.800' lineHeight='tight'>
          {props.price && (
            <chakra.span fontSize='2xl' fontWeight='medium' color='gray.600'>
              R$:
            </chakra.span>
          )}
          {props.price ? `${props.price}` : 'Entre em Contato'}
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
          _light={{
            color: 'black',
          }}
          bg='brand.600'
          _hover={{
            bg: 'brand.700',
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

const AllServices = () => {
  return (
    <Flex w='full' bg='#edf3f8' p={50} alignItems='center' justifyContent='center'>
      <Box py='40px' px='10' bg='gray.100'>
        <Box w='full' px={{ base: 10, md: 4 }} mx='auto' textAlign='center'>
          <Text mb={2} fontSize={{ base: '4xl', md: '5xl' }} fontWeight='bold' lineHeight='tight'>
            Todos os Nossos Serviços
          </Text>
          <chakra.p mb={6} fontSize={{ base: 'lg', md: 'xl' }} color='gray.600'>
            Entre em Contato Agora e Saiba Mais
          </chakra.p>
        </Box>
        <Box maxW='7xl' py='10' mx='auto'>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={[16, 8]}>
            <ServiceBox
              title={'Categoria A'}
              price={1200}
              feature={
                <>
                  <Feature children={'Motos, motonetas e triciclos '} />
                </>
              }
              imgSrc={motorcycleCategory}
              imgH={'90%'}
              imgW={'auto'}
            />

            <ServiceBox
              title={'Categoria B'}
              price={1500}
              feature={
                <>
                  <Feature
                    children={
                      'Veículos de passageiros com até 8 lugares, e com peso total inferior a 3.500 kg'
                    }
                  />
                </>
              }
              imgSrc={carCategory}
              imgH={'90%'}
              imgW={'auto'}
            />

            <ServiceBox
              title={'Categoria AB'}
              price={1800}
              feature={
                <>
                  <Feature children={'Versatilidade no Trânsito'} />
                </>
              }
              imgSrc={dualCategory}
              imgH={'90%'}
              imgW={'auto'}
            />

            <ServiceBox
              title={'Adição de Categoria'}
              feature={
                <>
                  <Feature
                    children={
                      'Para motoristas que já possuem CNH e desejam adicionar outra categoria'
                    }
                  />
                </>
              }
              imgSrc={addCategory}
              imgH={'90%'}
              imgW={'auto'}
            />

            <ServiceBox
              title={'Aulas Particulares'}
              feature={
                <>
                  <Feature children={'Para motoristas habilitados'} />
                  <Feature children={'Para iniciantes se sentirem mais preparados'} />
                </>
              }
              imgSrc={privateLessons}
              imgH={'90%'}
              imgW={'auto'}
            />

            <ServiceBox
              title={'Reciclagem'}
              feature={
                <>
                  <Feature children={'Reabilitação e recuperação de CHN'} />
                </>
              }
              imgSrc={recycle}
              imgH={'90%'}
              imgW={'auto'}
            />
          </SimpleGrid>
        </Box>
      </Box>
    </Flex>
  );
};

export default AllServices;
