## SOLID

SOLID: Principios básicos para un diseño de software efectivo
Introducción:

SOLID es un acrónimo que representa cinco principios fundamentales en la programación orientada a objetos (POO) que ayudan a crear software más flexible, mantenible y extensible. Estos principios son:

1. SRP - Principio de responsabilidad única:

Una clase o módulo solo debe tener una única responsabilidad, lo que significa que debe realizar una única tarea específica. Esto facilita la comprensión y el mantenimiento del código.

Ejemplo:

En lugar de tener una clase que gestione tanto la autenticación de usuarios como el almacenamiento de datos, es mejor dividir estas responsabilidades en dos clases separadas.

2. OCP - Principio abierto-cerrado:

Las clases y módulos deben estar abiertos a la extensión, pero cerrados a la modificación. Esto significa que se pueden agregar nuevas funcionalidades sin necesidad de modificar el código existente.

Ejemplo:

En lugar de crear una clase concreta para cada tipo de vehículo, se puede crear una clase abstracta Vehiculo con métodos comunes y luego crear clases hijas para cada tipo específico de vehículo (coche, moto, etc.).

3. LSP - Principio de sustitución de Liskov:

Los objetos de una clase hija deben ser sustituibles por objetos de su clase padre sin que esto afecte al comportamiento del programa.

Ejemplo:

Si una clase Animal define un método comer(), todas las clases hijas que heredan de Animal (como Perro o Gato) deben implementar el método comer() de forma compatible.

4. ISP - Principio de segregación de interfaces:

Las interfaces deben ser pequeñas y específicas, definiendo solo los métodos necesarios para una funcionalidad concreta.

Ejemplo:

En lugar de una única interfaz Usuario que define todos los métodos posibles para un usuario (como iniciarSesion(), comprarProducto(), etc.), es mejor crear interfaces más específicas como Autenticable y Comprador.

5. DIP - Principio de inversión de dependencias:

Las clases no deben depender directamente de otras clases, sino de abstracciones (interfaces). Esto desacopla las clases y las hace más flexibles y reutilizables.

Ejemplo:

En lugar de que una clase Cliente dependa directamente de una clase BaseDatos para obtener datos, se puede inyectar una abstracción como IRepositorio que define los métodos necesarios para acceder a los datos.