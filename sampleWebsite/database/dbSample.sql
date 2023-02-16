/***********************************************************
 * Author: Leonard Siu                                     *
 * Date created: 24 August 2021                            *
 ***********************************************************/

CREATE DATABASE dbSample;
USE dbSample;

CREATE TABLE userSample
(
  userID INT NOT NULL PRIMARY KEY AUTO_INCREMENT
  ,username VARCHAR(10) NOT NULL
  ,emailAddress VARCHAR(100) NOT NULL
  ,password VARCHAR(50) NOT NULL
  ,gender ENUM('male', 'female')
  ,dateOfBirth DATE NULL DEFAULT NULL
)
