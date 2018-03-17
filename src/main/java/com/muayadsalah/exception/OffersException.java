package com.muayadsalah.exception;

/**
 * Created by Muayad on 3/16/2018.
 */
public class OffersException extends RuntimeException {
    private Throwable actualException;

    public OffersException(String message) {
        super(message);
    }

    public OffersException(Throwable actualException) {
        super("Exception of type " + actualException.getClass().getSimpleName() + " while parsing response from Expedia API");
        this.actualException = actualException;
    }

    @Override
    public String getLocalizedMessage() {
        if (actualException != null)
            return actualException.getLocalizedMessage();
        else
            return super.getLocalizedMessage();
    }

    @Override
    public String getMessage() {
        if (actualException != null)
            return actualException.getMessage();
        else
            return super.getMessage();
    }
}
