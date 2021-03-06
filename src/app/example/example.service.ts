import { Injectable } from '@angular/core';

@Injectable()
export class ExampleService {
    products:Array<Example.Models.IProduct>=[
    {
      'id': 1,
      'name': 'Leaf Rake',
      'code': 'GDN-0011',
      'releaseDate': '2014-11-17T12:13:26 +05:00',
      'description': 'Leaf rake with 48-inch wooden handle.',
      'price': 19.95,
      'imageUrl': 'http://www.paraide.com/Portals/0/CVStoreImages/13160_540.jpg'
    },
    {
      'id': 2,
      'name': 'HAEMMERLIN 5000G GREEN POLY WHEELBARROW',
      'code': 'HAE-5000GG',
      'releaseDate': '2015-11-17T12:13:26 +05:00',
      'description': 'A great green wheelbarrow for the garden. The Poly has a 90 litre polypropylene tray that is ribbed for added strength. The 32mm tubular one-piece epoxy coated frame is fitted with bi-material grips for added comfort. A 400mm disc wheel is fitted with a solid 2 ply pneumatic tyre.',
      'price': 52.998,
      'imageUrl': 'http://www.qualitygardentools.com/uploaded/thumbnails/Go%20Green_2497_1000x1200.jpg'
    },
    {
      'id': 5,
      'name': 'Hammer',
      'code': 'TBX-0048',
      'releaseDate': '2013-11-17T12:13:26 +05:00',
      'description': 'Curved claw steel hammer',
      'price': 8.99,
      'imageUrl': 'http://lghttp.18445.nexcesscdn.net/808F9E/mage/media/catalog/product/cache/1/thumbnail/550x/9df78eab33525d08d6e5fb8d27136e95/v/5/v508_hammer.jpg'
    },
    {
      'id': 6,
      'name': 'FAITHFULL STEEL SHAFTED HATCHET ',
      'code': 'FAISH114',
      'releaseDate': '2013-11-17T12:13:26 +05:00',
      'description': 'All Steel camping hatchet with a bright finish and a comfortable rubber grip. It is supplied with a protective sheath which is slotted so that it can be carried on a belt. Size. 1.1/4lb. Handle length: 11in',
      'price': 13.99,
      'imageUrl': 'http://www.qualitygardentools.com/uploaded/thumbnails/FAISH114_2009_1000x1200.jpg'
    }
  ];
    getListProducts():Example.Models.IProduct[]{
        return this.products;
    }
}
