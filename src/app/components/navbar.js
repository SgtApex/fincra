'use client'

import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Image, Text } from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";
import React from "react"
import Link from "next/link";

export default function Nav() {
    return (
        <Box
            w={'full'}
            h={88}
            bg={'#F7F7F7'}
            px={[4, 4, 24, 24]}
            py={22}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Link href={'../pages/home'}>
            <Image src="/logo.png" w={'91px'} height={'auto'} />
            </Link>

            <Text display={['none', 'none', 'flex', 'flex']} color={'#7535FD'} fontWeight={400} fontSize={'Title Large/Size'} lineHeight={'Title Large/Line Height'}>Fincra competence matrix</Text>

            <Box
            w={'153px'}
            p={'12px'}
            borderRadius={'4px'}
            h={'44px'}
            bg={'#4750D5'}
            display={['none', 'none', 'flex', 'flex']}
            cursor={'pointer'}
            justifyContent={'space-between'}
            alignItems={'center'}
            >
                <CiUser color="white" />
                <Text color={'white'}>Menu</Text>
                <ChevronDownIcon color={'white'} />
            </Box>

            {/** mobile */}
            <HamburgerIcon display={['block', 'block', 'none', 'none']} boxSize={8}  />

        </Box>
    );
}