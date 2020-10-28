export class Product {
    public id: string;
    public pName: string;
    public pDescription: string;
    public pRating: number;
    public pCategory: string;
    public price: number;
    public color: string;
    public image: string;
    public specification: string;
    public dateFirstAvailable: Date;
    public dateLastAvailable: Date;
    public pSeller: {
        s_Id: string;
        pDiscount: number;
        pQuantity: number;
        pShippingCharges: number;
    };
}
