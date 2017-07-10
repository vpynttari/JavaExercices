/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package java_h3t7_swapper;

/**
 *
 * @author vpynt
 */
public class Java_H3T7_swapper {

    public static void main(String[] args) {

        System.out.println("Please, enter the size of array: ");
        int size = In.readInt();
        char[] userArray = new char[size];
        for (int i = 0; i < size; i++) {
            System.out.print("Please give the index '" + i + "' character: ");
            userArray[i] = In.readChar();
        }
        printArray(userArray);

        System.out.println("Enter the first index value to be swapped: ");
        int index1 = In.readInt();
        System.out.println("Enter the second index value to be swapped: ");
        int index2 = In.readInt();

        if (swapChars(userArray, index1, index2)) {
            System.out.println("Chosen elements were swapped");
        } else {
            System.out.println("Element values were not swapped.");
        }
        printArray(userArray);
    }

    public static boolean swapChars(char[] charArray, int swap1, int swap2) {
        if ((charArray.length <= swap1) || (charArray.length <= swap2)
                || swap1 < 0 || swap2 < 0 || charArray == null) {
            return false;
        } else {
            char temp = charArray[swap1];
            charArray[swap1] = charArray[swap2];
            charArray[swap2] = temp;
            return true;
        }
    }

    public static void printArray(char[] array) {
        int size = array.length;
        System.out.print("{ ");
        for (int i = 0; i < size - 1; i++) {
            System.out.print("'" + array[i] + "', ");
        }
        System.out.println("'" + array[size - 1] + "' }");
    }
}
