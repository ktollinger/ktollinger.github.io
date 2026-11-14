---
title: Kamil Tollinger
description: Senior Backend Software Engineer · Technical Analyst
address: Praha, Czech Republic, CZ
phone: +420 602 278 282
email: kamil.tollinger@gmail.com
linkedin: https://www.linkedin.com/in/ktollinger/
github: https://github.com/ktollinger
lang: en
---

<div class="cv-layout">
  <div class="cv-layout__main">

## Profile

Senior software engineer with over 20 years of experience building critical business
systems, primarily in the banking and financial sector. Focused on server‑side
development in Java and Kotlin and microservices architecture, with a strong overlap into
analysis, software architecture and quality assurance. Actively using modern AI
tools to increase development efficiency and code quality.

- 20+ years in banking and e-banking: digital document signing, payment systems, client pricing
- Hands-on cryptography background: implemented DES/RSA encryption and signing libraries; PKI, XML Signature, PKCS#7/#12
- Production experience with a cloud-native stack: OpenShift/Kubernetes, GitOps (ArgoCD), Kafka, PostgreSQL
- Team lead and architect roles on banking and monitoring products

## Employment & Contract History

- **2021–2026 | Senior Backend Software Engineer (Contractor / B2B)** – Komerční banka, a.s., Prague
- **2012–2021 | Senior Java Developer & Team Lead (Contractor / B2B)** – Česká spořitelna, a.s., Prague
- **2007–2016 | Agile Team Leader, Architect & Developer (Full-time Employee)** – StringData, s.r.o., Prague
- **1994–2007 | Software Engineer & Team Lead** – Banking systems & cryptography (OfficeLine)

## Selected projects

### MultiSigning, Komerční banka, a.s. (2021–2026)

MultiSigning is a large microservices-based application responsible for orchestrating the
signing of documents. A client system creates a signing case, registers documents and the
application then guides all participants through the necessary steps up to final signature.

- Developed microservices (Java, Spring Boot) using an architecture based on **Domain-Driven Design (DDD)**
- Implemented backend layers: **Business Components (BC)** connected to PostgreSQL, Redis, and Kafka, alongside a **Backend for Frontend (BFF)** integrating with an Angular SPA
- Reviewed and contributed to internal shared/core libraries in **Kotlin** (code reviews, RFCs, API design) and integrated them into **Java 25 / Spring Boot** microservices
- Secured API endpoints with **JWT tokens** (technical and user) and **OAuth Proxy** integration
- Managed infrastructure and containers in an **OpenShift / Kubernetes (PaaS)** environment using **Helm/YAML** manifests
- Maintained **CI/CD pipelines (Jenkins, Bitbucket)**, deployed via **GitOps (ArgoCD)** and troubleshot workloads via the K8s dashboard
- Applied **Trunk Based Development**, including automatic provisioning of dynamic *Review environments* in K8s for every Pull Request
- Designed and implemented automated *post-deployment* regression tests (TypeScript / Mocha)

### Personal finance web application (side project, 2023–2026)

In parallel to my full‑time job I am developing a small web application for personal
accounting and budget planning. The application has several screens and works with about
ten tables in the database. Currently undergoing progressive backend refactoring and migration from Java to Kotlin.

- Role: main author and solution architect
- Backend: PostgreSQL, Java 25 → progressive migration to Kotlin, Quarkus 3, REST API, JWT authentication
- Frontend: TypeScript, Vue 3, Pinia
- Documentation: VitePress
- Goal: learn modern technologies (transitioning to Kotlin, Quarkus) and build a practical tool for managing personal finances

### Financial planner – Android application (2024)

A simple Android application with several screens for monthly financial planning.

- Role: main author and solution architect
- Technologies: Android SDK 14, Kotlin 2.0, Room, Jetpack Compose
- Goal: learn the modern Kotlin/Android stack and create a practical tool for personal financial planning

### CESS/CPT, Česká spořitelna, a.s. (2016–2021)

Customer Pricing Tool is a configuration database with a set of tools for managing configuration
data and about 70 Spring Batch jobs/applications that calculate client fees and benefits.

- Member of an Agile (Scrum) team – role: developer, technical support, production support
- Technologies: Java, Spring, Spring Batch, REST, SOAP, Oracle SQL

### Cloud Data Backup Tool, Česká spořitelna, a.s. (2015)

