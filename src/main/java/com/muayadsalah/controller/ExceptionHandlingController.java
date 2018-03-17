package com.muayadsalah.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.validation.ConstraintViolationException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Created by Muayad on 3/16/2018.
 */

@ControllerAdvice
public class ExceptionHandlingController {
    private static final Logger log = LoggerFactory.getLogger(ExceptionHandlingController.class);

    /**
     * Return {@link HttpStatus#BAD_REQUEST} for {@link ConstraintViolationException}
     *
     * @param constraintViolationException
     * @return
     */
    @ResponseBody
    @ExceptionHandler(ConstraintViolationException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    protected List<Map<String, String>> constraintValidation(ConstraintViolationException constraintViolationException) {
        log.error("Handled constraint violation exception", constraintViolationException);
        return constraintViolationException.getConstraintViolations().stream()
                .map(constraintViolation -> createError(HttpStatus.BAD_REQUEST.value(), "ConstraintViolationException", constraintViolation.getPropertyPath() + ": " + constraintViolation.getMessage()))
                .collect(Collectors.toList());
    }

    /**
     * Return {@link HttpStatus#BAD_REQUEST} for {@link HttpMessageNotReadableException}
     *
     * @param httpMessageNotReadableException
     * @return
     */
    @ResponseBody
    @ExceptionHandler(HttpMessageNotReadableException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    protected Map<String, String> notReadableException(HttpMessageNotReadableException httpMessageNotReadableException) {
        log.error("Handled http message not readable exception", httpMessageNotReadableException);
        return createError(HttpStatus.BAD_REQUEST.value(), "HttpMessageNotReadableException", httpMessageNotReadableException.getLocalizedMessage());
    }

    /**
     * Return {@link HttpStatus#BAD_REQUEST} for {@link IllegalArgumentException}
     *
     * @param illegalArgumentException
     * @return
     */
    @ResponseBody
    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    protected Map<String, String> illegalArgumentException(IllegalArgumentException illegalArgumentException) {
        log.error("Handled illegal argument exception", illegalArgumentException);
        return createError(HttpStatus.BAD_REQUEST.value(), "IllegalArgumentException", illegalArgumentException.getLocalizedMessage());
    }

    /**
     * Return {@link HttpStatus#BAD_REQUEST} for {@link MethodArgumentNotValidException}
     *
     * @param methodArgumentNotValidException exception that happens when a field is not valid
     * @return methodArgumentNotValid details
     */
    @ResponseBody
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    Map<String, String> methodArgumentNotValidExceptionHandler(MethodArgumentNotValidException methodArgumentNotValidException) {
        log.error("Handled method argument not valid exception", methodArgumentNotValidException);
        // TODO can parse it more clearly
        return createError(HttpStatus.BAD_REQUEST.value(), "MethodArgumentNotValidException", methodArgumentNotValidException.getLocalizedMessage());
    }

    protected Map<String, String> createError(int code, String type, String message) {
        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("code", "" + code);
        errorMap.put("type", type);
        errorMap.put("message", message);
        return errorMap;
    }
}
