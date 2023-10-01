# SKKUMAIL: A GPT-Integrated Email Service for Dynamic Content Generation

SKKUMAIL aims to revolutionize email drafting by integrating the power of GPT for content creation. It's built with Next.js, Docker, and MongoDB, offering users a seamless, dynamic, and tailored email experience.

## Table of Contents

- [Introduction](#introduction)
- [Technical Stack](#technical-stack)
- [System Architecture](#system-architecture)
- [Technical Details](#technical-details)
- [Database Design](#database-design)
- [Role and Time Line](#role-and-time-line)
- [Installation & Running](#installation--running)
- [Building the Documentation](#building-the-documentation)

## Introduction

In the digital age, email remains pivotal for professional interactions. Composing proficient emails requires clarity, conciseness, and an appropriate tone, and that's where SKKUMAIL comes in.

## Technical Stack

- **Frontend**: Next.js
- **Backend**: FastAPI 
- **Backend Database**: MongoDB
- **Backend Deployment**: Docker, Docker Compose, EC2

## System Architecture

The architecture of SKKUMAIL is robust and modular, built to meet the demands of real-time processing.

### Components

- **Frontend**: Developed using Next.js for seamless UX/UI.
- **Backend**: Employs FastAPI for core logic, GPT API integration, and data processing.
- **Database**: MongoDB for storing prompts and dynamically generated content.

### Workflow

Users specify the target and mood of the email, and our system harnesses GPT to generate content that aligns with the intent.

## Technical Details

From frontend to backend, the technical tapestry of SKKUMAIL is woven with precision and state-of-the-art technologies.

### Frontend

Responsive and user-friendly, built with the Next.js framework.

### Backend

Built with FastAPI 
- Interaction with MongoDB
- Interaction with the GPT API
- Returning generated content to the frontend

### Data Flow Diagrams

Visual representations of how data flows in our system can be found below:

#### GPT API Flow

![GPT API Flow Diagram](https://github.com/skkumail/skkumail-doc/blob/main/gpt_api_flow.png)

#### SMTP Library Flow

![SMTP Library Flow Diagram](https://github.com/skkumail/skkumail-doc/blob/main/smtplib_flow.png)

## Database Design

Comprises three core tables: LOGIN, HISTORY, and SETTINGS. For a detailed understanding, see our ER Diagram below:

![ER Diagram](https://github.com/skkumail/skkumail-doc/blob/main/ER_Diagram.png)

## Role and Time Line

The Agile Scrum methodology was employed for project management.

### Team Roles

| Team Member | Role & Responsibilities                      |
|-------------|----------------------------------------------|
| Yosep Kim   | Project Manager, Backend Development         |
| Sumin Lim   | Frontend Development (Next.js, UX/UI)        |
| Dohyeon Boo | Backend Development (FastAPI, GPT, DB)       |
| Miseo Jeong | Frontend Development (Next.js, UX/UI)        |

