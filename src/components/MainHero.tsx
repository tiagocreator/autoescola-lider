import { Link as ReactLink } from 'react-router-dom';
import { chakra, Box, Image, Icon, Link as ChakraLink } from '@chakra-ui/react';

const mainHeroBg: string = require('../assets/img/main-hero-bg.jpg');

const MainHero = () => {
  const brand: string = '#f4c827';

  return (
    <Box pos='relative' overflow='hidden' bg='white' zIndex={1}>
      <Box maxW='7xl' mx='auto'>
        <Box
          pos='relative'
          pb={{
            base: 8,
            sm: 16,
            md: 20,
            lg: 28,
            xl: 32,
          }}
          maxW={{
            lg: '2xl',
          }}
          w={{
            lg: 'full',
          }}
          zIndex={1}
          bg='white'
          border='solid 1px transparent'>
          <Icon
            display={{
              base: 'none',
              lg: 'block',
            }}
            position='absolute'
            right={0}
            top={0}
            bottom={0}
            h='full'
            w={48}
            color='white'
            transform='translateX(50%)'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'>
            <polygon points='50,0 100,0 50,100 0,100' />
          </Icon>
          <Box
            mx='auto'
            maxW={{
              base: '7xl',
            }}
            px={{
              base: 4,
              sm: 6,
              lg: 8,
            }}
            mt={{
              base: 10,
              sm: 12,
              md: 16,
              lg: 20,
              xl: 28,
            }}>
            <Box
              w='full'
              textAlign={{
                sm: 'center',
                lg: 'left',
              }}
              justifyContent='center'
              alignItems='center'>
              <chakra.h1
                fontSize={{
                  base: '4xl',
                  sm: '5xl',
                  md: '6xl',
                }}
                letterSpacing='tight'
                lineHeight='short'
                fontWeight='extrabold'
                color='gray.900'>
                <chakra.span
                  display={{
                    base: 'block',
                    xl: 'inline',
                  }}>
                  Conquiste agora mesmo a sua{' '}
                </chakra.span>
                <chakra.span
                  display={{
                    base: 'block',
                    xl: 'inline',
                  }}
                  letterSpacing={1.3}
                  color={brand}>
                  habilitação
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{
                  base: 3,
                  sm: 5,
                  md: 5,
                }}
                fontSize={{
                  sm: 'lg',
                  md: 'xl',
                }}
                maxW={{
                  sm: 'xl',
                }}
                mx={{
                  sm: 'auto',
                  lg: 0,
                }}
                color='gray.800'>
                Somos a Autoescola Lider de Colônia Leopoldina, dedicada a oferecer treinamento de
                direção para carro e moto de alta qualidade e preparação para obter sua carteira de
                motorista.
              </chakra.p>
              <Box
                mt={{
                  base: 5,
                  sm: 8,
                }}
                display={{
                  sm: 'flex',
                }}
                justifyContent={{
                  sm: 'center',
                  lg: 'start',
                }}
                fontWeight='bold'>
                <Box rounded='full' shadow='md'>
                  <ChakraLink
                    as={ReactLink}
                    to='/sobre'
                    letterSpacing={1.1}
                    w='full'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    border='solid 1px gray.900'
                    fontSize={{
                      base: 'md',
                      md: 'lg',
                    }}
                    rounded='md'
                    color='gray.900'
                    bg='gray.100'
                    _hover={{
                      color: `${brand}`,
                    }}
                    px={{
                      base: 8,
                      md: 10,
                    }}
                    py={{
                      base: 3,
                      md: 4,
                    }}
                    cursor='pointer'>
                    Saiba Mais
                  </ChakraLink>
                </Box>
                <Box mt={[3, 0]} ml={[null, 3]}>
                  <ChakraLink
                    as={ReactLink}
                    to='/servicos'
                    letterSpacing={1.1}
                    w='full'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    px={{
                      base: 8,
                      md: 10,
                    }}
                    py={{
                      base: 3,
                      md: 4,
                    }}
                    border='solid 1px gray.900'
                    fontSize={{
                      base: 'md',
                      md: 'lg',
                    }}
                    rounded='md'
                    color={'#fff'}
                    bg='gray.900'
                    _hover={{
                      bg: `${brand}`,
                    }}
                    cursor='pointer'>
                    Nossos Serviços
                  </ChakraLink>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position={{
          lg: 'absolute',
        }}
        top={{
          lg: 0,
        }}
        bottom={{
          lg: 0,
        }}
        right={{
          lg: 0,
        }}
        w={{
          lg: '50%',
        }}
        border='solid 1px transparent'>
        <Image
          h={[56, 72, 96, 'full']}
          w='full'
          fit='cover'
          src={mainHeroBg}
          alt=''
          loading='lazy'
        />
      </Box>
    </Box>
  );
};

export default MainHero;
