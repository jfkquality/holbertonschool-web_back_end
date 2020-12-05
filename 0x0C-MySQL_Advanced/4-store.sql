-- 4. Buy buy buy
-- creates a trigger that decreases the quantity of an item after adding a new order.
DELIMITER $$

CREATE TRIGGER lessqty
       AFTER INSERT ON orders
       FOR EACH ROW

UPDATE items
       SET quantity = quantity - new.number
