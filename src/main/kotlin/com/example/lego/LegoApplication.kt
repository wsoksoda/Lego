package com.example.lego

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class LegoApplication

fun main(args: Array<String>) {
	runApplication<LegoApplication>(*args)
}
