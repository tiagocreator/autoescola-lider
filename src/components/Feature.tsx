import React from 'react';
import { chakra, Icon, Flex } from '@chakra-ui/react';

import { IoCheckmark } from 'react-icons/io5';

interface FeatureProps {
  children: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = (props) => {
  return (
    <Flex alignSelf='start' w='full'>
      <Icon
        boxSize={5}
        mt={1}
        mr={2}
        color='green.500'
        viewBox='0 0 20 20'
        fill='currentColor'
        as={IoCheckmark}
      />
      <chakra.p fontSize='lg' color='gray.800' {...props} />
    </Flex>
  );
};
export default Feature;
