module.exports = (sequelize, DataTypes) => {

    const Address = sequelize.define ("Address",{
    id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
    
    street: DataTypes.STRING,
    
    number: DataTypes.INTEGER,
    
    floor: DataTypes.INTEGER,
    
    apartment: DataTypes.STRING,
    
    place: DataTypes.STRING,
    
    province: DataTypes.STRING,
    
    zipCode: DataTypes.INTEGER,

    
    },{tableName: "ADDRESS"});
    
    return Address;
    }