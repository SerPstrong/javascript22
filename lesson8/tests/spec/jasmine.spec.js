describe('Соответствие значений', () => {
  it('Проверка переменной a на значение 10', () => {
    let a = 10; // то что проверяем
    expect(a).toBe(10);
  });
});


describe('Дополнительные функции', () => {
  it('Сравнение объектов', () => {
    const myGo = () => {};
    const user1 = {
      name: 'John',
      age: 30,
      go: myGo,
    };

    const user2 = {
      name: 'John',
      age: 30,
      go: myGo,
    };

    expect(user1).toEqual(user2);
    // expect(user1).not.toEqual(user2);
  });

  it('regexp', () => {
    let str = 'Test aBcd jasmine';

    expect(str).toMatch(/abcd/i);
    // expect(str).not.toMatch(/abcd/i);
  });

  it('Arrays', () => {
    const arr = ['black', 'white'];
    const arr2 = ['white', 'black'];

    expect(arr).toEqual(arr2);
    // expect(arr).toContain('red');
  });
});

// describe('Соответствие значений', () => {
//   it('Проверка а на значение 10', async () => {
//     const result = await fetch(); // что-то асинхнонное
//     let a = 10; // То что проверяем
//     expect(a).toBe(10);
//   });
// });

// для всего есть .not.
// expect().toBeNull();
// expect().not.toBeNull(); // Не null
// expect().toBeUndefined();
// expect().toBeTrusty();
// expect().toBeFalsy();
// expect().toBeNaN();
// expect().toBeGreaterThan();
// expect().toBeGreaterThanOrEqual();
// expect().toBeLessThanOrEqual();
// expect().toBeLessThan();
// expect().toBeCloseTo();
