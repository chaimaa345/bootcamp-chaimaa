CREATE OR REPLACE FUNCTION get_order_total(orderId INT)
RETURNS NUMERIC AS $$
DECLARE
    total NUMERIC;
BEGIN
    SELECT SUM(price * quantity)
    INTO total
    FROM items
    WHERE order_id = orderId;

    RETURN COALESCE(total, 0);
END;
$$ LANGUAGE plpgsql;





