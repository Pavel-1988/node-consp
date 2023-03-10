/*
1. ціле число
2. тру - кш=що високісн, фолс - якщо ні
3. якщо невалідний аргумент - показати інформатиіну помилку

2008 - true - ділится на 4ри без з алишку
2003- false -не ділится на 4
1900 - false - ділиться на 4 та на сто
2000 - true - на 4 на 100 та на 400


41 - error ? year must 42 or more
2008.4 - error? year must be interger
() - error "year be exist"
"2008" - error "year must be number",
null - error "year must be number",
ture - "year must be number",
false - "year must be number",
()=> {} - "year must be number",
{} - "year must be number",
[] - "year must be number",

*/



const isLeapYear = require("./isLeapYear");

describe("test isLeapYear function", () => {
  test("2008 - true", () => {
    const result = isLeapYear(2008);
    expect(result).toBe(true)
  })

  test("2003 - false", () => {
    expect(isLeapYear(2003)).toBe(false)
  })

  test("1900 - false", () => {
    expect(isLeapYear(1900)).toBe(false)
  })

  test("2000 - true", () => {
    expect(isLeapYear(2000)).toBe(true);
  })

  test("41 - error - 'year must 42 or more'", () => {
    expect(() => isLeapYear(41)).toThrow('year must 42 or more')
  });

  test("2008.4 - error 'year must be interger'", () => {
    expect(() => isLeapYear(2008.4 )).toThrow('year must be interger')
  });

  test("() - error 'year be exist'", () => {
    expect(() => isLeapYear()).toThrow('year be exist')
  });

  test("'2008' - error 'year must be number'", () => {
    expect(() => isLeapYear('2008')).toThrow('year must be number')
  });

  test("null - error 'year must be number'", () => {
    expect(() => isLeapYear(null)).toThrow('year must be number')
  });

  test("true - error 'year must be number'", () => {
    expect(() => isLeapYear(true)).toThrow('year must be number')
  });

  test("false - error 'year must be number'", () => {
    expect(() => isLeapYear(false)).toThrow('year must be number')
  });

  test("() =>{} - error 'year must be number'", () => {
    expect(() => isLeapYear(() =>{} )).toThrow('year must be number')
  });

  test("{} - error 'year must be number'", () => {
    expect(() => isLeapYear({})).toThrow('year must be number')
  });

  test("[] - error 'year must be number'", () => {
    expect(() => isLeapYear([])).toThrow('year must be number')
  });
})