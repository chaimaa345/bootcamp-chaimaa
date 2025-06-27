--Common foreign keys:

--address_id → references address(address_id)

--store_id → references store(store_id)

--You cannot insert a customer without first having a valid address and store.
--You must insert into those tables first then reference them

SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'customer';