Spring Boot CLI tool for incremental backup of user data from a Google Cloud domain.
Responsible for architecture, data model and implementation (Java, Spring Boot, Google Cloud Services).

### SyDesk, StringData, s.r.o. (2007–2016)

SyDesk is an application and infrastructure monitoring system. Low-level agents collect data
across the infrastructure, which is stored in a database and processed. The two main outputs
are notifications about current or upcoming problems and SLA reports.

- Responsibilities: Agile Team Leader (Kanban), Architect, Developer
- Technologies: Java, PHP, Oracle SQL

### Contract Archive, Česká spořitelna, a.s. (2014–2015)

Electronic Contract Archive – workflow web application for internal documents in the Google
Cloud environment. Team lead, analysis and development (Java, REST, Google AppEngine,
Google Datastore, Cloud SQL, AngularJS).

### Brasil/CSKN, Česká spořitelna, a.s. (2012)

Part of project Brasil – unified front-end for the branch network and introduction of SOA
architecture within the bank. Developed a module for parsing cadastral XML data and
generating printable PDF documents (Java, XML, XSLT).

### ELBST, ČSOB, a.s. (2010)

Workflow-driven web application supporting UAT tests and communication between internal
and external teams. Analysis, development and support (Java, JSP, Oracle SQL).

### Earlier projects (1994–2007)

Electronic banking system OfficeLine used by about fifteen banks – entering payment orders
and secure transfer to the bank with strong encryption and digital signing (team lead,
development, implementation, integration of banking systems).

Development of encryption and signing libraries for banking systems (DES, RSA), used as
part of secure transfer workflows between backend systems.

  </div>
  <div class="cv-layout__sidebar">

## Knowledge summary

### Languages

- Czech - native
- English - fluent

### Backend and integration technologies

- Java (JDK 8–25)
- Kotlin (Quarkus backend, library integration)
- Spring / Spring Boot (including Spring Batch)
- Quarkus (REST backends and microservices)
- REST (Jersey), SOAP, WS-Security
- Security: OAuth 2, JWT tokens
- Kafka, Redis
- Microservices architecture, Kubernetes
- Architecture: Domain-Driven Design (DDD), BFF (Backend for Frontend) pattern

### Frontend and web technologies

- HTML, CSS, JavaScript, TypeScript
- Vue 3, Pinia
- VitePress (documentation)

### Databases and persistence

- PostgreSQL, Oracle, MySQL, SQL
- JDBC, JPA

### Programming languages and platforms

- Java (primary language, JDK 8–25)
- Kotlin (code reviews and integration of shared libraries in production, Android apps, backend migration)

### XML and related technologies

- XML, XML Schema, XPath, XSLT (including generating PDF from XML)

### DevOps, tools and version control

- Git, Trunk Based Development
- Jenkins, Bitbucket, Nexus (Maven Artifact Repository)
- GitOps (ArgoCD), Helm
- OpenShift (PaaS)
- Atlassian Jira (user and administration experience)

### Testing and quality

- JUnit, Mockito, EasyMock
- Test Driven Development (TDD)

### AI-assisted development

- Active use of tools like GitHub Copilot / Windsurf for development and refactoring
- Ability to craft precise prompts and guide larger refactorings with AI while keeping the code readable and consistent

### Cryptography

- XML Signature, PKCS#7, PKCS#12, PKI

### Operating systems

- Unix / Linux - installation / administration

### Methodology

- Agile Development (Extreme Programming, Scrum)

## Education

- 1984–1988 Secondary Technical School of Mechanical and Electrical Engineering (Střední průmyslová škola strojní a elektrotechnická), Ústí nad Labem – Electrical Engineering, Maturita (high school diploma)

## Trainings

- **Developing Solutions for Microsoft Azure (AZ-204)** – *course in progress (Udemy)*
- **Azure Fundamentals (AZ-900)** – *exam preparation in progress (Udemy)*
- Kotlin for Java Developers (Coursera / JetBrains 2026)
- Security Maturity, level I (Komerční banka 2023)
- Kotlin for Java Developers (Udemy 2023)
- VueJS - The Complete Guide (Udemy 2023)
- Android Development Masterclass (Udemy 2021)
- Java SE certification preparation course (Udemy 2017)
- AngularJS (Angular.cz 2015)
- JavaEE 6 Application Development (GOPAS 2015)

  </div>
</div>
