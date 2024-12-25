"use client"

import React, {useEffect, useState} from "react";
import {
    Grid,
    Card,
    CardBody,
    Text,
    Center,
    Image,
    Button,
    Box,
    IconButton
} from '@chakra-ui/react';
import {ArrowBackIcon, ArrowForwardIcon} from '@chakra-ui/icons'
import Link from 'next/link'

export default function LegoList() {

    const getAllLegos = async (pageNumber: Number, pageSize: Number, sort: String) => {
        const res = await fetch('http://localhost:9000/get-all?pageNumber=' + pageNumber + '&pageSize=' + pageSize);
        return res.json();
    }

    const [legoData, setLegoData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(12);

    useEffect(() => {
        getAllLegos(pageNumber, pageSize, "").then((data) => {
            setLegoData(data.content)
            setPageNumber(data.pageable.pageNumber)
            setPageSize(data.pageable.pageSize)
        });
    }, [pageNumber]);

    return (
        <Box>
            <Grid templateColumns='repeat(4, 1fr)' gap={6} m={10}>
                {legoData.map((lego: Lego) => (
                    <Card>
                        <CardBody>
                            <Center>
                                <Text key={lego.setId}>
                                    {lego.name}
                                </Text>
                            </Center>
                            <Center mt={"2"}>
                                <Image
                                    src={lego.thumbnailUrl}
                                    borderRadius='lg'
                                />
                            </Center>
                            <Center mt={"4"}>
                                <Link href={"/info?set_id=" + lego.setId}>
                                    <Button>
                                        Info
                                    </Button>
                                </Link>
                            </Center>
                        </CardBody>
                    </Card>
                ))}
            </Grid>
            <Center>
                <IconButton m={"1"} variant={"ghost"} aria-label='Arrow Back' icon={<ArrowBackIcon/>}/>
                <Button m={"1"} variant={"ghost"}>{}</Button>
                <Button m={"1"} variant={"solid"}>{pageNumber + 1}</Button>
                <Button m={"1"} variant={"ghost"}>{}</Button>
                <IconButton m={"1"}  variant={"ghost"} aria-label='Arrow Forward' icon={<ArrowForwardIcon/>}/>
            </Center>
        </Box>
    )
}