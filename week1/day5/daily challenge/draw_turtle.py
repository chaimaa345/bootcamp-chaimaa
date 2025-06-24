import turtle
from circle import c1, c2, c3, c4, circles  # ⬅️ On réutilise les cercles de circle.py

# Fonction pour dessiner un cercle avec turtle
def draw_circle(t, circle, x, y, color="black", scale=10, fill=False):
    t.penup()
    t.goto(x, y - circle.radius * scale)  # aller au bas du cercle
    t.pendown()
    t.pencolor(color)

    if fill:
        t.fillcolor(color)
        t.begin_fill()

    t.circle(circle.radius * scale)

    if fill:
        t.end_fill()

    # Afficher le rayon sous le cercle
    t.penup()
    t.goto(x, y - circle.radius * scale - 15)
    t.write(f"r={circle.radius}", align="center", font=("Arial", 10, "normal"))

# === Configuration turtle ===
screen = turtle.Screen()
screen.bgcolor("white")
screen.title("Visualisation des cercles")

pen = turtle.Turtle()
pen.pensize(2)
pen.speed(0)

# Couleurs utilisées pour les cercles (tu peux en ajouter)
colors = ["red", "green", "blue", "purple"]

# Dessiner les cercles triés avec espace
x_offset = -200
for circle, color in zip(circles, colors):
    draw_circle(pen, circle, x_offset, 0, color=color, fill=True)
    x_offset += circle.diameter * 10 + 20  # espace horizontal

pen.hideturtle()
screen.mainloop()
