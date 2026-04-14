# Documentación Técnica y Evolutiva (Módulo 6 - 9)

## 1. Patrón de Arquitectura Base

El proyecto de la billetera digital Alke Wallet emplea una arquitectura **Layered MVC (Model-View-Controller)** adaptada para APIs RESTful.

### Separation of Concerns

- **Routing Layer**: Intercepción de peticiones HTTP, validación inicial (Middlewares).
- **Controller Layer**: Ejecución de las reglas de negocio base; actúan como orquestadores.
- **Service Layer / Model**: Conexión con la base de datos a través del ORM (**Sequelize**).

## 2. Tecnologías y Herramientas

| Capa | Tecnología | Fundamento de la Implementación |
| :--- | :--- | :--- |
| **Logic Core** | Node.js (Express) | Rapidez de desarrollo, asíncrona, orientada a I/O intensivo. |
| **Data Layer** | PostgreSQL + Sequelize | Integridad referencial (ACID), ORM para prevención de SQL Injection. |
| **Security** | JWT + BcryptJS + UUID | Autenticación stateless, cifrado asimétrico de accesos y ofuscación de IDs. |
| **DevOps** | Docker + Jest | Sandboxing del entorno, automatización de Unit y E2E Tests. |
| **Integración Cloud** | Google Drive Desktop | Sincronización continua de activos estratégicos y documentación. |
| **AI Strategy** | Gemini Desktop | Auditoría agéntica, optimización de arquitectura y aceleración de desarrollo. |
| **Frontend UI** | HTML5, CSS3, Bootstrap5, jQuery | Sistema de Diseño alineado a una experiencia premium corporativa (Neon Glassmorphism). |

## 3. Secuencia de Implementación y Evolución

### Fase 1: Base (M6)

Definición de endpoints mockeados en RAM. Se estandarizan los status codes de HTTP (200, 201, 400, 401, 500) y se prepara el boilerplate del servidor Express.

### Fase 2: Persistencia y Logs (M7)

Transición a un modelo Relacional (PostgreSQL). Las trazas que antes se imprimían en terminal o en archivos planos fueron migradas a una tabla `audit_logs` con Sequelize, proporcionando una auditoría trazable.

### Fase 3: Seguridad (M8)

Implementación obligatoria de **Helmet** y validaciones exhaustivas. Cada request es sanitizado. El login expide un token JWT firmado de corta expiración mientras que los hashes de contraseña emplean Salts de múltiples rondas computacionales.

### Fase 4: Despliegue (M9)

Dockerización del proyecto mediante un `Dockerfile` y un `docker-compose.yml`. Todos los secretos fueron encapsulados en variables de entorno `.env` que nunca se envían al repositorio en cumplimiento del estándar corporativo.

## 4. Próxima Iteración (Roadmap hacia Microservicios)

Se proyecta desacoplar el módulo de **Pagos (Transactions)** del **Módulo de Usuarios (Auth)** para escalar independientemente ambos servicios en clusters distintos (AWS ECS o K8s), empleando un message broker (ej: RabbitMQ) para la comunicación segura entre ellos.
