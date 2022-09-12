import {
  minLength,
  hasLetters,
  hasDigits,
  isEmailValid,
  isOldEnough,
} from "@/helpers/validationRules";
import { describe, expect, it } from "vitest";

describe("validationRules", () => {
  describe("minLength", () => {
    it("Returns true if provided value has minimal number of characters or more", () => {
      const validationRule = minLength(3);
      expect(validationRule.isValid("Test")).toBe(true);
    });
    it("Returns false if provided value doesn't have minimal number of characters", () => {
      const validationRule = minLength(3);
      expect(validationRule.isValid("vi")).toBe(false);
    });
  });
  describe("hasLetters", () => {
    it("Returns true if provided value has letters", () => {
      const validationRule = hasLetters();
      expect(validationRule.isValid("Test123")).toBe(true);
    });
    it("Returns false if provided value doesn't have letters", () => {
      const validationRule = hasLetters();
      expect(validationRule.isValid("123")).toBe(false);
    });
  });
  describe("hasDigits", () => {
    it("Returns true if provided value has digits", () => {
      const validationRule = hasDigits();
      expect(validationRule.isValid("Test123")).toBe(true);
    });
    it("Returns false if provided value doesn't have digits", () => {
      const validationRule = hasDigits();
      expect(validationRule.isValid("test")).toBe(false);
    });
  });
  describe("isEmailValid", () => {
    it("Returns true if provided value has valid email structure", () => {
      const validationRule = isEmailValid();
      expect(validationRule.isValid("test@test.com")).toBe(true);
    });
    it("Returns true if provided value doesn't have a valid email structure", () => {
      const validationRule = isEmailValid();
      expect(validationRule.isValid("test.test.com")).toBe(false);
    });
  });
  describe("isOldEnough", () => {
    it("Returns true if provided date is at least x years ago", () => {
      const validationRule = isOldEnough(18);
      expect(validationRule.isValid("2000-01-01")).toBe(true);
    });
    it("Returns false if provided date is not x years ago or earlier", () => {
      const validationRule = isOldEnough(18);
      expect(validationRule.isValid("2022-01-01")).toBe(false);
    });
  });
});
