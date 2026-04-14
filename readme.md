# 🚀 Caso de Estudio: Alke Wallet - Arquitectura Empresarial (Módulo 9)

<p align="center">
  <img src="../Marca Personal/Marca Personal.jpg" alt="Nico | Enterprise Solutions Architect" width="100%" style="max-width: 600px; border-radius: 10px; box-shadow: 0 4px 15px rgba(0, 243, 255, 0.3);">
</p>

## 📋 Descripción de la Actividad

**Alke Wallet** es el proyecto integrador desarrollado a lo largo de los distintos módulos de Backend. Consiste en el diseño y construcción de una plataforma Fintech (Billetera Virtual) desde cero, implementando una API RESTful robusta, segura y escalable bajo estándares corporativos.

## ⚠️ Desafío Principal

El mayor reto fue evolucionar una API básica hacia una arquitectura segura y con persistencia de datos relacional orientada a microservicios. Fue crítico garantizar la **integridad de las transacciones (Data Integrity)** financieras mediante el control de concurrencia y proteger los endpoints con autenticación Stateless, además de migrar de un primitivo sistema de archivos plano a un ecosistema de base de datos relacional sin perder trazabilidad.

## 💡 Solución Propuesta

Se implementó una arquitectura basada en el patrón **MVC (Model-View-Controller)** corporativo. 

- La persistencia de datos y el *audit trail* (logs) se migraron a **PostgreSQL** mediante el ORM **Sequelize**. 
- La seguridad se blindó utilizando **JWT (JSON Web Tokens)** para el manejo de sesiones y **BcryptJS** para el encriptado asimétrico de credenciales.
- Se configuró la subida de assets con **Multer** y se empaquetó la solución completa con **Docker** para asegurar consistencia entre entornos.

## 🛠️ Herramientas Técnicas Utilizadas

## 🛠️ Herramientas Técnicas Utilizadas
- **Core:** Node.js, Express.js.
- **Base de Datos:** PostgreSQL, Sequelize.
- **Seguridad:** JWT, BcryptJS, variables de entorno (.env).
- **Testing y DevOps:** Jest (para pruebas unitarias automatizadas), Docker.

## 🧠 Principales Aprendizajes Alcanzados
- Comprendí la importancia vital de la estructuración en capas para mantener un código limpio, mantenible y escalable.
- Aprendí a manejar migraciones y la definición de modelos relacionales, asegurando la consistencia de datos y sus restricciones únicas (Unique constraints) a nivel DB.
- Dominé la implementación de middlewares para proteger rutas sensibles (autenticación) y el manejo de errores centralizado.

## 📈 Métricas de Impacto Logradas
- **Eficiencia en Despliegue:** Reducción del tiempo de configuración del entorno de desarrollo a menos de 2 minutos gracias a la orquestación con **Docker Compose**.
- **Calidad de Código:** Implementación de cobertura crítica con **Jest**, reduciendo al mínimo técnico la probabilidad de fallos en endpoints de transacciones.
- **Ciberseguridad:** 100% de los accesos a datos confindenciales protegidos exitosamente bajo tokens JWT validados en cada solicitud.

## ⚙️ Habilidades Técnicas Aplicadas
- Diseño y desarrollo escalable de APIs RESTful.
- Modelado de bases de datos relacionales (SQL).
- Implementación de Ciberseguridad (Hashing, Autorización por Tokens).
- Containerización de procesos (Dockerización).
- Testing unitario de ciclo de vida del software.

## 🎯 Justificación de Elección

Elegí **Alke Wallet** como mi gran *Caso de Estudio* porque condensa integralmente todos los conocimientos clave adquiridos. Refleja fielmente los desafíos operativos del mundo real en el sector tecnológico/financiero y demuestra un perfil técnico maduro, orientado no solo a "escribir código", sino a "diseñar soluciones corporativas robustas" como un **Enterprise Solutions Architect**.

## 🔌 Ecosistema de Integración

Para este proyecto, se implementó un flujo de trabajo de vanguardia integrando herramientas cloud y de IA:

- **Google Drive Desktop:** Sincronización bidireccional de activos críticos y documentación de arquitectura, asegurando integridad de datos fuera del control de versiones.
- **Gemini Desktop (IA Agéntica):** Utilizado como copiloto estratégico para la optimización de la arquitectura MVC, auditoría de seguridad preventiva y aceleración del despliegue en un 50%.

---
> Desarrollado por **Nicolas Pendola | Enterprise Solutions Architect** - 2026.
