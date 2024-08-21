import Nav from "@/app/components/navbar";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      m={0}
      p={0}
    >
      <Nav />

      <Box
        my={'80px'}
        display={'flex'}
        flexDirection={['column', 'column', 'row', 'row']}
        justifyContent={'space-between'}
        alignItems={'center'}
        gap={'40px'}
        w={'full'}
        px={['12px', '12px', '24px', '55px']}
        h={'300px'}
      >
        {/** product path */}
        <Link href={'/pages/sales'}
          w={'400px'}
          h={'165px'}>
          <Box
            w={'full'}
            h={'full'}
            bg={'#F2F2F7'}
            p={'16px'}
            display={'flex'}
            alignItems={'center'}
            borderRadius={'8px'}
            gap={'8px'}
            cursor={'pointer'}
          >
            {/** number and last seen */}
            <Box display={'flex'} flexDirection={'column'} justifyContent={'left'} gap={'8px'}>
              <Text fontSize={'12px'} fontWeight={'bolder'}>Last Opened: 23/08</Text>
              <Box p={'20px'} bg={'black'} w={'92px'} h={'92px'} borderRadius={'8px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Heading fontSize={'28px'} color={'white'}>60</Heading>
                <Text fontSize={'8px'} color={'white'}>Pts</Text>
              </Box>
            </Box>

            {/**name and bio */}
            <Box display={'flex'} flexDirection={'column'} w={'203px'}>
              <Heading fontSize={'30px'} color={'black'}>Product Path</Heading>
              <Text>Bio</Text>
            </Box>
          </Box>
        </Link>

        {/** sales path */}
        <Link href={'/pages/sales'}
          w={'400px'}
          h={'165px'}>
          <Box
            w={'full'}
            h={'full'}
            bg={'lightblue'}
            p={'16px'}
            display={'flex'}
            alignItems={'center'}
            borderRadius={'8px'}
            gap={'8px'}
            cursor={'pointer'}
          >
            {/** number and last seen */}
            <Box display={'flex'} flexDirection={'column'} justifyContent={'left'} gap={'8px'}>
              <Text fontSize={'12px'} fontWeight={'bolder'}>Last Opened: 23/08</Text>
              <Box p={'20px'} bg={'#007AFF'} w={'92px'} h={'92px'} borderRadius={'8px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Heading fontSize={'28px'} color={'white'}>70</Heading>
                <Text fontSize={'8px'} color={'white'}>Pts</Text>
              </Box>
            </Box>

            {/**name and bio */}
            <Box display={'flex'} flexDirection={'column'} w={'203px'}>
              <Heading fontSize={'30px'} color={'black'}>Sales Path</Heading>
              <Text>Bio</Text>
            </Box>
          </Box>
        </Link>

        {/** operations path */}
        <Link href={'/pages/sales'}
          w={'400px'}
          h={'165px'}>
          <Box
            w={'full'}
            h={'full'}
            bg={'#F2F2F7'}
            p={'16px'}
            display={'flex'}
            alignItems={'center'}
            borderRadius={'8px'}
            gap={'8px'}
            cursor={'pointer'}
          >
            {/** number and last seen */}
            <Box display={'flex'} flexDirection={'column'} justifyContent={'left'} gap={'8px'}>
              <Text fontSize={'12px'} fontWeight={'bolder'}>Last Opened: 23/08</Text>
              <Box p={'20px'} bg={'purple'} w={'92px'} h={'92px'} borderRadius={'8px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Heading fontSize={'28px'} color={'white'}>100</Heading>
                <Text fontSize={'8px'} color={'white'}>Pts</Text>
              </Box>
            </Box>

            {/**name and bio */}
            <Box display={'flex'} flexDirection={'column'} w={'203px'}>
              <Heading fontSize={'26px'} color={'black'}>Operations Path</Heading>
              <Text>Bio</Text>
            </Box>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}
