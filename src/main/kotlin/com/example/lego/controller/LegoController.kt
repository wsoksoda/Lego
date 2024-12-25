package com.example.lego.controller


import com.example.lego.entity.Lego
import com.example.lego.service.LegoService
import org.springframework.data.domain.Page
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["*"], maxAge = 3600)
@RestController
class LegoController(private val legoService: LegoService) {
    @GetMapping("get-all")
    fun getAll(@RequestParam pageNumber: Int?, @RequestParam pageSize: Int?, @RequestParam sort: String?): Page<Lego> {
        return legoService.getAll(
            pageNumber = pageNumber,
            pageSize = pageSize,
            sort = sort
        )
    }

    @GetMapping("get-by-id")
    fun getById(@RequestParam id: String): Lego? {
        return legoService.getById(id)
    }
}