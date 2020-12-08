-- 6. Add bonus
--  creates a stored procedure AddBonus that adds a new correction for a student.
DELIMITER $$

CREATE PROCEDURE AddBonus (IN user_id INT, project_name VARCHAR(255), score INT)
BEGIN
	IF NOT EXISTS (
	   SELECT *
	   FROM projects
	   WHERE name = project_name)
	   THEN
	   	INSERT INTO projects(name) VALUES(project_name);
	END IF;

	INSERT INTO corrections(user_id, score,  project_id)
	       VALUES(user_id, score,
			(SELECT id from projects
			WHERE name = project_name)
			);
END$$

DELIMITER ;
