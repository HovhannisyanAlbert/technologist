export interface itemsType {
  id: number;
  first_name: string;
  last_name: string;
  credit_card: {
    cc_number: string;
  };
  password: string;
  avatar: string;
  address:{
    coordinates: {
      lat: number;
      lng: number;
    };
  }
 
}

export interface cardsPropsType {
  firstName: string;
  lastName: string;
  creditCard: {
    cc_number: string;
  };
  password: string;
  avatar: string;
  address:{
    coordinates: {
      lat: number;
      lng: number;
    };
  }
}
