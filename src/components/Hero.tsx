import { Stack, Flex, Text, VStack, useBreakpointValue } from '@chakra-ui/react';

const placeholderBg: string = require('../assets/img/orange-bg.jpg');

interface Props {
  title: string;
}

const Hero: React.FC<Props> = (props) => {
  return (
    <Flex
      w={'full'}
      h={{ base: '30vh', md: '40vh' }}
      backgroundImage={placeholderBg}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        bgGradient={'linear(to-r, blackAlpha.700, blackAlpha.500)'}>
        <Stack margin={'auto'} maxW={'full'} align={'flex-center'}>
          <Text
            color={'white'}
            fontWeight={700}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            {props.title ? props.title : 'Autoescola Lider'}
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;
