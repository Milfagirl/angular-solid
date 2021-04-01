import { Injectable } from '@angular/core';


interface Data {
  type: string;
  _id: string;
  amount: string;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  phone: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})



export class DataListService {
typeFilter  = '';
arr: any;

data: Data[] = [
    {
        _id: '5d99beb677015a5c2c14542e',
        amount: 'floating(1, 4000, 2)',
        type: 'outcome',
        name: {
          first: 'Jordan',
          last: 'Bauer'
        },
        company: 'SNORUS',
        email: 'jordan.bauer@snorus.net',
        phone: '+1 (901) 404-2928',
        address: '712 Bills Place, Cochranville, Florida, 6951'
      },
      {
        _id: '5d99beb69a6aac64be820dbe',
        amount: 'floating(1, 4000, 2)',
        type: 'outcome',
        name: {
          first: 'Francis',
          last: 'Owens'
        },
        company: 'EXOPLODE',
        email: 'francis.owens@exoplode.us',
        phone: '+1 (954) 566-2476',
        address: '457 Stockholm Street, Montura, Pennsylvania, 7855'
      },
      {
        _id: '5d99beb635dd82195040195b',
        amount: 'floating(1, 4000, 2)',
        type: 'outcome',
        name: {
          first: 'Bass',
          last: 'Church'
        },
        company: 'ACCRUEX',
        email: 'bass.church@accruex.com',
        phone: '+1 (881) 403-2661',
        address: '786 Ira Court, Abiquiu, Kentucky, 1055'
      },
      {
        _id: '5d99beb6283bac04b3763000',
        amount: 'floating(1, 4000, 2)',
        type: 'outcome',
        name: {
          first: 'Mabel',
          last: 'Holt'
        },
        company: 'MALATHION',
        email: 'mabel.holt@malathion.io',
        phone: '+1 (951) 520-3392',
        address: '890 Alice Court, Bath, New Hampshire, 6400'
      },
      {
        _id: '5d99beb6207f35413c9b629b',
        amount: 'floating(1, 4000, 2)',
        type: 'loan',
        name: {
          first: 'Lambert',
          last: 'Higgins'
        },
        company: 'GEEKOLOGY',
        email: 'lambert.higgins@geekology.name',
        phone: '+1 (957) 573-3207',
        address: '513 Schroeders Avenue, Moquino, Connecticut, 6353'
      },
      {
        _id: '5d99beb6f6db754cee0835a0',
        amount: 'floating(1, 4000, 2)',
        type: 'income',
        name: {
          first: 'Jeanie',
          last: 'Wiley'
        },
        company: 'CORECOM',
        email: 'jeanie.wiley@corecom.tv',
        phone: '+1 (931) 432-2272',
        address: '196 Highland Boulevard, Wildwood, Georgia, 8732'
      },
      {
        _id: '5d99beb6c0c5d1e73c8bb5a2',
        amount: 'floating(1, 4000, 2)',
        type: 'income',
        name: {
          first: 'Lynn',
          last: 'Summers'
        },
        company: 'BLUEGRAIN',
        email: 'lynn.summers@bluegrain.biz',
        phone: '+1 (877) 578-3987',
        address: '999 Ellery Street, Hartsville/Hartley, Tennessee, 8475'
      },
      {
        _id: '5d99beb69aec11b778e276c9',
        amount: 'floating(1, 4000, 2)',
        type: 'investment',
        name: {
          first: 'Roseann',
          last: 'Lowe'
        },
        company: 'NORALI',
        email: 'roseann.lowe@norali.org',
        phone: '+1 (969) 433-3912',
        address: '209 Saratoga Avenue, Riegelwood, Northern Mariana Islands, 3804'
      },
      {
        _id: '5d99beb61851f0fadfe6bca0',
        amount: 'floating(1, 4000, 2)',
        type: 'loan',
        name: {
          first: 'Dianna',
          last: 'Underwood'
        },
        company: 'GEOLOGIX',
        email: 'dianna.underwood@geologix.me',
        phone: '+1 (831) 506-2281',
        address: '379 Polar Street, Derwood, Michigan, 8219'
      },
      {
        _id: '5d99beb61894e3a0d8a8aaeb',
        amount: 'floating(1, 4000, 2)',
        type: 'investment',
        name: {
          first: 'Misty',
          last: 'Wells'
        },
        company: 'ZILCH',
        email: 'misty.wells@zilch.info',
        phone: '+1 (803) 453-3224',
        address: '473 Rochester Avenue, Kraemer, Illinois, 140'
      },
      {
        _id: '5d99beb6b15536f75b46a608',
        amount: 'floating(1, 4000, 2)',
        type: 'investment',
        name: {
          first: 'Tammie',
          last: 'Cotton'
        },
        company: 'GENMOM',
        email: 'tammie.cotton@genmom.co.uk',
        phone: '+1 (891) 471-2924',
        address: '599 Juliana Place, Alafaya, Maryland, 917'
      },
      {
        _id: '5d99beb62fc237aa62133abc',
        amount: 'floating(1, 4000, 2)',
        type: 'income',
        name: {
          first: 'Rasmussen',
          last: 'Paul'
        },
        company: 'SUPPORTAL',
        email: 'rasmussen.paul@supportal.biz',
        phone: '+1 (829) 473-3553',
        address: '164 Cedar Street, Basye, District Of Columbia, 5164'
      },
      {
        _id: '5d99beb6e0f76b46c0f5ce21',
        amount: 'floating(1, 4000, 2)',
        type: 'outcome',
        name: {
          first: 'Allie',
          last: 'Solomon'
        },
        company: 'TOYLETRY',
        email: 'allie.solomon@toyletry.net',
        phone: '+1 (835) 596-3561',
        address: '335 Noll Street, Ernstville, New York, 5938'
      },
      {
        _id: '5d99beb67ba49c6e156b8999',
        amount: 'floating(1, 4000, 2)',
        type: 'investment',
        name: {
          first: 'Hammond',
          last: 'Stanton'
        },
        company: 'XTH',
        email: 'hammond.stanton@xth.us',
        phone: '+1 (967) 413-2650',
        address: '468 Clifton Place, Harold, Puerto Rico, 2501'
      },
      {
        _id: '5d99beb6b13450897a61c8b0',
        amount: 'floating(1, 4000, 2)',
        type: 'loan',
        name: {
          first: 'Scott',
          last: 'Petty'
        },
        company: 'ZOINAGE',
        email: 'scott.petty@zoinage.com',
        phone: '+1 (913) 425-3420',
        address: '475 Herkimer Street, Barstow, Utah, 9466'
      },
      {
        _id: '5d99beb6f9f4e1748d85a971',
        amount: 'floating(1, 4000, 2)',
        type: 'outcome',
        name: {
          first: 'Alexander',
          last: 'Harrell'
        },
        company: 'RONELON',
        email: 'alexander.harrell@ronelon.io',
        phone: '+1 (940) 577-2114',
        address: '962 Falmouth Street, Loma, Iowa, 2743'
      },
      {
        _id: '5d99beb600162e31cce6d255',
        amount: 'floating(1, 4000, 2)',
        type: 'loan',
        name: {
          first: 'Letitia',
          last: 'Combs'
        },
        company: 'PHOLIO',
        email: 'letitia.combs@pholio.name',
        phone: '+1 (962) 515-2518',
        address: '480 Tapscott Avenue, Remington, Arkansas, 4987'
      },
      {
        _id: '5d99beb6f46990cdedd7a054',
        amount: 'floating(1, 4000, 2)',
        type: 'loan',
        name: {
          first: 'Myers',
          last: 'Russell'
        },
        company: 'IDEGO',
        email: 'myers.russell@idego.tv',
        phone: '+1 (923) 524-3492',
        address: '912 Veronica Place, Sugartown, Alabama, 1510'
      },
      {
        _id: '5d99beb68066435dd603b971',
        amount: 'floating(1, 4000, 2)',
        type: 'outcome',
        name: {
          first: 'Daphne',
          last: 'Pearson'
        },
        company: 'ZYTREK',
        email: 'daphne.pearson@zytrek.biz',
        phone: '+1 (887) 565-2927',
        address: '786 Elliott Walk, Collins, California, 7185'
      },
      {
        _id: '5d99beb6481acdc4f1f2dbcd',
        amount: 'floating(1, 4000, 2)',
        type: 'loan',
        name: {
          first: 'Dillon',
          last: 'Hull'
        },
        company: 'CENTURIA',
        email: 'dillon.hull@centuria.org',
        phone: '+1 (882) 473-3051',
        address: '915 Dekoven Court, Tyhee, Indiana, 7029'
      },
      {
        _id: '5d99beb66abe615580c7868c',
        amount: 'floating(1, 4000, 2)',
        type: 'income',
        name: {
          first: 'Reese',
          last: 'Hunt'
        },
        company: 'KEENGEN',
        email: 'reese.hunt@keengen.me',
        phone: '+1 (983) 503-2309',
        address: '280 Delevan Street, Tyro, Nebraska, 3995'
      },
      {
        _id: '5d99beb6cf9df8720ce4e771',
        amount: 'floating(1, 4000, 2)',
        type: 'investment',
        name: {
          first: 'Howard',
          last: 'Hodge'
        },
        company: 'KIOSK',
        email: 'howard.hodge@kiosk.info',
        phone: '+1 (937) 538-3339',
        address: '350 Schenectady Avenue, Osmond, North Carolina, 6893'
      },
      {
        _id: '5d99beb6022f6189a1f23970',
        amount: 'floating(1, 4000, 2)',
        type: 'loan',
        name: {
          first: 'Kathleen',
          last: 'Patel'
        },
        company: 'ACCUFARM',
        email: 'kathleen.patel@accufarm.co.uk',
        phone: '+1 (988) 567-3882',
        address: '801 Albany Avenue, Greenbackville, Delaware, 8396'
      },
      {
        _id: '5d99beb6230c62aa8243ff80',
        amount: 'floating(1, 4000, 2)',
        type: 'outcome',
        name: {
          first: 'Amparo',
          last: 'Horne'
        },
        company: 'MARQET',
        email: 'amparo.horne@marqet.biz',
        phone: '+1 (958) 519-3437',
        address: '584 Colonial Court, Waterview, Oregon, 8213'
      },
      {
        _id: '5d99beb6f7f32d24da875f1b',
        amount: 'floating(1, 4000, 2)',
        type: 'investment',
        name: {
          first: 'Acevedo',
          last: 'Finley'
        },
        company: 'DANCITY',
        email: 'acevedo.finley@dancity.net',
        phone: '+1 (955) 598-3527',
        address: '185 Amboy Street, Elliston, Virgin Islands, 374'
      },
      {
        _id: '5d99beb68b54b0c3a0ef3470',
        amount: 'floating(1, 4000, 2)',
        type: 'income',
        name: {
          first: 'Moore',
          last: 'Strong'
        },
        company: 'TELEQUIET',
        email: 'moore.strong@telequiet.us',
        phone: '+1 (809) 406-3732',
        address: '542 Will Place, Hampstead, Montana, 6733'
      },
      {
        _id: '5d99beb6b7490a9aacc00b1a',
        amount: 'floating(1, 4000, 2)',
        type: 'investment',
        name: {
          first: 'Ina',
          last: 'Becker'
        },
        company: 'QUOTEZART',
        email: 'ina.becker@quotezart.com',
        phone: '+1 (955) 491-3087',
        address: '699 Miller Place, Glidden, Idaho, 6159'
      },
      {
        _id: '5d99beb64e9dfcb53acd8626',
        amount: 'floating(1, 4000, 2)',
        type: 'outcome',
        name: {
          first: 'Dorsey',
          last: 'Juarez'
        },
        company: 'ENERSAVE',
        email: 'dorsey.juarez@enersave.io',
        phone: '+1 (937) 403-2109',
        address: '427 Rock Street, Joppa, New Jersey, 9046'
      },
      {
        _id: '5d99beb6f53bb9cc0b870839',
        amount: 'floating(1, 4000, 2)',
        type: 'loan',
        name: {
          first: 'Wolfe',
          last: 'Michael'
        },
        company: 'ISOLOGIA',
        email: 'wolfe.michael@isologia.name',
        phone: '+1 (928) 559-2490',
        address: '612 Varick Street, Charco, West Virginia, 8585'
      },
      {
        _id: '5d99beb626d3124fa91e7429',
        amount: 'floating(1, 4000, 2)',
        type: 'outcome',
        name: {
          first: 'Manning',
          last: 'Preston'
        },
        company: 'GENMY',
        email: 'manning.preston@genmy.tv',
        phone: '+1 (897) 497-3105',
        address: '161 Hubbard Street, Coaldale, Wyoming, 617'
      },
      {
        _id: '5d99beb664a4e4c72591f9a3',
        amount: 'floating(1, 4000, 2)',
        type: 'income',
        name: {
          first: 'Tucker',
          last: 'Bender'
        },
        company: 'SUPREMIA',
        email: 'tucker.bender@supremia.biz',
        phone: '+1 (934) 461-2588',
        address: '844 Metropolitan Avenue, Brule, Colorado, 3619'
      },
      {
        _id: '5d99beb66b24688a0de700a0',
        amount: 'floating(1, 4000, 2)',
        type: 'outcome',
        name: {
          first: 'Skinner',
          last: 'Mcfarland'
        },
        company: 'ZBOO',
        email: 'skinner.mcfarland@zboo.org',
        phone: '+1 (965) 468-3953',
        address: '513 Clarkson Avenue, Crawfordsville, Palau, 2489'
      },
      {
        _id: '5d99beb6c0dba22f51f3adc2',
        amount: 'floating(1, 4000, 2)',
        type: 'investment',
        name: {
          first: 'Farrell',
          last: 'Campbell'
        },
        company: 'HALAP',
        email: 'farrell.campbell@halap.me',
        phone: '+1 (803) 588-2940',
        address: '481 Suydam Place, Machias, South Dakota, 1384'
      },
      {
        _id: '5d99beb6d3647cf8b14c9409',
        amount: 'floating(1, 4000, 2)',
        type: 'income',
        name: {
          first: 'Cathy',
          last: 'Oneil'
        },
        company: 'ACUSAGE',
        email: 'cathy.oneil@acusage.info',
        phone: '+1 (924) 587-3879',
        address: '663 Dahill Road, Crucible, Oklahoma, 4041'
      },
      {
        _id: '5d99beb698d1fbade2a863a3',
        amount: 'floating(1, 4000, 2)',
        type: 'outcome',
        name: {
          first: 'Lindsey',
          last: 'Gates'
        },
        company: 'HOTCAKES',
        email: 'lindsey.gates@hotcakes.co.uk',
        phone: '+1 (912) 502-2920',
        address: '958 Crescent Street, Coyote, Vermont, 2958'
      },
      {
        _id: '5d99beb633f3e5c3e8378aa7',
        amount: 'floating(1, 4000, 2)',
        type: 'outcome',
        name: {
          first: 'Key',
          last: 'Armstrong'
        },
        company: 'VISUALIX',
        email: 'key.armstrong@visualix.biz',
        phone: '+1 (845) 531-2978',
        address: '933 Woodpoint Road, Fontanelle, New Mexico, 7487'
      },
      {
        _id: '5d99beb6af9bf2e627e8f6ad',
        amount: 'floating(1, 4000, 2)',
        type: 'outcome',
        name: {
          first: 'Mueller',
          last: 'Woods'
        },
        company: 'SENSATE',
        email: 'mueller.woods@sensate.net',
        phone: '+1 (853) 514-2094',
        address: '804 Kermit Place, Cetronia, Maine, 3848'
      },
      {
        _id: '5d99beb6967feb03ef03b2e9',
        amount: 'floating(1, 4000, 2)',
        type: 'investment',
        name: {
          first: 'Stacey',
          last: 'Aguilar'
        },
        company: 'ENAUT',
        email: 'stacey.aguilar@enaut.us',
        phone: '+1 (919) 573-2912',
        address: '237 Concord Street, Bannock, Mississippi, 2727'
      },
      {
        _id: '5d99beb6069071371bb4fe57',
        amount: 'floating(1, 4000, 2)',
        type: 'investment',
        name: {
          first: 'Fitzpatrick',
          last: 'Martinez'
        },
        company: 'HINWAY',
        email: 'fitzpatrick.martinez@hinway.com',
        phone: '+1 (868) 569-2829',
        address: '856 Willoughby Avenue, Draper, Washington, 4905'
      },
      {
        _id: '5d99beb645e90e295a14abaf',
        amount: 'floating(1, 4000, 2)',
        type: 'investment',
        name: {
          first: 'Sanchez',
          last: 'Hooper'
        },
        company: 'REVERSUS',
        email: 'sanchez.hooper@reversus.io',
        phone: '+1 (934) 445-2142',
        address: '489 Roebling Street, Gorst, Guam, 5212'
      },
      {
        _id: '5d99beb65b3f217fd4c9fe32',
        amount: 'floating(1, 4000, 2)',
        type: 'loan',
        name: {
          first: 'Christian',
          last: 'Henry'
        },
        company: 'QUALITEX',
        email: 'christian.henry@qualitex.name',
        phone: '+1 (871) 451-2636',
        address: '515 Baycliff Terrace, Englevale, Massachusetts, 2526'
      },
      {
        _id: '5d99beb690336c6b9a82eb4a',
        amount: 'floating(1, 4000, 2)',
        type: 'outcome',
        name: {
          first: 'Jodie',
          last: 'Guerrero'
        },
        company: 'ZENTIME',
        email: 'jodie.guerrero@zentime.tv',
        phone: '+1 (849) 571-3318',
        address: '995 Tampa Court, Bloomington, Minnesota, 4717'
      },
      {
        _id: '5d99beb6c3b33f427845205d',
        amount: 'floating(1, 4000, 2)',
        type: 'outcome',
        name: {
          first: 'Conley',
          last: 'Monroe'
        },
        company: 'CANOPOLY',
        email: 'conley.monroe@canopoly.biz',
        phone: '+1 (981) 584-2075',
        address: '439 Paerdegat Avenue, Gouglersville, Hawaii, 3452'
      },
      {
        _id: '5d99beb6121ba61ba9c779bc',
        amount: 'floating(1, 4000, 2)',
        type: 'loan',
        name: {
          first: 'Janell',
          last: 'Banks'
        },
        company: 'ZORK',
        email: 'janell.banks@zork.org',
        phone: '+1 (957) 525-3157',
        address: '706 Kimball Street, Brutus, Marshall Islands, 3668'
      },
      {
        _id: '5d99beb6e7771bb8cff666d6',
        amount: 'floating(1, 4000, 2)',
        type: 'outcome',
        name: {
          first: 'Ward',
          last: 'Castro'
        },
        company: 'SIGNIDYNE',
        email: 'ward.castro@signidyne.me',
        phone: '+1 (881) 450-3092',
        address: '346 Atkins Avenue, Gloucester, Federated States Of Micronesia, 2540'
      },
      {
        _id: '5d99beb6086149feeefc2e66',
        amount: 'floating(1, 4000, 2)',
        type: 'loan',
        name: {
          first: 'Hogan',
          last: 'Walter'
        },
        company: 'BARKARAMA',
        email: 'hogan.walter@barkarama.info',
        phone: '+1 (815) 574-2671',
        address: '857 Indiana Place, Esmont, Texas, 8818'
      },
      {
        _id: '5d99beb6ff11eacb34de4f10',
        amount: 'floating(1, 4000, 2)',
        type: 'loan',
        name: {
          first: 'Inez',
          last: 'Zamora'
        },
        company: 'ESSENSIA',
        email: 'inez.zamora@essensia.co.uk',
        phone: '+1 (894) 557-2393',
        address: '465 Tompkins Place, Caron, Wisconsin, 5950'
      },
      {
        _id: '5d99beb60be55eb1da68c4ba',
        amount: 'floating(1, 4000, 2)',
        type: 'loan',
        name: {
          first: 'Bridges',
          last: 'Patton'
        },
        company: 'SONGBIRD',
        email: 'bridges.patton@songbird.biz',
        phone: '+1 (929) 410-2526',
        address: '137 Apollo Street, Balm, Arizona, 1965'
      },
      {
        _id: '5d99beb64337005cefde4626',
        amount: 'floating(1, 4000, 2)',
        type: 'loan',
        name: {
          first: 'Grimes',
          last: 'Jenkins'
        },
        company: 'GINKLE',
        email: 'grimes.jenkins@ginkle.net',
        phone: '+1 (916) 426-2443',
        address: '397 Ashland Place, Cedarville, Kansas, 8820'
      },
      {
        _id: '5d99beb6f7e4e652c75868a8',
        amount: 'floating(1, 4000, 2)',
        type: 'investment',
        name: {
          first: 'Shepherd',
          last: 'Durham'
        },
        company: 'ZEAM',
        email: 'shepherd.durham@zeam.us',
        phone: '+1 (970) 570-2377',
        address: '826 Union Avenue, Walker, Rhode Island, 9180'
      },
      {
        _id: '5d99beb63c892055952c1908',
        amount: 'floating(1, 4000, 2)',
        type: 'investment',
        name: {
          first: 'Morris',
          last: 'Stephens'
        },
        company: 'AQUACINE',
        email: 'morris.stephens@aquacine.com',
        phone: '+1 (854) 409-3865',
        address: '183 Tehama Street, Spokane, Nevada, 2375'
      },
      {
        _id: '5d99beb6c614fe4c8ca3c023',
        amount: 'floating(1, 4000, 2)',
        type: 'investment',
        name: {
          first: 'Josie',
          last: 'House'
        },
        company: 'ISOSURE',
        email: 'josie.house@isosure.io',
        phone: '+1 (901) 547-2615',
        address: '659 Hill Street, Rowe, Missouri, 8918'
      },
      {
        _id: '5d99beb6558891537809623e',
        amount: 'floating(1, 4000, 2)',
        type: 'loan',
        name: {
          first: 'Hall',
          last: 'Brewer'
        },
        company: 'UBERLUX',
        email: 'hall.brewer@uberlux.name',
        phone: '+1 (954) 436-3000',
        address: '335 Cumberland Walk, Loveland, North Dakota, 853'
      },
      {
        _id: '5d99beb6a5060fbac46cc79d',
        amount: 'floating(1, 4000, 2)',
        type: 'investment',
        name: {
          first: 'Perkins',
          last: 'Watkins'
        },
        company: 'RUBADUB',
        email: 'perkins.watkins@rubadub.tv',
        phone: '+1 (822) 587-3479',
        address: '240 Independence Avenue, Wanamie, Alaska, 3833'
      }
];

// tslint:disable-next-line:typedef
filterData(id: number) {
  switch (id) {
    case 0: {
      this.typeFilter = 'income';
      break;
    }
    case 1: {
      this.typeFilter = 'outcome';
      break;
    }
    case 2: {
      this.typeFilter = 'loan';
      break;
    }
    case 3: {
      this.typeFilter = 'investment';
      break;
    }
  }
  this.arr = this.data.filter( o => o.type === this.typeFilter);

}

}
