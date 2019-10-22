import { isUndefined } from "../CheckType";

test("isUndefined returns true for undefined", () => {
    expect(isUndefined(undefined)).toBe(true);
});

test("isUndefined returns false for null", () => {
    expect(isUndefined(null)).toBe(false);
});

test("isUndefined returns false for empty object", () => {
    expect(isUndefined({})).toBe(false);
});
