package com.example.lego.service

import com.example.lego.entity.Lego
import com.example.lego.repository.LegoRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Sort
import org.springframework.stereotype.Service

@Service
class LegoService(private val legoRepository: LegoRepository) {
    fun getAll(pageNumber: Int?, pageSize: Int?, sort: String?): Page<Lego> {
        val pageRequest = PageRequest.of(pageNumber ?: 0, pageSize ?: 10, Sort.by(sort ?: "setId"))
        return legoRepository.findAll(pageRequest)
    }

    fun getById(id: String): Lego? {
        return legoRepository.findBySetId(id)
    }
}