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
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt())

def check_password(plain, hashed):
    return bcrypt.checkpw(plain.encode(), hashed.encode())

def user_exists(username):
    with psycopg2.connect(**DB_CONFIG) as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT 1 FROM users WHERE username = %s;", (username,))
            return cur.fetchone() is not None

def add_user(username, password):
    hashed = encrypt_password(password).decode()
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
                return check_password(password, result[0])
            return False

