import { z } from "zod";

export const responseSchema = z
  .string({
    required_error: "Response is required.",
  })
  .trim()
  .max(200, "Response should be less then 200 characters long.");

export const keywordSchema = z
  .string({
    required_error: "Search-keyword is required.",
  })
  .trim()
  .max(20, "Search-keyword should be less then 20 characters long.");
