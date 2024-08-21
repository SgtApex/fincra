'use client'
import Nav from "@/app/components/navbar";
import { ArrowForwardIcon, CheckIcon, ChevronRightIcon, StarIcon } from "@chakra-ui/icons";
import { Box, VStack, Heading, Text, Divider, Progress } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Box m={0} p={0}>
      <Nav />

      <Box w={'full'} px={'24px'}>
        {/** info bar */}
        <Box
          w={'full'}
          h={'92px'}
          bg={'#007AFF26'}
          p={'16px'}
          my={'40px'}
          display={['none', 'none', 'flex', 'flex']}
          gap={'12px'}
          alignItems={'center'}
        >
          {/**name and bio */}
          <Box display={'flex'} flexDirection={'column'} color={'#8E8E93'}>
            <Text fontSize={'24px'}>Product Path</Text>
          </Box>

          <ArrowForwardIcon />

          <Box display={'flex'} flexDirection={'column'} color={'black'}>
            <Text fontSize={'30px'}>Industry Knowledge</Text>
            <Text>Sub header</Text>
          </Box>

          <ArrowForwardIcon />

          <Divider orientation='vertical' borderColor={'black'} />

          <Text fontSize={'12px'} fontWeight={'bolder'}>Last Opened: <br /> 23/08</Text>
        </Box>

        <Box w={'100%'} display={'flex'} flexDirection={['column', 'column', 'row', 'row']} h={'90vh'} justifyContent={'space-between'} gap={'20px'}>
          <Box w={['100%', '100%', '60%', '60%']} display={'flex'} flexDirection={'column'} gap={'16px'}>
            <video
              width="100%"
              height="500px"
              src="/vid1.mp4"
              controls // Add controls for play/pause/volume, etc.
              style={{ borderRadius: '12px' }}
            >
              Your browser does not support the video tag.
            </video>

            <Box display={'flex'} justifyContent={'space-between'}>
              <Box display={'flex'} gap={'16px'} alignItems={'center'}>
                <Text textAlign={'center'} w={'100px'} p={'8px'} bg={'#4750D5'} borderRadius={'20px'} color={'white'}>Audio <CheckIcon /></Text>

                <Text textAlign={'center'} w={'100px'} p={'8px'} bg={'#DEDFF7'} borderRadius={'20px'} color={'purple'}>Video</Text>

                <Text textAlign={'center'} w={'120px'} p={'8px'} bg={'#DF8620'} borderRadius={'20px'} color={'white'}>50 points <StarIcon /></Text>
              </Box>

              <Link href={'../pages/test'}><Text p={'16px'} bg={'#7535FD'} color={'white'} borderRadius={'8px'}>Start Tests <ChevronRightIcon /></Text></Link>
            </Box>
          </Box>

          <Box w={['100%', '100%', '30%', '30%']} bg={'#F2F2F7'} borderRadius={'8px'} p={'16px'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'12px'} h={'340px'}>
            <Text>Your Lesson Play list</Text>

            {/** general knowledge */}
            <Link href={'./productindustry'} w={'full'}>
              <Box
                w={'full'}
                bg={'#F2F2F7'}
                borderRadius={'8px'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                gap={'16px'}
              >
                <Heading p={'40px'} bg={'black'} borderRadius={'8px'} w={'100%'} textAlign={'center'} color={'white'}>
                  General Knowledge
                </Heading>

                <Box display={'flex'} flexDirection={'column'} gap={'10px'} justifyContent={'flex-start'}>
                  <Text textAlign={'left'}>8 Lessons left</Text>
                  <Box position="relative" w="full">
                    <Progress value={16} size='sm' colorScheme='blue' h={'20px'} />

                    <Text
                      position="absolute"
                      top="0"
                      left="50%"
                      transform="translateX(-50%)"
                      h={'20px'}
                      fontSize="sm"
                      fontWeight="bold"
                      color="black"
                      display="flex"
                      alignItems="center"
                    >
                      16%
                    </Text>
                  </Box>
                  <Text>Bio</Text>
                </Box>
              </Box>
            </Link>
          </Box>

        </Box>
      </Box>
    </Box>
  );
}
