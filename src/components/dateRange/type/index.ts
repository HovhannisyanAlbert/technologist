export interface dateCardProps {   
    inProgress:boolean | undefined 
    handleStartDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleEndDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    startDate: Date;
    endDate:Date
    handleStartProcess:()=>void
  }


 interface newArrType {
  startDate:string,
  endDate:string
}

export interface newArrTypes{
  newArr:newArrType[]
}

export interface dateProgressingPropsType{
  elapsedTime:number,

}


