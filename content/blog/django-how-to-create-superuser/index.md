---
title: Django how to create superuser/admin
date: "2020-01-05T22:12:03.284Z"
tags: ['django', 'python']
published: true
---

## Introduction

A <b>django admin</b> user is a <b>super user</b> that can login and edit the Django Admin pages and components.

If your django application already exist and you have a virtual environment you must fist of all activate your virtual environment with the command

```shell
source <virtualenvname>/bin/activate
```

## Creating an admin user via command line

Once the virtualenv is active, if exist, you can run che <b>createsuperuser</b> command and follow the instructions

```shell
python manage.py createsuperuser
```

Django will ask you some information like the username

```shell
Username: admin
```

the email

```shell
Email address: admin@example.com
```

and the password

```shell
Password: **********
Password (again): *********
Superuser created successfully.
```

## Creating an admin user via interface

If you already have a <b>superuser</b> and you would to create a new one from interface you have to login to `http://localhost:8000/

![Admin interface](./admin01.png)

Then select the "User" voice from the table and click on "add"

![Admin User and group management](./admin02.png)

Compile the form and remember to select all the three option under Permissions (Active, Staff status, Superuser status)

![Admin Create super user](./admin03.png)
