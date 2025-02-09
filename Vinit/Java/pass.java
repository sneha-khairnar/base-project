import java.util.Scanner;

class pass {
    public static void main(String[] args) {
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

