export class Product {
  public titel: string;
  public description: string;
  public price: number;
  public imageUrl: string;
  public imageUrl2: string;
  public imageUrl3: string;

  constructor(titel: string, desc: string, price: number, imageUrl: string, imageUrl2: string, imageUrl3: string) {
    this.titel = titel;
    this.description = desc;
    this.price = price;
    this.imageUrl = imageUrl;
    this.imageUrl2 = imageUrl2;
    this.imageUrl3 = imageUrl3;
  }
}
