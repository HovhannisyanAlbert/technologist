import React,{useEffect,useState}from 'react'
import { RootState, usedispatch } from '../../feautures/store/store'
import { GetAddUserCard, GetUserCard } from '../../feautures/thunk/thunk'
import { useSelector } from 'react-redux';
import styles from "./cardUserStyle.module.css"
import { itemsType } from './type';
import Cards from './Cards';
const CardUser = () => {
  const {cardUser, isLoading} = useSelector((state:RootState)=>state.user)
  const [size,setSize] = useState<number>(10)
  const dispatch = usedispatch()
  useEffect(()=>{
    dispatch(GetUserCard())
  },[dispatch])
  
  const handleAddCard = () => {
    setSize(size + 10)
    dispatch(GetAddUserCard(size))
  }

  return (
    <div className={styles.cardUser}>

      <div className={styles.cardsItems}>

        { 
        isLoading? <h2> Loading...</h2> :
          cardUser && cardUser.map((items:itemsType)=>(
            <Cards
              key={items.id}
              firstName={items.first_name}
              lastName={items.last_name}
              creditCard={items.credit_card}
              password={items.password}
              avatar={items.avatar}
              address={items.address}

            />
          ))
        }

       
      </div>
      <div className={styles.buttonContainer}>
      <button className={styles.addBtn} onClick={handleAddCard}> Add card user</button>
      </div>
  
    </div>
  )
}

export default CardUser