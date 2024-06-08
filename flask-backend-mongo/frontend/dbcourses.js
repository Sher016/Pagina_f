const courses = [
    {
      "id": "1",
      "descripcion": "En este curso, te embarcarás en un viaje de descubrimiento a través de los principios esenciales de las matemáticas. Desde la aritmética básica hasta la geometría y el álgebra, explorarás conceptos clave de manera interactiva y dinámica.",
      "shortDescription": "Curso enfocado en la enseñanza de los principios básicos de las matemáticas y sus aplicaciones.",
      "nombre": "Matemáticas",
      "intesidad_h": "6 horas semanales",
      "Duracion": "12 semanas",
      "Precio": "$ 22.000",
      "Profesor": "Andres Carrillo",
      "profileImage": "https://raw.githubusercontent.com/Sher016/web_1/main/src/assets/images/logo_math.png"
      
    },
    {
      "id": "2",
      "descripcion": "¡Bienvenido al curso virtual de Química! En este emocionante viaje, explorarás los fundamentos de la química, desde la estructura atómica hasta las reacciones químicas. A través de lecciones interactivas, laboratorios virtuales y ejercicios prácticos, adquirirás una comprensión profunda de cómo interactúan las sustancias y cómo podemos manipularlas para resolver problemas y mejorar nuestra comprensión del mundo que nos rodea. ¡Prepárate para descubrir la ciencia que está detrás de todo lo que nos rodea!",
      "shortDescription": "Curso enfocado en la enseñanza de los principios básicos de la química y sus aplicaciones en el mundo real mediante laboratorios prácticos.",
      "nombre": "Química",
      "intesidad_h": "5 horas semanales",
      "Duracion": "10 semanas",
      "Precio": "$ 20.000",
      "Profesor": "Dra. María García",
      "profileImage": "https://raw.githubusercontent.com/Sher016/web_1/main/src/assets/images/quimica.png"
    },
    {
      "id": "3",
      "descripcion": "Descubre los secretos mejor guardados del mundo natural con nuestro curso virtual de Biología. Sumérgete en el estudio de la vida en todas sus formas, desde las estructuras microscópicas de las células hasta los intrincados ecosistemas que sustentan la biodiversidad del planeta. A través de una combinación de fascinantes lecciones, exploraciones prácticas y emocionantes descubrimientos, este curso te llevará en un viaje único de comprensión y asombro por la increíble diversidad y complejidad de la vida en la Tierra.",
      "shortDescription": "Curso enfocado en la enseñanza de los principios básicos de la biología, desde lo microscópico hasta lo macroscópico.",
      "nombre": "Biología",
      "intesidad_h": "6 horas semanales",
      "Duracion": "12 semanas",
      "Precio": "$ 20.000",
      "Profesor": "Dr. Javier López",
      "profileImage": "https://raw.githubusercontent.com/Sher016/web_1/main/src/assets/images/biologia.jpg"
  
    },
    {
      "id": "4",
      "descripcion": " Este curso virtual te invita a explorar los misterios del universo y las leyes fundamentales que rigen el comportamiento de la materia y la energía. Desde la mecánica clásica hasta la física cuántica, te sumergirás en un viaje de descubrimiento a través de los principios físicos que explican el funcionamiento del cosmos y del mundo que nos rodea. A través de lecciones interactivas, experimentos virtuales y ejercicios prácticos, desarrollarás una comprensión profunda de los fenómenos físicos y su aplicación en la vida cotidiana y en la investigación científica.",
      "shortDescription": "Curso enfocado en la enseñanza de los principios de la física clásica y moderna, con aplicaciones prácticas que pondrán a volar tu imaginación.",
      "nombre": "Física",
      "intesidad_h": "8 horas semanales",
      "Duracion": "12 semanas",
      "Precio": "$ 25.000",
      "Profesor": "Andres fernandez",
      "profileImage": "https://raw.githubusercontent.com/Sher016/web_1/main/src/assets/images/fisica.webp"
    },
    {
      "id": "5",
      "descripcion": "Sumérgete en el emocionante campo de la electrónica con nuestro curso virtual. Desde los circuitos básicos hasta los dispositivos electrónicos más avanzados, este curso te llevará en un viaje de descubrimiento a través de los principios fundamentales y las aplicaciones prácticas de la electrónica. Con lecciones interactivas, laboratorios virtuales y proyectos emocionantes, explorarás cómo la electrónica está transformando nuestro mundo y definiendo el futuro de la tecnología.",
      "shortDescription": "Curso enfocado en la enseñanza de la electrónica gracias a la simulación y la práctica en conjunto con elementos caseros muy fáciles de conseguir.",
      "nombre": "Electrónica",
      "intesidad_h": "8 horas semanales",
      "Duracion": "14 semanas",
      "Precio": "$ 30.000",
      "Profesor": "Marina López",
      "profileImage": "https://i.pinimg.com/originals/9e/8d/a3/9e8da3bdaa585b7acbf1a1ef691c72c8.jpg"
    }
  ]

export function getCourse(courseId) {
  return courses.find(({ id }) => courseId === id);
}

export function getCourses() {
  return courses;
}