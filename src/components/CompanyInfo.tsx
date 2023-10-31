import { Link as ReactLink } from 'react-router-dom';
import { Box, Button, Flex, Image, SimpleGrid, chakra, Link as ChakraLink } from '@chakra-ui/react';

const company: string = require('../assets/img/company.jpg');
const students: string = require('../assets/img/students.jpg');

const CompanyInfo = () => {
  const brand: string = '#f4c827';

  return (
    <Flex bg='gray.50' p={5} w='full' justifyContent='center' alignItems='center'>
      <Box shadow='xl' bg='white' px={8} py={20} mx='auto'>
        <SimpleGrid
          alignItems='center'
          columns={{
            base: 1,
            md: 2,
          }}
          mb={24}
          spacingY={{
            base: 10,
            md: 32,
          }}
          spacingX={{
            base: 10,
            md: 24,
          }}>
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{
                base: '2xl',
                md: '4xl',
              }}
              fontWeight='bold'
              letterSpacing='tight'
              textShadow='0.5px 0 currentcolor'
              textAlign={{
                base: 'center',
                md: 'left',
              }}
              color='gray.900'
              lineHeight={{
                md: 'shorter',
              }}>
              Somos a Lider
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{
                base: 'center',
                sm: 'left',
              }}
              color='gray.800'
              fontSize={{
                md: 'lg',
              }}>
              Nosso compromisso é fornecer serviços de alta qualidade que preparam os motoristas
              para enfrentar com segurança e confiança as complexidades do trânsito. Nossa equipe de
              instrutores altamente qualificados e nossa abordagem profissional garantem que você
              receba a melhor educação de direção possível.
            </chakra.p>
            <ChakraLink as={ReactLink} to='/servicos'>
              <Button
                w={{
                  base: 'full',
                  sm: 'auto',
                }}
                size='lg'
                bg='gray.900'
                _hover={{
                  bg: `${brand}`,
                }}
                color='white'>
                Todos os Serviços
              </Button>
            </ChakraLink>
          </Box>
          <Box w='full' h='full'>
            <Image src={company} alt='' fit='cover' w='full' h={'full'} loading='lazy' />
          </Box>
        </SimpleGrid>

        <SimpleGrid
          alignItems='center'
          columns={{
            base: 1,
            md: 2,
          }}
          flexDirection='column-reverse'
          mb={24}
          spacingY={{
            base: 10,
            md: 32,
          }}
          spacingX={{
            base: 10,
            md: 24,
          }}>
          <Box
            order={{
              base: 'initial',
              md: 2,
            }}>
            <chakra.h2
              mb={4}
              fontSize={{
                base: '2xl',
                md: '4xl',
              }}
              fontWeight='bold'
              letterSpacing='tight'
              textShadow='0.5px 0 currentcolor'
              textAlign={{
                base: 'center',
                md: 'left',
              }}
              color='gray.900'
              lineHeight={{
                md: 'shorter',
              }}>
              Casos de Sucesso: Nossos Alunos Satisfeitos
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{
                base: 'center',
                sm: 'left',
              }}
              color='gray.800'
              fontSize={{
                md: 'lg',
              }}>
              Muitas pessoas, de diversas idades e origens, já conquistaram suas carteiras de
              motorista conosco. Nossa abordagem profissional têm sido fundamentais para ajudar
              esses alunos a alcançarem seu objetivo de dirigir com segurança e responsabilidade.
              Junte-se a nossa lista crescente de motoristas bem-sucedidos e permita-nos fazer parte
              da sua jornada para o sucesso nas estradas.
            </chakra.p>
            <ChakraLink as={ReactLink} to='/avaliacoes'>
              <Button
                w={{
                  base: 'full',
                  sm: 'auto',
                }}
                size='lg'
                bg='gray.900'
                _hover={{
                  bg: `${brand}`,
                }}
                color='white'>
                Testemunhas
              </Button>
            </ChakraLink>
          </Box>
          <Box w='full' h='full'>
            <Image src={students} alt='' fit='cover' w='full' h={'full'} loading='lazy' />
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default CompanyInfo;
