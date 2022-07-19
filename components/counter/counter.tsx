
import { useState } from 'react';

import { Box, Button, Heading, HStack, Input } from '@chakra-ui/react';

interface ICounter {
  defaultValue:number
}

const Counter = ({defaultValue}:ICounter) => {
  const [value,setValue] = useState(defaultValue)

  const handleDecrement = () => {
      if(0 >= value){
        setValue(0)
      }
      else{
        setValue(value - 1)
      }
  }

  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)

    if(typeof value === "number" &&  !Number.isNaN(value) ){
      setValue(value)
    }
    else{
      setValue(0)
    }
  }

  return (
    <div data-testid="Counter">

        <Box display="flex" alignItems="center" flexDirection="column" mt="10" >
        <Heading  mb="5">testing a counter</Heading>
        <HStack  alignSelf="center">
        <Button onClick={handleDecrement}>-</Button>
        <div>
        <Input  data-testid="inputValue" onChange={handleInput} value={value} />
        </div>
        <Button onClick={() => setValue(value + 1)}>+</Button>
        </HStack>
        </Box>


    </div>
  );
}

export default Counter

