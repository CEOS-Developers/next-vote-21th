const VALID_REGEX = {
  loginId: /^[a-zA-Z0-9]*$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^[A-Za-z0-9~!@#$%^&*_]*$/,
};

type ValidatorType = [boolean, string];

export const validateLoginId = (loginId: string): ValidatorType => {
  const isValid = VALID_REGEX.loginId.test(loginId);
  return isValid
    ? [true, " "]
    : [false, "영문 소문자, 숫자의 조합만 가능합니다."];
};

export const validateEmail = (email: string): ValidatorType => {
  const isValid = VALID_REGEX.email.test(email);
  return isValid ? [true, " "] : [false, "이메일 형식이 올바르지 않습니다."];
};

export const validatePassword = (password: string): ValidatorType => {
  const isValid = VALID_REGEX.password.test(password);
  return isValid
    ? [true, " "]
    : [
        false,
        "영문, 숫자, 특수문자(~, !, @, #, $, %, ^, &, *, _)의 조합으로 설정해주세요.",
      ];
};
