import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom";
import { getTypes, CreatePokemon, filterByOrigin } from "../../redux/actions";
import titulo from '../../images/creatupokemon.png'
import style from './CreatePokemon.module.css'
import validate from "../../components/Validation/Validate";

const Create = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const types = useSelector((state) => state.types);
    const pokemons = useSelector((state) => state.pokemons);

    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name:'',
        image:'',
        hp:'',
        attack:'',
        specialAttack:'',
        defense:'',
        specialDefense:'',
        speed:'',
        height:'',
        weight:'',
        types: []
    });

    const [showModal, setShowModal] = useState(false); 

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        setErrors(validate(input));
    }, [input]);

    const handleSelect = (e) => {
        setInput({ ...input, types: [...input.types, e.target.value]});
    };

    const handleDelete = (el) => {
        setInput({ ...input, types: input.types.filter(types => types !== el)})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(input);
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
          dispatch(CreatePokemon(input));
          alert('Pokemon creado');
          setInput({
            name:'',
            image:'',
            hp:'',
            attack:'',
            specialAttack:'',
            defense:'',
            specialDefense:'',
            speed:'',
            height:'',
            weight:'',
            types: []
          });
          history.push('/home');
        } else {
            alert('Completa todos los campos!');
        }
    };

    useEffect(() => {
        dispatch(getTypes());
        dispatch(filterByOrigin());
    }, [dispatch]);

    const handleShowModal = () => {
        setShowModal(true);
    }

    const handleHideModal = () => {
        setShowModal(false);
    }

    const handleImageSelect = (image) => {
        setInput({ ...input, image: image});
        setErrors(validate(input));
        handleHideModal();
    };

    const ImageModal = () => {
        return (
          <div className={style.modal}>
            <div className={style.modalContent}>
              <div className={style.imageList}>
              {pokemons.map((pokemon) => (<img key={pokemon.id }src={pokemon.image} alt={pokemon.name} onClick={() => handleImageSelect(pokemon.image)} />))}
              </div>
            </div>
          </div>
        );
    };

    return (
        <div className={style.mainContainer}>
            <h2><img src={titulo} alt="Crea tu Pokemon"></img></h2>
            
            <form onSubmit={handleSubmit} className={style.formContainer}>
                <div className={style.nameDiv}>
                    <label>Nombre</label>
                    <input type='text' value={input.name} name='name' onChange={handleChange} placeholder='Escribe el nombre de tu pokemon!'/>
                </div>
                {errors.name && (<p>{errors.name}</p>)}
                <div className={style.nameDiv}>
                    <label>Altura</label>
                    <input type="text" value={input.height} name='height' onChange={handleChange} placeholder='Escribe la altura de tu pokemon en metros'/>
                </div>
                {errors.height && (<p>{errors.height}</p>)}
                <div className={style.nameDiv}>
                    <label>Peso</label>
                    <input type="text" value={input.weight} name='weight' onChange={handleChange} placeholder='Escribe el peso de tu pokemon en kilogramos'/>
                </div>
                {errors.weight && (<p>{errors.weight}</p>)}
                <div className={style.rangeDiv}>
                    <label>Vida</label>
                    <input type="range" min="5" max="200" value={input.hp} name="hp" onChange={handleChange} />
                    <span>{input.hp}</span>
                </div>
                {errors.hp && (<p>{errors.hp}</p>)}
                <div className={style.rangeDiv}>
                    <label>Ataque</label>
                    <input type="range" min="5" max="200" value={input.attack} name='attack' onChange={handleChange}/>
                    <span>{input.attack}</span>
                </div>
                {errors.attack && (<p>{errors.attack}</p>)}
                <div className={style.rangeDiv}>
                    <label>Ataque especial</label>
                    <input type="range" min="5" max="200" value={input.specialAttack} name='specialAttack' onChange={handleChange}/>
                    <span>{input.specialAttack}</span>
                </div>
                <div className={style.rangeDiv}>
                    <label>Defensa</label>
                    <input type="range" min="5" max="200" value={input.defense} name='defense' onChange={handleChange}/>
                    <span>{input.defense}</span>
                </div>
                {errors.defense && (<p>{errors.defense}</p>)}
                <div className={style.rangeDiv}>
                    <label>Defensa especial</label>
                    <input type="range" min="5" max="200" value={input.specialDefense} name='specialDefense' onChange={handleChange}/>
                    <span>{input.specialDefense}</span>
                </div>
                <div className={style.rangeDiv}>
                    <label>Velocidad</label>
                    <input type="range" min="5" max="200" value={input.speed} name='speed' onChange={handleChange}/>
                    <span>{input.speed}</span>
                </div>
                <div className={style.selectDiv}>
                    <div className={style.selectDivChild}>
                        <label>Tipos</label>
                        <select onChange={handleSelect}>
                            {types.map((type) => (<option key={type.name} value={type.name}>{type.name}</option>))}
                        </select>
                    </div>
                    {errors.types && (<p>{errors.types}</p>)}
                    <div className={style.selectLi}>
                        {input.types.map(el => (
                        <div key={el}>
                            <ul>
                                <li>{el}</li>
                                <button onClick={() => handleDelete(el)}>x</button>
                            </ul>
                        </div>))}
                    </div>
                </div>
                <div className={style.imageDiv}>
                <button type="button" onClick={() => setShowModal(true)}>Agregar imagen</button>
                    {showModal && (
                    <ImageModal images={pokemons} onSelect={(url) => setInput({ ...input, image: url })} onClose={() => setShowModal(false)}/>)
                    }
                    <input type='text' value={input.image} name='image' onChange={handleChange} onClick={handleShowModal} />
                    <img src={input.image} alt={input.id}/>
                    {errors.image && (<p>{errors.image}</p>)}
                </div>
                <div className={style.buttonDiv}>
                    <Link to='/home' className={style.link}><button>VOLVER</button></Link>
                    <button type="submit">CREAR POKEMON</button>
                </div>
            </form>
        </div>
    );
};

export default Create;
