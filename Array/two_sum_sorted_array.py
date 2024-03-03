# Two Sum with a sorted array - 2 pointer approach
# This function iterates through the array with two pointers, one starting from the beginning and the other from the end. 
# It adjusts the pointers based on the sum of the values at their current positions compared to the target value. If the sum is equal to the target, 
# it adds the indexes to the result. If the sum is less than the target, it moves the left pointer to the right to increase the sum,
# and if the sum is greater than the target, it moves the right pointer to the left to decrease the sum.

def two_sum_sorted_array(arr, target):
    p1 = 0
    p2 = len(arr) - 1
    result = []

    while p1 < p2:
        sum_val = arr[p1] + arr[p2]
        if sum_val == target:
            result.append((p1, p2))
            p1 += 1
            p2 -= 1
        if sum_val > target:
            p2 -= 1
        if sum_val < target:
            p1 += 1

    return result

arr = [3,7,9,10]
target = 19
print("result", two_sum_sorted_array(arr, target))
