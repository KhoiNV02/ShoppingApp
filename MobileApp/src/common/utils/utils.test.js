import VNDFormat from './formatCurrency/VNDFormat';

describe('format current', () => {
  it('Should return a string number with vnd format if the input is a natural number greater than or equal to 999 and less than or equal to 0', () => {
    expect(VNDFormat(0)).toBe('0đ');

    expect(VNDFormat(1)).toBe('1đ');

    expect(VNDFormat(998)).toBe('998đ');

    expect(VNDFormat(999)).toBe('999đ');
  });

  it('Should return a string number with vnd format if the input is a natural number greater than 999', () => {
    expect(VNDFormat(1000)).toBe('1.000đ');

    expect(VNDFormat(10000)).toBe('10.000đ');

    expect(VNDFormat(1000000)).toBe('1.000.000đ');
  });

  it('Should return a string number with vnd format if the input is a string number after type coercion it is still a number greater than 0', () => {
    expect(VNDFormat('0.5')).toBe('1đ');

    expect(VNDFormat('5000')).toBe('5.000đ');

    expect(VNDFormat('999.5')).toBe('1.000đ');
  });

  it('should return a string number with vnd format if the input is a decimal number greater than 0', () => {
    expect(VNDFormat(1000.5)).toBe('1.001đ');

    expect(VNDFormat(999.5)).toBe('1.000đ');

    expect(VNDFormat(1000.2)).toBe('1.000đ');
  });

  it('Should return "Wrong Input" if the input is an object, array, function, empty string, null, NaN or a string number after type coercion is a number less than 0', () => {
    expect(VNDFormat({})).toBe('Wrong Input');

    expect(VNDFormat(() => {})).toBe('Wrong Input');

    expect(VNDFormat([])).toBe('Wrong Input');

    expect(VNDFormat(null)).toBe('Wrong Input');

    expect(VNDFormat(NaN)).toBe('Wrong Input');

    expect(VNDFormat('')).toBe('Wrong Input');

    expect(VNDFormat('-999.5')).toBe('Wrong Input');
  });
});
