export class ProductsList {
  public titel: string;
  public description: string;
  public price: number;
  public imageUrl: string

  constructor(titel: string, desc: string, price: number, imageUrl: string) {
    this.titel = titel;
    this.description = desc;
    this.price = price;
    this.imageUrl = imageUrl;
  }
};
