import { Box, Flex, Image, SimpleGrid, Text, chakra } from '@chakra-ui/react';

import { Stars } from '../components';

const review_1: string = require('../assets/img/reviews/rev-1.jpeg');
const review_2: string = require('../assets/img/reviews/rev-2.jpeg');
const review_3: string = require('../assets/img/reviews/rev-3.jpeg');
const review_4: string = require('../assets/img/reviews/rev-4.jpeg');
const review_5: string = require('../assets/img/reviews/rev-5.jpeg');
const review_6: string = require('../assets/img/reviews/rev-6.jpeg');
const review_7: string = require('../assets/img/reviews/rev-7.jpeg');
const review_8: string = require('../assets/img/reviews/rev-8.jpeg');
const review_9: string = require('../assets/img/reviews/rev-9.jpeg');
const review_10: string = require('../assets/img/reviews/rev-10.jpeg');
const review_11: string = require('../assets/img/reviews/rev-11.jpeg');
const review_12: string = require('../assets/img/reviews/rev-12.jpeg');
const review_13: string = require('../assets/img/reviews/rev-13.jpeg');
const review_14: string = require('../assets/img/reviews/rev-14.jpeg');
const review_15: string = require('../assets/img/reviews/rev-15.jpeg');
const review_16: string = require('../assets/img/reviews/rev-16.jpeg');
const review_17: string = require('../assets/img/reviews/rev-17.jpeg');
const review_18: string = require('../assets/img/reviews/rev-18.jpeg');
const review_19: string = require('../assets/img/reviews/rev-19.jpeg');
const review_20: string = require('../assets/img/reviews/rev-20.jpeg');

interface ReviewData {
  img?: string;
  description: string;
}

const AllReviews: React.FC = () => {
  const data: ReviewData[] = [
    {
      img: review_1,
      description: 'A Autoescola Lider me ajudou a conquistar minha CNH.',
    },
    {
      img: review_2,
      description: 'Os instrutores da Autoescola Lider são realmente bons no que fazem.',
    },
    {
      img: review_3,
      description: 'Fiquei impressionada com a paciência dos instrutores.',
    },
    { img: review_4, description: 'Eu aprendi a dirigir com confiança graças à Autoescola Lider.' },
    {
      img: review_5,
      description:
        'A Autoescola Lider fez com que o processo de obtenção da habilitação fosse tranquilo.',
    },
    {
      img: review_6,
      description: 'Eu recomendo a todos que querem aprender passar na baliza.',
    },
    {
      img: review_7,
      description: 'As aulas teóricas e práticas da Autoescola Lider são excelentes.',
    },
    {
      img: review_8,
      description: 'Consegui minha habilitação na primeira tentativa.',
    },
    {
      img: review_9,
      description:
        'A Autoescola Lider me transformou em um motorista preparado para qualquer situação.',
    },
    {
      img: review_10,
      description: 'Eles realmente se importam com o sucesso de seus alunos na Autoescola Lider.',
    },
    { img: review_11, description: 'A Autoescola Lider me preparou para enfrentar o trânsito.' },
    {
      img: review_12,
      description: 'Me senti confortável no volante desde o primeiro dia.',
    },
    { img: review_13, description: 'A Autoescola Lider é excelente em todos os aspectos.' },
    {
      img: review_14,
      description: 'Os instrutores são top.',
    },
    { img: review_15, description: 'A equipe da Autoescola Lider é simpática e prestativa.' },
    { img: review_16, description: 'Graças à Autoescola Lider, eu passei na baliza tranquila.' },
    {
      img: review_17,
      description: 'Encontrei amigos na Autoescola Lider que me apoiaram em minha jornada.',
    },
    { img: review_18, description: 'O atendimento na Autoescola Lider é de primeira qualidade.' },
    {
      img: review_19,
      description: 'A Autoescola Lider é confiável e profissional em todos os sentidos.',
    },
    { img: review_20, description: 'Fazer minha CNH aqui foi a melhor escolha que fiz.' },
  ];

  return (
    <Flex w='full' bg='#edf3f8' p={50} alignItems='center' justifyContent='center'>
      <Box py='10px' px='10' bg='gray.100'>
        <Box w='full' px={{ base: 10, md: 4 }} mx='auto' textAlign='center'>
          <Text mb={2} fontSize={{ base: '4xl', md: '5xl' }} fontWeight='bold' lineHeight='tight'>
            Alunos Satisfeitos
          </Text>
          <chakra.p mb={6} fontSize={{ base: 'lg', md: 'xl' }} color='gray.600'>
            Conheça o que nossos alunos têm a dizer sobre sua experiência na Autoescola Lider.
            Nossos depoimentos refletem nosso compromisso com a formação de motoristas seguros e
            confiantes. Saiba como ajudamos outros a alcançar o sucesso na baliza e nas estradas.
          </chakra.p>
        </Box>
        <Box maxW='7xl' py='10' mx='auto'>
          <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} gap={[16, 8]}>
            {data.map((item, index) => (
              <Flex
                key={index}
                bg='#edf3f8'
                p={'5px'}
                w='full'
                alignItems='center'
                justifyContent='center'>
                <Box w='xs' bg='white' shadow='lg' rounded='lg' overflow='hidden' mx='auto'>
                  <Image w='full' h={'300px'} fit='cover' src={item.img} alt='avatar' />

                  <Box py={5} textAlign='center'>
                    <chakra.p display='block'>
                      <Stars starH={'22px'} starW={'22px'} />
                    </chakra.p>
                    <chakra.p px={'5px'} mt={'10px'} fontSize='sm' color='gray.700'>
                      {item.description}
                    </chakra.p>
                  </Box>
                </Box>
              </Flex>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Flex>
  );
};

export default AllReviews;
