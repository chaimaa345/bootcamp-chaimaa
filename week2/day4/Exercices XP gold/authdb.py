import psycopg2
import bcrypt

DB_CONFIG = {
    'dbname': 'resto',
    'user': 'postgres',
    'password': '1234',
    'host': 'localhost',
    'port': '5432'
}

def encrypt_password(password):
    # Hash password with automatic salt
    hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
    return hashed

def check_password(plain_password, hashed_password):
    # Compare plaintext password with hashed version
    return bcrypt.checkpw(plain_password.encode(), hashed_password.encode())

def user_exists(username):
    with psycopg2.connect(**DB_CONFIG) as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM users WHERE username = %s;", (username,))
            return cur.fetchone() is not None

def add_user(username, password):
    hashed = encrypt_password(password).decode()  # decode bytes to str for DB
    with psycopg2.connect(**DB_CONFIG) as conn:
        with conn.cursor() as cur:
            cur.execute("INSERT INTO users (username, password) VALUES (%s, %s);", (username, hashed))
            conn.commit()

def check_login(username, password):
    with psycopg2.connect(**DB_CONFIG) as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT password FROM users WHERE username = %s;", (username,))
            result = cur.fetchone()
            if result:
                hashed_password = result[0]
                return check_password(password, hashed_password)
            return False

