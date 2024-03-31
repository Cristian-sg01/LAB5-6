(() => {
  // EX-1: Calcular operación con suma y multiplicación
  
  function calculateSum(a: number, b: number): number {
    return a + b;
  }
  
  function calculateOperation1(a: number, b: number, c: number): number {
    const sumResult = calculateSum(a, b);
    const multiplicationResult = sumResult * c;
    return multiplicationResult;
  }
  
  function calculateOperation2(x: number, y: number, z: number): number {
    const sumResult = calculateSum(x, y);
    const multiplicationResult = sumResult * z;
    return multiplicationResult;
  }
  
  // EX-2: Calcular área de figuras geométricas
  
  function calculateArea(base: number, height: number): number {
    return base * height;
  }
  
  function calculateRectangleArea(length: number, width: number): number {
    return calculateArea(length, width);
  }
  
  function calculateCircleArea(radius: number): number {
    return calculateArea(radius, radius) * Math.PI; // Adaptando la base y altura para el círculo
  }
  
  // EX-3: Validación de email y username
  
  function validateEmail(email: string): boolean {
    // ...some code for validate here
    return false;
  }
  
  function validateUsername(username: string): boolean {
    // ...some code for validate here
    return false;
  }
  
  // Ejemplo de uso
  
  console.log(calculateOperation1(1, 2, 3)); // 9
  console.log(calculateOperation2(4, 5, 6)); // 30
  console.log(calculateRectangleArea(10, 5)); // 50
  console.log(calculateCircleArea(5)); // 78.5
  console.log(validateEmail("correo@ejemplo.com")); // true o false
  console.log(validateUsername("usuarioEjemplo")); // true o false
  })();
  