import { Box, Flex, Image, useColorModeValue } from '@chakra-ui/react';

const data = {
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
};

interface ICard1 {
  price: number;
  name: string;
  imageURL: string;
}

interface ICard {
  cardData: ICard1;
}

export const Card = ({ cardData }: ICard) => {
  return (
    <Flex
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      data-testid="card"
    >
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image
          src={cardData.imageURL}
          alt={`Picture of ${cardData.name}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Box alignItems="baseline"></Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
            >
              {cardData.name}
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                £
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
