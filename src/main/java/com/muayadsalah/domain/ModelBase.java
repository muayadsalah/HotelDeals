package com.muayadsalah.domain;

import org.apache.commons.lang3.builder.ReflectionToStringBuilder;

/**
 * Created by Muayad on 3/16/2018.
 */

public class ModelBase {
    @Override
    public String toString() {
        return ReflectionToStringBuilder.toString(this);
    }
}
