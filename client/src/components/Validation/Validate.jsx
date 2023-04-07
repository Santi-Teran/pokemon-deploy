const validate = (input) => {
    let errors = {};

    if (!input.name) errors.name = 'Se requiere un nombre';
    if (input.name.length < 3 || input.name.length > 10) errors.name = 'El nombre debe tener entre 3 y 10 letras';

    if (isNaN(input.height)) errors.height = 'La altura debe ser un numero entero'; 
    if (input.height < 0) errors.height = 'La altura no puede ser 0 o negativa';
    if (input.height > 10) errors.height = 'La altura no puede ser mayor a 10 metros';

    if (isNaN(input.weight)) errors.weight = 'El peso debe ser un numero entero'; 
    if (input.weight < 0) errors.weight = 'El peso no puede ser 0 o negativo';
    if (input.weight > 200) errors.weight = 'El peso no puede ser mayor a 200 kg';

    if (!input.hp) errors.hp = 'Se requiere vida';
    if (!input.attack) errors.attack = 'Se requiere ataque';
    if (!input.defense) errors.defense = 'Se requiere defensa';

    if (input.types.length === 0) errors.types = 'Se requiere un tipo';
    if (input.types.length > 2) errors.types = 'Solo se pueden elegir 1 o 2 tipos';

    if (!input.image) errors.image = 'Se requiere una imagen';
    return errors;
};

export default validate;