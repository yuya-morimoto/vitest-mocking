// テストコード
import { describe, expect, vi, test } from "vitest";

// モック
const mockGetSampleText = async (response: string) => {
  const path = "./getSampleText";
  vi.doUnmock(path);
  vi.doMock(path, () => ({
    getSampleText: () => response,
  }));
  const { getSampleText } = await import(path);
  return {
    getSampleText,
  };
};

// テスト
describe("mock sample", () => {
  test("default mock", async () => {
    const { getSampleText } = await mockGetSampleText("default mock");
    const result = getSampleText();
    expect("default mock").toEqual(result);
  });

  test("updated mock", async () => {
    const { getSampleText } = await mockGetSampleText("updated mock");
    const result = getSampleText();
    expect("updated mock").toEqual(result);
  });
});
