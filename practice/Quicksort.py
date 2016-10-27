#!/usr/bin/python
nums = [1, 3, 3, 5, 1, 2, 4, 9, 2, 10, 6, 7, 8]


def quickSort(l, r):
    if l >= r:
        return
    i = l
    j = r - 1
    while i < j:
        while nums[i] < nums[r] and i < j:
            i = i+1
        while nums[j] >= nums[r] and i < j:
            j = j-1
        nums[i], nums[j] = nums[j], nums[i]
    if nums[i] > nums[r]:
        nums[i], nums[r] = nums[r], nums[i]
    quickSort(l, i-1)
    quickSort(i+1, r)


if __name__ == "__main__":
    quickSort(0, len(nums)-1)
    print len(nums)
    print nums
