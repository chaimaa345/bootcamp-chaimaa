# Tic Tac Toe using dictionary with numeric keys (1 to 9)

def create_board():
    return {
        1: ' ', 2: ' ', 3: ' ',
        4: ' ', 5: ' ', 6: ' ',
        7: ' ', 8: ' ', 9: ' '
    }

# Display the board
def display_board(board):
    print()
    print(f" {board[1]} | {board[2]} | {board[3]}")
    print("---|---|---")
    print(f" {board[4]} | {board[5]} | {board[6]}")
    print("---|---|---")
    print(f" {board[7]} | {board[8]} | {board[9]}")
    print()

# Check if the current player won
def check_win(board, player):
    win_combinations = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],  # rows
        [1, 4, 7], [2, 5, 8], [3, 6, 9],  # columns
        [1, 5, 9], [3, 5, 7]              # diagonals
    ]
    for combo in win_combinations:
        if all(board[pos] == player for pos in combo):
            return True
    return False

# Check if the board is full
def check_tie(board):
    return all(value != ' ' for value in board.values())

# Handle player move
def player_input(board, player):
    while True:
        try:
            move = int(input(f"Player {player}, choose your move (1-9): "))
            if move in board and board[move] == ' ':
                board[move] = player
                break
            else:
                print("Invalid move or spot taken. Try again.")
        except ValueError:
            print("Please enter a valid number (1-9).")

# Game loop
def play():
    board = create_board()
    current_player = 'X'
    display_board(board)

    while True:
        player_input(board, current_player)
        display_board(board)

        if check_win(board, current_player):
            print(f"🏆 Player {current_player} wins!")
            break
        elif check_tie(board):
            print("🤝 It's a tie!")
            break
        else:
            current_player = 'O' if current_player == 'X' else 'X'

# Run the game
play()
