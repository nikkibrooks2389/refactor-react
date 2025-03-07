import { correctRefactoredCode } from "../challanges/answers";

export const validateCode = (userCode) => {
  return userCode.replace(/\s/g, "") === correctRefactoredCode.replace(/\s/g, "");
};