# This is the function that will check the values inside of M and if those values added
# will get the value of N
def sum(M, N):
    # Creation of the array A, that will get the answer if there are added values
    A = []
    # 2 iterations made with 'for', the  'i for' will remain static while the 'j for' will
    # check if the other values in the array can be added with the value of i.
    for i in range(len(M)):
        for j in range(i, len(M)):
            # The program will not check the values in the same position and because of this, I made ths If statement
            # that will avoid this comparison that will happen at the beginning of the iterations
            if i == j:
                continue
            elif M[i] + M[j] == N:
                # The values that will get the addition will be added to the array A with the method append
                A.append(M[i])
                A.append(M[j])
                return print(A)
    # In case that the program didn't found any numbers that will fulfill the criteria of the addition
    # it will print a massage saying this:
    return print("There are no values that will get the value of ", N, " by adding them.")

if __name__ == '__main__':
    # In this fist while, the program gets the input of the set of numbers M
    # and checks if M is empty, and also if there are 2 or more digits, since
    # the idea of the program is to sum 2 of the items in the set.
    while True:
        print("Please enter the set of numbers (M): ")
        M = list(map(int, input().split()))
        if len(M) == 0:
            print("There was no input, the set of numbers can not be empty, please try again.")
        elif len(M) > 1:
            break
        else:
            print("The program needs at least 2 numbers to work, please try again.")

    # Here the program just receive the value of N
    print("Please enter the value of N: ")
    N = int(input())

    # Here the program calls the function sum to make the validation of data and the addition.
    sum(M, N)
