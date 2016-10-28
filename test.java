public static void main(String[] args) {
 System.out.println("hello world");
 int x =25647;
 System.out.println("factorial de x es igual a "+facto(x));
//ronald 

}
public int facto(int x){
  return x==1?1:x*facto(x-1);
}
