/**
 *
 *  * Definition for singly-linked list.
 *
 *   * function ListNode(val) {
 *
 *    *     this.val = val;
 *
 *     *     this.next = null;
 *
 *      * }
 *
 *       */

/**
 *
 *  * @param {ListNode} l1
 *
 *   * @param {ListNode} l2
 *
 *    * @return {ListNode}
 *
 *     */

var addTwoNumbers = function(l1, l2) {

    var add = 0;

    var a, b;

    var list = [];

    do {

        if (l1 === null) {

            a = 0;

        } else {

            a = l1.val;

            l1 = l1.next;

        }

        if (l2 === null) {

            b = 0;

        } else {

            b = l2.val;

            l2 = l2.next;

        }

        list.push((a + b + add) % 10);

        add = parseInt((a + b + add) / 10);

    } while (l1 !== null || l2 !== null || add !== 0);

    return list

};
