import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';
import style from './Favorites.module.css';
import { getTypes } from "../../redux/actions";

export const Favorites = () => {
  const dispatch = useDispatch();

  const myFavorites = useSelector((state) => state.myFavorites)

  useEffect(() => {
    dispatch(getTypes());
}, [dispatch]);

  return (
    <div>
        <NavBar />
        <div className={style.mainContainer}>
            <h2>Favorites</h2>
            <div className={style.cards}>
              {myFavorites.map((data) => (
                <Card className={style.card} key={data.id} name={data.name.toUpperCase()} image={data.image} types={data.types} id={data.id}/> ))
         }
      </div>
        </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);