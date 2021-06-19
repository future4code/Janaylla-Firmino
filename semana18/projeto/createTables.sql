
CREATE TABLE cookenu_login(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE cookenu_recipe(
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    text text NOT NULL,
    creation_date DATETIME,
    user_id  VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES cookenu_login(id)
);

CREATE TABLE cookenu_follow (
	following VARCHAR(255) NOT NULL,
    followed VARCHAR(255) NOT NULL,
    FOREIGN KEY (following) REFERENCES cookenu_login(id),
    FOREIGN KEY (followed) REFERENCES cookenu_login(id),
	CONSTRAINT PK_follow  PRIMARY KEY (following, followed)
)

ALTER TABLE cookenu_login ADD COLUMN role ENUM ('normal', 'admin', 'moderator') DEFAULT 'normal' NOT NULL;
