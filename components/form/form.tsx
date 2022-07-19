import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import { useState } from 'react';

export interface IFormValues {
  name: string;
  email: string;
  password: string;
}

// interface IForm {
//   onSubmit: (formValues: IFormValues) => void;
// }

const Form = ({ onSubmit }) => {
  const [values, setValues] = useState<IFormValues>({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
  });

  const handleSubmit = () => {
    const newErrors = {
      name: false,
      email: false,
      password: false,
    };

    if (values.name.length < 5) {
      newErrors.name = true;
    }

    if (!/@/.test(values.email)) {
      newErrors.email = true;
    }
    if (values.password.length < 12) {
      newErrors.password = true;
    }

    if (!newErrors.name && !newErrors.email && !newErrors.password) {
      onSubmit(values);
    } else {
      setErrors({ ...newErrors });
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: value,
    }));
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      data-testid="form"
    >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          User Profile Edit
        </Heading>

        <FormControl id="userName" isRequired>
          <FormLabel>User name</FormLabel>
          <Input
            placeholder="UserName"
            value={values.name}
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={handleChange}
            name="name"
            aria-errormessage="msgID"
            aria-invalid="true"
          />

          {errors.name && (
            <Box id="msgID" aria-invalid="true">
              name should be atleast 5 characters
            </Box>
          )}
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
            onChange={handleChange}
            name="email"
          />
          {errors.email && (
            <Box id="msgID" aria-invalid="true">
              this is not an email address
            </Box>
          )}
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="password"
            _placeholder={{ color: 'gray.500' }}
            type="password"
            onChange={handleChange}
            name="password"
          />
          {errors.password && (
            <Box id="msgID" aria-invalid="true">
              password should be atleast 12 characters long
            </Box>
          )}
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Form;
