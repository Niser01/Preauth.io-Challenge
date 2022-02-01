# This is the function that will check the values inside of M and if those values added
# will get the value of N
def sum(M, N):
    # Creation of the array A, that will get the answer if there are added values
    A = []
    # There are 3 variables created, a will take the first element of the array initially and will change to each element of the array
    # with every loop, so we can check the addition
    # 'i' will be a counter variable to check the other numbers of the array to check for the other elements of the addition
    # size will be a control variable, to make sure we don't get overflow errors with the array

    a = M[0]
    i = 0
    size = len(M)

    while True:
        # first we check if the addition is true
        if (a + M[i]) == N:
            # if it´s true we add the values to A, and return the result
            A.append(a)
            A.append(M[i])
            return print(A)
        # otherwise we check the point in the array that the variable i is, and we move it to the next position
        elif (i + 1) < size:
            i += 1
            # if the value of i is in the final position of the array, we also check where a is, so we can move a
            # to the next position or if we end the program because there aer no more values in the array
        elif (a + 1) == i:
            return print("There are no values that will get the value of ", N, " by adding them.")
            break
        else:
            a += 1
            i = a + 1


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
