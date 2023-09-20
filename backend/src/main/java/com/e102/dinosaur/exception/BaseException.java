package com.e102.dinosaur.exception;

import com.e102.dinosaur.utils.ApiError;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class BaseException extends RuntimeException {

    private ApiError apiError;

    private int status;

    private BaseException(ApiError apiError) {
        this.apiError = apiError;
    }

    public BaseException(String message, int status) {
        super(message);
        this.apiError = new ApiError(message,status);
    }

}
