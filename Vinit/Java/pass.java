// A simple program to check for password input
import java.util.Scanner;

class pass {
    public static void main(String[] args) {
        System.out.println("This is the sign in process");
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter sing-in password: ");
        String log = scanner.nextLine();
       
                for(int i = 0; i < 3; i++){
                System.out.print("Enter password: ");
                String pass = scanner.nextLine();
                scanner.close();
                if(pass.equals(log)){
                    System.out.println("Right password");
                    break;
                
                }    
            }
        }
    }

