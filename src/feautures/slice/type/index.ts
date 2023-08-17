interface cardUserType{
    id:number,
    first_name:string,
    last_name:string,
    credit_card:{
        cc_number:string
    }
    password:string
    avatar:string,
    address:{
      coordinates: {
          lat: number;
          lng: number;
        };
      }
}


export interface initialStateType{
    cardUser:cardUserType[],
    isLoading:boolean
}