CREATE DATABASE matcha;

--/c into todo_db

CREATE TABLE Users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    surname VARCHAR(30) NOT NULL,
    age INTEGER NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    -- MATCH TABLE
    sexe VARCHAR(30) NOT NULL,
    interest VARCHAR[],
    description TEXT,
    profile_picture VARCHAR(255),
    other_picture text[],
    -- localisation
    --score INTEGER,
    -- VISITED_PROFILE
    -- LIKED_OUR_PROFILE
    -- VISITED_OUR_PROFILE
    -- Blocked
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Match(
    id SERIAL PRIMARY KEY,
    -- User
    -- User_2
    like BOOLEAN,
    like_2 BOOLEAN
    -- CHAT
);

CREATE TABLE Chat(
    id SERIAL PRIMARY KEY,
    -- User
    -- User_2
    -- message
    -- message_2
);

CREATE TABLE Message(
    id SERIAL PRIMARY KEY,
    -- author
    message VARCHAR(255)
);


CREATE TABLE Visited_profile(
    -- user
    -- user_visited
);

CREATE TABLE Liked_our_profile(
    -- user
    -- user_liked
);

CREATE TABLE Visited_our_profile(
    -- user
    -- user_visit
);

CREATE TABLE Blocked(
    -- User
    -- User_blocked
);