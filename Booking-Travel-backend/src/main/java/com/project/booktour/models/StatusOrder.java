package com.project.booktour.models;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.STRING)
public enum StatusOrder {
    pending,
    processing,
    shipped,
    delivered,
    cancelled;
}

