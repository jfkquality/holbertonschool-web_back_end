-- 5. Email validation to sent
-- creates a trigger that resets the attribute valid_email
-- only when the email has been changed.
DELIMITER $$

CREATE TRIGGER reset_email
       BEFORE UPDATE ON users
       FOR EACH ROW

BEGIN
	IF new.email != old.email THEN
	   SET new.valid_email = !old.valid_email;
	END IF;
END$$

DELIMITER ;
