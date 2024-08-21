import { Box, VStack, Heading, Text, Image } from "@chakra-ui/react";
import Nav from "./components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Image src="/logo.png" width={'200px'} h={'auto'} m={'auto'} />
    <Box
      display={'flex'}
      bg={'black'}
      color={'white'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      gap={'40px'}
      h={'100vh'}
    >
      
      <Link href={'./auth/login'}><Heading textDecoration={'underline'}>Login</Heading></Link>
      <Text>or</Text>
      <Link href={'./auth/signup'}><Heading textDecoration={'underline'}>Sign Up</Heading></Link>
    </Box>
    </>
  );
}
