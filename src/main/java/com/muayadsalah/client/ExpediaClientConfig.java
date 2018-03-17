package com.muayadsalah.client;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import feign.Logger;
/**
 * Created by Muayad on 3/17/2018.
 */

@Configuration
public class ExpediaClientConfig {
    @Bean
    Logger.Level feignLoggerLevel() {
        return Logger.Level.FULL;
    }
}
