package com.example.lego.repository

import com.example.lego.entity.Lego
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface LegoRepository : PagingAndSortingRepository<Lego, UUID> {
    fun findBySetId(id: String): Lego?
}