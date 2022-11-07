package com.codestates.global.utils;

import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;

public class Check {
	public static void checkAuthor(String authorEmail, String loginEmail) {
		if (!authorEmail.equals(loginEmail)) {
			throw new BusinessLogicException(ExceptionCode.NO_PERMISSION);
		}
	}
}
