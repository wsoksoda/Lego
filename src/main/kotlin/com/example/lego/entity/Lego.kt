package com.example.lego.entity

import jakarta.persistence.Entity
import jakarta.persistence.Id

@Entity
data class Lego(
    @Id
    val setId: String,
    val name: String,
    val year: Int?,
    val theme: String?,
    val subtheme: String?,
    val themeGroup: String?,
    val category: String?,
    val pieces: Int?,
    val minifigs: Int?,
    val ageRangeMin: Int?,
    val usRetailPrice: Double?,
    val bricksetUrl: String?,
    val thumbnailUrl: String?,
    val imageUrl: String?
)