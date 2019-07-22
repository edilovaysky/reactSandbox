calculateArea = ({ figure = '', r, h, base, a, b }) => {
  if (figure === 'circle') {
    const s = Math.PI * (r * r);
    return {
      area: s,
      figure: figure,
      input: {
        radius: r,
      },
    };
  }
  if (figure === 'triangle') {
    const s = h * base;
    return {
      area: s,
      figure: figure,
      input: {
        height: h,
        base: base,
      },
    };
  }
  if (figure === 'square') {
    const s = a * b;
    return {
      area: s,
      figure: figure,
      input: {
        side1: a,
        side2: b,
      },
    };
  }
};

let circle = {
  figure: 'circle',
  r: 11,
};
let triangle = {
  figure: 'triangle',
  h: 14,
  base: 5,
};
let square = {
  figure: 'square',
  a: 7,
  b: 24,
};

console.log(calculateArea(circle));
console.log(calculateArea(triangle));
console.log(calculateArea(square));
