describe("Тестирование мат. функции", function(){
  
  let msg = "Позитивный тест: x = 1, y = 2";
  it(msg, function(){
      let rez = pow(1);
      expect(rez).toBe(2);
  });
  let msg1 = "Позитивный тест: x = 9, y = 3.111111111111111";
  it(msg1, function(){
      let rez = pow(9);
      expect(rez).toBe(3.111111111111111);
  });
  let msg3 = "Негативный тест: x = 9, y = 3.1";
  it(msg3, function(){
      let rez = pow(9);
      expect(rez).toBe(3.1);
  });
  let msg2 = "Негативный тест: x = 2, y = 0";
  it(msg2, function(){
      let rez = pow(2);
      expect(rez).toBe(NaN);
  });
  
});

