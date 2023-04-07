public class Block{
	// Good Luck!
  public int width;
  public int length;
  public int height;
  public int volume;
  public int surfaceArea;
  
  public Block(int[] dimensions){
    this.width = dimensions[0];
    this.length = dimensions[1];
    this.height = dimensions[2];
    
    this.volume = width * length * height;
    
    this.surfaceArea = 2 * (width * length + width * height + length * height);
  }
  
  public int getWidth(){
    return this.width;
  }
  
  public int getLength(){
    return this.length;
  }
  
  public int getHeight(){
    return this.height;
  }
  
  public int getVolume(){
    return this.volume;
  }
  
  public int getSurfaceArea(){
    return this.surfaceArea;
  }
}