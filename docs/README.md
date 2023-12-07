# SKKU Mail Project

## Table of Contents

### 1. [Project Overview](#project-overview)
### 2. [How to Use](#how-to-use)
   - [Home](#home)
   - [User Authentication](#user-authentication)
     - [Signup](#signup)
     - [SMTP Password](#smtp-password)
     - [Login](#login)
     - [Logout](#login)
     - [Withdrawal](#withdrawal)
   - [Generate](#generate)
     - [Generate Mail](#generate-mail)
     - [Send Mail](#send-mail)
   - [Fetch Mailbox](#fetch-mailbox)
   - [Analyze](#analyze)
     - [Email List](#email-list)
     - [Email Detail](#email-detail)
     - [Extract Keywords](#extract-keyword)
       - [KeyBERT](#keybert)
     - [Summarize](#summarize)
       - [BERT Summary](#bert-summarize)
       - [OpenAI Summary](#openai-summarize)
     - [Translate](#translate)
         - [Google Translator](#google-translator)
         - [OpenAI Translator](#openai-summarize)
### 3. [Architecture](#architecture)
  - [Database](#database)
  - [Web Application](#web-application)
  - [Infrastructure](#infrastructure)
### 4. [Project Structure](#project-structure)
### 5. [License](#license)
### 6. [Installation](#installation)
### 7. [Running the Project](#running-the-project)
### 8. [Contributing](#contributing)
## Project Overview

SKKU Mail is an AI-based email management system, developed as a capstone design project. It leverages Django, MariaDB, BERT, KeyBERT, Let's Encrypt, Docker, and other technologies, and is hosted on AWS EC2 with Route53. The system offers features like automatic mail generation, mail analysis, translation, and more, utilizing AI models including GPT and BERT.

## How to Use

### Home

- **Before Login:** View the home screen.
  ![Home](img/screenshots/home.png )
- **After Login:** Access the user-specific home screen.
  ![Home after login](img/screenshots/home_after_login.png )

### User Authentication

#### Signup

- Click the Signup button on the Navbar or Home.
  ![Signup](img/screenshots/authapp_signup.png )

#### SMTP Password

- To use SMTP and IMAP, follow these steps:
- Create an application password for SMTP and IMAP usage.
- For Naver and Google workspace, SMTP password is the same as IMAP password.
  ![Gmail, Manage Your Google Account](img/screenshots/authapp_signup_smtp_password_0.png )
  ![Gmail, Security](img/screenshots/authapp_signup_smtp_password_1.png )
  ![Gmail, App password](img/screenshots/authapp_signup_smtp_password_2.png )
  ![Gmail, Generated app password](img/screenshots/authapp_signup_smtp_password_3.png )

#### Login

- Login via the Home Page or Navbar.
  ![Login](img/screenshots/authapp_login.png )

#### Withdrawal

- Withdraw from the service via the Navbar.
- Confirm by typing your password.
  ![Withdrawal](img/screenshots/authapp_withdrawal.png )

### Generate Mail

- Fill the form to generate a mail.
- Example:
  - Name: Yosep Kim
  - Relation: CEO of our Company
  - Style: Formal
  - Text: To keep up with rapidly changing technology trends...
  ![Generate Mail](img/screenshots/wmailapp_generate.png )
- A loading page appears during processing.
  ![Generate Mail Loading](img/screenshots/wmailapp_loading.png )

### Send Mail

- Preview your mail after a short wait due to API response limits.
  ![Send Mail](img/screenshots/wmailapp_send.png )
- Modify if needed and send. A loading screen appears during sending.
  ![Send Mail Result](img/screenshots/wmailapp_send_result.png )

### Fetch Mailbox

- Fetch emails by clicking the Fetch button in the navbar. This action doesn't affect the server's mailbox or read/unread status.
- Resetting affects only SKKU Mail's database.
  ![Fetch Mailbox](img/screenshots/rmailapp_fetch.png )

### Analyze Email
- Language Limit: English (automated detection) 
- String Limit: 2048 (automated truncation)
- Token limit: 1024 (automated truncation)
#### Email List

- Accessible from Home Page or Navbar.

#### Email Detail

- Click an email to view details.
  ![Email Detail](img/screenshots/rmailapp_mail_content.png )

#### Extract Keywords with KeyBERT

- KeyBERT utilizes BERT for keyword extraction.
  ![Extract Keywords](img/screenshots/rmailapp_keyword_bert.png )

#### Summarize Email

- Summarize content using BERT or OpenAI's API.

##### BERT Summary

- Summarize using our cloud resources.
  ![BERT Summary](img/screenshots/rmailapp_summary_bert.png )

##### OpenAI Summary

- Summarize using OpenAI RESTful API.

![OpenAI Summary](img/screenshots/rmailapp_summary_openai.png)

#### Translate Email

- Choose between OpenAI-based or Google-based translation.

##### Google Translator

- Fast but less accurate.
  ![Google Translator](img/screenshots/rmailapp_translate_gtrans.png)

##### OpenAI Translator

- Slower but more accurate.
  ![OpenAI Translator](img/screenshots/rmailapp_translate_openai.png )

## Architecture
### Database
#### ER Diagram
![ER Diagram](img/architecture/erd.png)
#### Session Management
![Session Management](img/architecture/session_management.png)
#### Test DB Setup
- MariaDB Container Access
```bash
docker exec -it {container_id} mysql -u root -p
```

- Execute SQL
```sql
-- Grant privileges only for the test database
GRANT ALL PRIVILEGES ON `test\_%`.* TO 'mailai_user'@'%';
FLUSH PRIVILEGES;
```

- Check Privileges
```sql
SHOW GRANTS FOR 'mailai_user'@'%';
```

## Project Structure

```bash
skkumail/                      
├── build_docs.sh              – Auto-build & push Doxygen docs
├── commit.sh                  – Interactive git-commit helper
├── docker-compose.yaml        – MariaDB + Django + nginx-proxy stack
├── Doxyfile / docs/           – Doxygen config & generated site
├── Makefile                   – Convenience targets (build/up/down/logs/docs)
├── LICENSE                    – Apache-2.0
└── src/                       – Django monorepo
    ├── manage.py              – Django CLI entry
    ├── mailai/                – Core settings, URLs, ASGI/WSGI
    ├── authapp/               – Sign-up / login, SMTP-pwd encryption
    ├── wmailapp/              – “Write” : GPT-powered email composer & sender
    ├── rmailapp/              – “Read”  : IMAP fetcher, keyword/summary tools
    ├── comm/                  – Shared utils (GPT/BERT, IMAP/SMTP, crypto)
    ├── Dockerfile             – Runtime image (Ubuntu + Gunicorn + Uvicorn)
    └── entrypoint.sh          – Migrate DB then launch Gunicorn
```