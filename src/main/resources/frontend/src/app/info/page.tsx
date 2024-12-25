"use client"

import React, {useEffect, useState} from 'react';
import {
    Text,
    Box,
    Center,
    Card,
    CardBody,
    CardHeader,
    Divider,
    Button,
    Image,
    VStack,
    Grid,
    GridItem
} from '@chakra-ui/react'
import {useSearchParams} from "next/navigation";
import {useRouter} from "next/navigation";
import Link from 'next/link'

export default function Info() {
    const getSetById = async (setId: String) => {
        const res = await fetch("http://localhost:9000/get-by-id?id=" + setId)
        return res.json()
    }

    const searchParams = useSearchParams()
    const setId = searchParams.get('set_id')

    const [setData, setSetData] = useState<Lego | undefined>(undefined);

    useEffect(() => {
        if (setId) {
            if (typeof setId === "string") {
                getSetById(setId).then((data) => setSetData(data));
            }
        }
    }, [setId]);

    const router = useRouter()
    const redirectToHome = () => {
        router.push(`/`);
    };


    return (
        <Box backgroundColor={"black"} p={"10"} h={"100%"}>
            <Card variant={"outline"} m={"10"}>
                <CardBody>
                    <CardHeader>
                        <Center>
                            <Text fontSize={"4xl"}>
                                {setData ? setData.name : ""}
                            </Text>
                        </Center>
                    </CardHeader>
                    <Divider/>
                    <Grid templateColumns='repeat(2, 1fr)' gap={6} m={10}>
                        <GridItem>
                            <Center>
                                <Image
                                    src={setData?.imageUrl}
                                    borderRadius='lg'
                                />
                            </Center>
                        </GridItem>
                        <GridItem>
                            <Text fontSize={"4xl"}>
                                Year: {setData ? setData.year : "N/A"}
                            </Text>
                            <Text fontSize={"4xl"}>
                                Theme: {setData ? setData.theme : "N/A"}
                            </Text>
                            <Text fontSize={"4xl"}>
                                Sub-theme: {setData ? setData.subtheme : "N/A"}
                            </Text>
                            <Text fontSize={"4xl"}>
                                Theme Group: {setData ? setData.themeGroup : "N/A"}
                            </Text>
                            <Text fontSize={"4xl"}>
                                Category: {setData ? setData.category : "N/A"}
                            </Text>
                            <Text fontSize={"4xl"}>
                                Pieces: {setData ? setData.pieces : "N/A"}
                            </Text>
                            <Text fontSize={"4xl"}>
                                Minifigs: {setData ? setData.minifigs : "N/A"}
                            </Text>
                            <Text fontSize={"4xl"}>
                                Age Range Minimum: {setData ? setData.ageRangeMin : "N/A"}
                            </Text>
                            <Text fontSize={"4xl"}>
                                US Retail Price: {setData ? setData.usRetailPrice : "N/A"}
                            </Text>
                            <Center>
                                <Link href={setData ? setData.bricksetUrl : ""} >
                                    <Button mr={"1"}>
                                        Brickset
                                    </Button>
                                </Link>
                                <Button colorScheme={"red"} onClick={() => redirectToHome()} ml={"1"}>
                                    Return Home
                                </Button>
                            </Center>
                        </GridItem>
                    </Grid>
                </CardBody>
            </Card>
        </Box>
    )
}