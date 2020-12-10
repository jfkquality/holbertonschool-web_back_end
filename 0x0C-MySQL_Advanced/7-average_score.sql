-- 7OB. Average score
--  computes and store the average score for a student.
DELIMITER $$

CREATE PROCEDURE ComputeAverageScoreForUser (IN user_id INT)
BEGIN
	UPDATE users as u,
	    (SELECT AVG(score) as avg_score
	    FROM corrections) as c
	    SET u.average_score = c.avg_score
	    WHERE u.id = user_id;
END$$

DELIMITER ;
