import { chakra, Image } from '@chakra-ui/react';
import React from 'react';

const star: string = require('../assets/img/star.png');

interface Props {
  starW: string;
  starH: string;
}

const Stars: React.FC<Props> = (props) => {
  return (
    <chakra.span
      display='flex'
      justifyContent='center'
      alignItems='center'
      margin='auto'
      gap={'2px'}>
      <Image src={star} alt='' height={props.starH} width={props.starW} aria-hidden='true' />
      <Image src={star} alt='' height={props.starH} width={props.starW} aria-hidden='true' />
      <Image src={star} alt='' height={props.starH} width={props.starW} aria-hidden='true' />
      <Image src={star} alt='' height={props.starH} width={props.starW} aria-hidden='true' />
      <Image src={star} alt='' height={props.starH} width={props.starW} aria-hidden='true' />
    </chakra.span>
  );
};

export default Stars;
